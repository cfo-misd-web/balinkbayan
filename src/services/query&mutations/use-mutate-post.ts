import { useMutation } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api";
import { toast } from "sonner";
import type { cmsFormValues } from "@/constants/types";
import { useSessionStore } from "@/store/session-store";

export const useMutatePost = () => {
    const session = useSessionStore.getState().session;

    return useMutation({
        mutationFn: async (data: cmsFormValues) => {
            const res = await api.post("/protected/posts", data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session?.token}`
                },
            }).then((res) => res.data);
            return res;
        },
        onError: (e) => {
            toast.error("Failed to create post", {
                description: e.message
            });
        },
        onSuccess: (data) => {
            toast.success("Post created successfully", {
                description: `Post ID: ${data.id}`
            });
        }
    })
}