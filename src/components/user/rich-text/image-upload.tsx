import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    onChange: (file: File | null) => void;
    value: string | null;
    label: string;
}

export function ImageUpload({ onChange, value, label }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(value);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            onChange(file);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        onChange(null);
    };

    return (
        <div className="space-y-2">
            <Label htmlFor={`image-upload-${label}`}>{label}</Label>
            <div className="flex flex-col gap-3">
                <input
                    id={`image-upload-${label}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {preview ? (
                    <div className="relative">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full max-h-[300px] object-cover rounded-md"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={handleRemove}
                            >
                                Remove
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => document.getElementById(`image-upload-${label}`)?.click()}
                            >
                                Change
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Button
                        variant="outline"
                        type="button"
                        className="h-24 w-full"
                        onClick={() => document.getElementById(`image-upload-${label}`)?.click()}
                    >
                        Upload {label}
                    </Button>
                )}
            </div>
        </div>
    );
}
