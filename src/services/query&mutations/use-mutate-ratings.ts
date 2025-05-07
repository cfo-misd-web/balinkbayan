import { useMutation } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api"
import { toast } from "sonner"

export const useMutateRatings = () => {
    return useMutation({
        mutationFn: async (data: { postId: string, userId: string, rating: 1 | 2 | 3 | 4 | 5 }) => {
            const uuid = crypto.randomUUID()
            localStorage.setItem(`rating-${uuid}`, JSON.stringify(data))
            

            const res = await api.post("/rate", data).then((res) => res.data)
            return res;
        },
        onSuccess: () => {
            toast.success("Post Rated successfully", {
                description: "Thank you for your feedback!"
            })
        },
        onError: (e) => {
            console.error("Failed to rate post", {
                description: e.message
            })
        }
    })
}