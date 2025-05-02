import { PosterForm } from "@/components/user/rich-text/poster-form";
import { createFileRoute } from "@tanstack/react-router";

export default function CmsEditorPage() {


    return (
        <div className="max-w-[1400px] mx-auto py-10 px-[50px]">
            <h1 className="text-2xl font-bold mb-6">CMS Poster Editor</h1>
            <PosterForm />
        </div>

    );
}


export const Route = createFileRoute('/(protected)/__protected/cms/editor/')({
    component: CmsEditorPage,
})