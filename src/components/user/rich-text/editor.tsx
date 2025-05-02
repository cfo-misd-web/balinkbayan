import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
    Bold,
    Italic,
    Heading,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ListOrdered,
    List,
    Image as ImageIcon,
    Maximize,
    Minimize,
    Grid2X2,
    Grid3X3
} from "lucide-react";

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const ResizableImage = Image.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            width: {
                default: '100%',
                renderHTML: attributes => {
                    return {
                        width: attributes.width,
                        style: `width: ${attributes.width}`,
                    };
                },
            },
            group: {
                default: null,
                renderHTML: attributes => {
                    return {
                        'data-group': attributes.group
                    };
                }
            },
            layout: {
                default: null,
                renderHTML: attributes => {
                    return {
                        'data-layout': attributes.layout
                    };
                }
            }
        };
    },
});

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ node: any, width: number } | null>(null);
    const [imageLayout, setImageLayout] = useState<string | null>(null);
    const [groupId, setGroupId] = useState<string | null>(null);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: true,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: true,
                },
            }),
            ResizableImage.configure({
                inline: true,
                allowBase64: true,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right'],
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: 'prose focus:outline-none max-w-full',
            },
            handleClick(view, pos) {
                const { state } = view;
                const { doc } = state;
                const node = doc.nodeAt(pos);

                if (node && node.type.name === 'image') {

                    const widthStr = node.attrs.width || '100%';
                    const numWidth = parseInt(widthStr) || 100;

                    setSelectedImage({
                        node,
                        width: numWidth
                    });
                    setImageLayout(node.attrs.layout || null);
                    setGroupId(node.attrs.group || null);
                    return true;
                } else {
                    setSelectedImage(null);
                    setImageLayout(null);
                    setGroupId(null);
                }

                return false;
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const addImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (event) => {
            if (!event.target) return;

            const target = event.target as HTMLInputElement;
            if (!target.files?.length) return;

            const file = target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === 'string' && editor) {
                    editor.chain().focus().setImage({
                        src: result,
                    }).run();

                    // After inserting, find the image and set its width
                    const { state } = editor;
                    const { doc, selection } = state;
                    const node = doc.nodeAt(selection.from);

                    if (node && node.type.name === 'image') {
                        editor
                            .chain()
                            .focus()
                            .updateAttributes('image', { width: '100%' })
                            .run();
                    }
                }
            };

            reader.readAsDataURL(file);
        };

        input.click();
    };

    const updateImageWidth = (width: number) => {
        if (!editor || !selectedImage) return;

        try {
            // Find the current position of the selected image
            const pos = findSelectedImagePosition();
            if (pos === null) return;

            // Update the image width attribute at that position
            editor
                .chain()
                .focus()
                .setNodeSelection(pos)
                .updateAttributes('image', { width: `${width}%` })
                .run();

            // Update local state to reflect the new width
            setSelectedImage(prev => prev ? { ...prev, width } : null);
        } catch (error) {
            console.error("Failed to update image width:", error);
        }
    };

    // Helper function to find the position of the selected image
    const findSelectedImagePosition = () => {
        if (!editor || !selectedImage) return null;

        let foundPos: number | null = null;

        editor.state.doc.descendants((node, pos) => {
            if (foundPos !== null) return false; // Already found

            if (node.type.name === 'image' &&
                node.attrs.src === selectedImage.node.attrs.src) {
                foundPos = pos;
                return false; // Stop searching
            }
            return true; // Continue searching
        });

        return foundPos;
    };

    const setFullWidth = () => {
        if (selectedImage) {
            updateImageWidth(100);
        }
    };

    const setHalfWidth = () => {
        if (selectedImage) {
            updateImageWidth(50);
        }
    };

    // Create a new group of images
    const createImageGroup = (layout: string) => {
        if (!editor || !selectedImage) return;

        const pos = findSelectedImagePosition();
        if (pos === null) return;

        const newGroupId = `group-${Date.now()}`;
        setGroupId(newGroupId);

        editor
            .chain()
            .focus()
            .setNodeSelection(pos)
            .updateAttributes('image', {
                group: newGroupId,
                layout: layout
            })
            .run();

        setImageLayout(layout);
    };

    const removeFromGroup = () => {
        if (!editor || !selectedImage) return;

        const pos = findSelectedImagePosition();
        if (pos === null) return;

        editor
            .chain()
            .focus()
            .setNodeSelection(pos)
            .updateAttributes('image', {
                group: null,
                layout: null
            })
            .run();

        setGroupId(null);
        setImageLayout(null);
    };

    if (!isMounted) {
        return null;
    }

    if (!editor) {
        return null;
    }

    return (
        <div className="border rounded-md">
            <div className="flex flex-wrap items-center gap-1 p-2 border-b">
                <Toggle
                    pressed={editor.isActive('bold')}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                    aria-label="Bold"
                    size="sm"
                >
                    <Bold className="h-4 w-4" />
                </Toggle>

                <Toggle
                    pressed={editor.isActive('italic')}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                    aria-label="Italic"
                    size="sm"
                >
                    <Italic className="h-4 w-4" />
                </Toggle>

                <Toggle
                    pressed={editor.isActive('heading', { level: 1 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    aria-label="Heading 1"
                    size="sm"
                >
                    <Heading className="h-4 w-4" />
                    <span className="ml-1 text-xs">1</span>
                </Toggle>

                <Toggle
                    pressed={editor.isActive('heading', { level: 2 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    aria-label="Heading 2"
                    size="sm"
                >
                    <Heading className="h-4 w-4" />
                    <span className="ml-1 text-xs">2</span>
                </Toggle>

                <Toggle
                    pressed={editor.isActive('heading', { level: 3 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    aria-label="Heading 3"
                    size="sm"
                >
                    <Heading className="h-4 w-4" />
                    <span className="ml-1 text-xs">3</span>
                </Toggle>

                <div className="h-6 w-px bg-border mx-1" />

                <Toggle
                    pressed={editor.isActive({ textAlign: 'left' })}
                    onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
                    aria-label="Align left"
                    size="sm"
                >
                    <AlignLeft className="h-4 w-4" />
                </Toggle>

                <Toggle
                    pressed={editor.isActive({ textAlign: 'center' })}
                    onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
                    aria-label="Align center"
                    size="sm"
                >
                    <AlignCenter className="h-4 w-4" />
                </Toggle>

                <Toggle
                    pressed={editor.isActive({ textAlign: 'right' })}
                    onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
                    aria-label="Align right"
                    size="sm"
                >
                    <AlignRight className="h-4 w-4" />
                </Toggle>

                <div className="h-6 w-px bg-border mx-1" />

                <Toggle
                    pressed={editor.isActive('bulletList')}
                    onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                    aria-label="Bullet list"
                    size="sm"
                >
                    <List className="h-4 w-4" />
                </Toggle>

                <Toggle
                    pressed={editor.isActive('orderedList')}
                    onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                    aria-label="Ordered list"
                    size="sm"
                >
                    <ListOrdered className="h-4 w-4" />
                </Toggle>

                <div className="h-6 w-px bg-border mx-1" />

                <Button
                    variant="outline"
                    size="sm"
                    onClick={addImage}
                >
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Image
                </Button>
            </div>

            {selectedImage && (
                <div className="p-2 bg-gray-50 border-b">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium">Image Size:</span>
                        <div className="w-32">
                            <Slider
                                value={[selectedImage.width]}
                                min={10}
                                max={100}
                                step={1}
                                onValueChange={(value) => updateImageWidth(value[0])}
                            />
                        </div>
                        <span className="text-xs">{selectedImage.width}%</span>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={setFullWidth}
                            className="ml-auto"
                        >
                            <Maximize className="h-3.5 w-3.5 mr-1" />
                            Full
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={setHalfWidth}
                        >
                            <Minimize className="h-3.5 w-3.5 mr-1" />
                            Half
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-medium">Layout:</span>
                        <Button
                            size="sm"
                            variant={imageLayout === '2-col' ? "default" : "outline"}
                            onClick={() => createImageGroup('2-col')}
                            className="h-7 px-2"
                        >
                            <Grid2X2 className="h-3.5 w-3.5 mr-1" />
                            2 Images
                        </Button>
                        <Button
                            size="sm"
                            variant={imageLayout === '3-col' ? "default" : "outline"}
                            onClick={() => createImageGroup('3-col')}
                            className="h-7 px-2"
                        >
                            <Grid3X3 className="h-3.5 w-3.5 mr-1" />
                            3 Images
                        </Button>

                        {(groupId || imageLayout) && (
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={removeFromGroup}
                                className="h-7 px-2 ml-2"
                            >
                                Remove from group
                            </Button>
                        )}
                    </div>
                </div>
            )}

            <style>
                {`
        .tiptap [data-layout="2-col"] {
          display: inline-block;
          width: calc(50% - 5px);
          margin-right: 5px;
        }
        
        .tiptap [data-layout="2-col"]:nth-of-type(2n) {
          margin-right: 0;
          margin-left: 5px;
        }
        
        .tiptap [data-layout="3-col"] {
          display: inline-block;
          width: calc(33.33% - 4px);
          margin-right: 6px;
        }
        
        .tiptap [data-layout="3-col"]:nth-of-type(3n) {
          margin-right: 0;
        }

        .tiptap ul {
          list-style-type: disc;
          padding-left: 1.5em;
        }

        .tiptap ol {
          list-style-type: decimal;
          padding-left: 1.5em;
        }
        `}
            </style>

            <EditorContent editor={editor} className="tiptap p-3" />
        </div>
    );
}
