import { useState, type KeyboardEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";

interface TagInputProps {
    value: string[];
    onChange: (tags: string[]) => void;
    label: string;
    placeholder?: string;
}

export function TagInput({
    value = [],
    onChange,
    label,
    placeholder = "Add tags..."
}: TagInputProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            const newTag = inputValue.trim();

            if (newTag && !value.includes(newTag)) {
                onChange([...value, newTag]);
                setInputValue("");
            }
        }
    };

    const removeTag = (tagToRemove: string) => {
        onChange(value.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <div className="flex flex-wrap gap-2 p-2 bg-background rounded-md border">
                {value.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                        <button
                            type="button"
                            className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                            onClick={() => removeTag(tag)}
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </Badge>
                ))}
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder={placeholder}
                    className="flex-grow border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
            </div>
            <p className="text-xs text-muted-foreground">
                Press Enter or Tab to add a new tag
            </p>
        </div>
    );
}
