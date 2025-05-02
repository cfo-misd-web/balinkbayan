import { useMutation } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api";
import { toast } from "sonner";


export const useGetAuthentication = () => {
    return useMutation({
        mutationFn: async (data: { email: string; password: string }) => {
            const res = await api.post("/auth/login", data, { withCredentials: true }).then((res) => res.data);
            return res;
        },
        onError: (e) => {
            toast.error("Invalid username or password", {
                description: e.message
            });
        },
        onSuccess: (data) => {
            toast.success("Login successful", {
                description: `Welcome ${data.user.name}`
            });
        }
    })
}