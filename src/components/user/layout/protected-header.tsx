
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export default function ProtectedHeader() {
    return (
        <header className={cn("w-full border-b sticky top-0 z-50 bg-white")}>
            <div className="container flex h-16 items-center justify-between px-4 lg:px-0 mx-auto">

                <Link to="/" className="text-xl font-bold">
                    Balinkbayan CMS | Admin
                </Link>


                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="/cms" className="hover:underline">
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
                    <Button variant="outline" size="sm" asChild>
                        <Link to="/login">Sign In</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link to="/">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
