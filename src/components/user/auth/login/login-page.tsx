import { useForm } from "react-hook-form";
import { useSessionStore } from "@/store/session-store";
import { useNavigate } from "@tanstack/react-router";
import { useGetAuthentication } from "@/services/query&mutations/use-get-authentication";
import { loginSchema } from "@/constants/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

type LoginFormInputs = {
    email: string;
    password: string;
};



export default function LoginPage() {
    const setSession = useSessionStore((s) => s.setSession);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { mutate: login, isPending } = useGetAuthentication();

    const onSubmit = (data: LoginFormInputs) => {
        login(data, {
            onSuccess: (data) => {
                setSession({ name: data.user.name, email: data.user.email });
                navigate({ to: '/cms'});
            },
        })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {errors.email && (
                    <div className="mb-4 text-red-500">
                        {errors.email.message}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="text"
                        {...register("email", { required: "Email is required" })}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                {errors.password && (
                    <div className="mb-4 text-red-500">
                        {errors.password.message}
                    </div>
                )}
                <div className="mb-6">
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
                    disabled={isPending}
                >
                    {isPending ? <><Loader2 className="animate-spin mr-2" size={16} /> Logging in...</> : "Login"}
                </button>
            </form>
        </div>
    );
}