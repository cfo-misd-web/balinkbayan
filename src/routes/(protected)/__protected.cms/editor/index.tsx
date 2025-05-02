import { useState } from "react";
import { PosterForm } from "@/components/user/rich-text/poster-form";
import { RichTextEditor } from "@/components/user/rich-text/editor";
import { TagInput } from "@/components/user/rich-text/tag-input";
import { createFileRoute } from "@tanstack/react-router";

export default function CmsEditorPage() {


    return (
        <div className="max-w-[1400px] mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">CMS Poster Editor</h1>
            <PosterForm />
        </div>

    );
}


export const Route = createFileRoute('/(protected)/__protected/cms/editor/')({
    component: CmsEditorPage,
})