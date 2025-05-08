import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RichTextEditor, uploaDer } from "./editor";
import { ImageUpload } from "./image-upload";
import './ps.css'
import { TagInput } from "./tag-input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { cmsformSchema, type cmsFormValues } from "@/constants/schema";
import { useMutatePost } from "@/services/query&mutations/use-mutate-post";
import { useNavigate } from "@tanstack/react-router";
import { Textarea } from "@/components/ui/textarea";




export function PosterForm() {
    const [activeTab, setActiveTab] = useState("edit");
    const [content] = useState("<p>Start writing your content here...</p>");
    const [routeTouched, setRouteTouched] = useState(false);
    const navigate = useNavigate();
    const { mutate: uploadPost } = useMutatePost();

    const form = useForm<cmsFormValues>({
        resolver: zodResolver(cmsformSchema),
        defaultValues: {
            title: "",
            route: "",
            description: "",
            content: content,
            author: "",
            tags: [],
            publishDate: new Date().toISOString(),
        },
    });


    const { watch, setValue } = form;
    const title = watch("title");

    console.log("Form values:", watch("publishDate"));

    useEffect(() => {
        if (!routeTouched && title) {
            setValue("route", title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
        if (!title && !routeTouched) {
            setValue("route", "");
        }
    }, [title, setValue, routeTouched]);




    const onSubmit = async (data: cmsFormValues) => {
        const { title, route, description, tags, author, bannerImage, content, publishDate } = data;

        let contentWithUploadedImages = content;

        const imagePlaceholders = content.match(/<img src="data:image\/[^;]+;base64,[^"]+"[^>]*>/g);

        if (imagePlaceholders) {
            for (const placeholder of imagePlaceholders) {
                const base64Data = placeholder.match(/src="(data:image\/[^;]+;base64,[^"]+)"/)![1];

                const blob = await (await fetch(base64Data)).blob();
                const file = new File([blob], "uploaded-image.png", { type: blob.type });

                try {
                    const uploadedUrl = await uploaDer(file);
                    const fullUrl = `${import.meta.env.VITE_API_URL}${uploadedUrl}`;

                    // Replace the placeholder with the uploaded image URL
                    contentWithUploadedImages = contentWithUploadedImages.replace(base64Data, fullUrl);
                } catch (error) {
                    toast.error("Failed to upload an image in the content. Please try again.");
                    console.error(error);
                }
            }
        }

        const fd = {
            title,
            route,
            description,
            tags: tags || [],
            author,
            bannerImg: bannerImage, 
            content: contentWithUploadedImages, 
            publishDate: publishDate || new Date().toISOString(),
        };

        uploadPost(fd, {
            onSuccess: (data) => {
                form.reset();
                setTimeout(() => {
                    navigate({ to: "/news/$postroute", params: { postroute: data.post.route } });
                } , 1000);
            },
            onError: (error) => {
                toast.error(`Error creating poster: ${error.message}`);
            },
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <div className="flex justify-between items-center mb-4">
                        <TabsList>
                            <TabsTrigger value="edit">Edit</TabsTrigger>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>
                        <Button type="submit">Save Post</Button>
                    </div>

                    <TabsContent value="edit" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter post title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="route"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Route</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g..my-new-post"
                                                {...field}
                                                disabled
                                                value={field.value || ""}
                                                onChange={e => {
                                                    setRouteTouched(true);
                                                    field.onChange(e);
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            URL path for this post. Will be auto-generated from the title unless you edit it.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter author name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="publishDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Publish Date & Time</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="datetime-local"
                                                {...field}
                                                value={field.value ? field.value.slice(0, 16) : ''}
                                                onChange={e => field.onChange(new Date(e.target.value).toISOString())}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Brief description of the post"
                                            {...field}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bannerImage"
                            render={({ field: { value, onChange } }) => (
                                <FormItem>
                                    <ImageUpload
                                        label="Banner Image"
                                        value={value ?? null}
                                        onChange={onChange}
                                    />
                                    <FormDescription>
                                        Recommended size: 1200x630 pixels
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field: { value, onChange } }) => (
                                <FormItem>
                                    <TagInput
                                        label="Tags"
                                        value={value || []}
                                        onChange={onChange}
                                        placeholder="Enter tags..."
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <RichTextEditor
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </TabsContent>

                    <TabsContent value="preview">
                        <Card>
                            <CardContent className="p-6">
                                <div className="prose max-w-none">
                                    {form.watch("bannerImage") && (() => {
                                        const banner = form.watch("bannerImage");
                                        if (typeof banner === "string" && banner) {
                                            return (
                                                <img
                                                    src={banner}
                                                    alt={form.watch("title")}
                                                    className="w-full h-[300px] object-cover rounded-md mb-6"
                                                />
                                            );
                                        } else if (banner) {
                                            return (
                                                <img
                                                    src={banner}
                                                    alt={form.watch("title")}
                                                    className="w-full h-[300px] object-cover rounded-md mb-6"
                                                />
                                            );
                                        }
                                        return null;
                                    })()}
                                    <h1 className="text-3xl font-bold mb-2">{form.watch("title")}</h1>

                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        {form.watch("author") && (
                                            <span>By {form.watch("author")}</span>
                                        )}
                                        {form.watch("publishDate") && (
                                            <span>• {new Date(form.watch("publishDate") || new Date().toISOString()).toLocaleDateString()}</span>
                                        )}
                                    </div>

                                    {((form.watch("tags") as string[]) ?? []).length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {(form.watch("tags") as string[]).map(tag => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}

                                    {form.watch("description") && (
                                        <p className="text-gray-600 mb-6 italic">
                                            {form.watch("description")}
                                        </p>
                                    )}

                                    <div
                                        dangerouslySetInnerHTML={{ __html: form.watch("content") }}
                                        className="mt-6"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </form>
        </Form>
    );
}
