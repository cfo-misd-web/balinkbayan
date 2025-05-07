
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSessionStore } from "@/store/session-store";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

export default function ProtectedHeader() {
    const session = useSessionStore();
    const handleLogout = () => {
        if (session) {
            session.clearSession();
            toast.success("Logout successful", {
                description: "You have been logged out successfully!",
            });
        }
    }

    return (
        <header className={cn("w-full border-b sticky top-0 z-50 bg-white")}>
            <div className="container flex h-16 items-center justify-between px-4 lg:px-0 mx-auto">

                <Link to="/" className="text-xl font-bold">
                    Balinkbayan CMS | Admin
                </Link>


                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="/cms/posts" className="hover:underline">
                        Posts
                    </Link>
                    <Link to="/cms/editor" className="hover:underline">
                        Editor
                    </Link>
                    <Link to="/cms" className="hover:underline">
                        About
                    </Link>
                </nav>
                

                <div className="flex items-center gap-4">
                {
                    session && session.session && (
                        <div className="hidden md:flex items-center gap-4">
                            <span className="text-sm font-medium"><Badge>{session.session.name}</Badge></span>
                            
                        </div>
                    )
                }
                        <Button variant="outline" className="text-sm" type="button" onClick={handleLogout}>
                            Logout
                     </Button>
                </div>
            </div>
        </header>
    );
}
