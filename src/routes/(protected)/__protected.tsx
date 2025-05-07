import { createRootRoute } from "@tanstack/react-router";
import { useSessionStore } from "@/store/session-store";
import { Navigate, Outlet } from "@tanstack/react-router";
import ProtectedHeader from "@/components/user/layout/protected-header";

export const ProtectedRoute = () => {
    const session = useSessionStore((s) => s.session);
    if (!session?.name) {
        return <Navigate to="/login" />;
    }
    return <>
        <ProtectedHeader />
        <Outlet />;
    </>

};


export const Route = createRootRoute({
    component: ProtectedRoute
})


