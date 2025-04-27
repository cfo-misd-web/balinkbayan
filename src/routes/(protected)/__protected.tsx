import { createRootRoute } from "@tanstack/react-router";
import { useSessionStore } from "@/store/session-store";
import { Navigate, Outlet } from "@tanstack/react-router";

export const ProtectedRoute = () => {
    const session = useSessionStore((s) => s.session);
    if (!session?.token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};


export const Route = createRootRoute({
    component: ProtectedRoute
})


