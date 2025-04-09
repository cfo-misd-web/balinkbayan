import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-constants";
import { useNavigate } from "@tanstack/react-router";


const NavLinks = ({ className }: { className?: string }) => {
    const router = useNavigate()
    return (
        <NavigationMenu className={cn(className, "items-center justify-center z-20")}>
            <NavigationMenuList className="flex flex-1 items-center justify-center space-x-1 b">
                {navLinks.map(item => (
                    <NavigationMenuItem key={item.label} className="group">

                        {item.href && !item.links && !item.sublinks && (
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full justify-start bg-transparent')} onClick={() => router({ to: item.href })} key={item.label}>
                                {item.label}
                            </NavigationMenuLink>
                        )}

                        {(item.links || item.sublinks) && (
                            <div className="relative">

                                <NavigationMenuTrigger className="bg-transparent">{item.label}</NavigationMenuTrigger>


                                <NavigationMenuContent className="data-[state=open]:animate-in data-[state=closed]:animate-out mt-12 z-20">
                                    <div className="w-[250px] z-20 p-2 bg-white rounded-md shadow-md border border-slate-200">
                                        {item.links && item.links.map(link => (
                                            <NavigationMenuLink
                                                className={cn(navigationMenuTriggerStyle(), 'w-full justify-start')}
                                                onClick={() => router({ to: link.href })}
                                                key={link.label}
                                            >
                                                {link.label}
                                            </NavigationMenuLink>

                                        ))}

                                        {/* nsted sublinks */}
                                        {item.sublinks && item.sublinks.map(sublink => (
                                            <div key={sublink.label} className="mb-2">

                                                {sublink.links ? (
                                                    <div className="relative group/submenu" key={sublink.label}>

                                                        <div className="flex items-center justify-between font-medium px-3 py-2 text-sm rounded hover:bg-slate-100 cursor-pointer">
                                                            {sublink.label}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                                                <polyline points="9 18 15 12 9 6"></polyline>
                                                            </svg>
                                                        </div>


                                                        <div className="absolute z-20 left-full top-0 hidden group-hover/submenu:block bg-white rounded-md border shadow-md w-[250px] p-2 ml-1">
                                                            {sublink.links.map(nestedLink => (

                                                                <NavigationMenuLink
                                                                    className={cn(navigationMenuTriggerStyle(), 'w-full justify-start text-sm')}
                                                                    onClick={() => router({ to: nestedLink.href })}
                                                                    key={nestedLink.label}
                                                                >
                                                                    {nestedLink.label}
                                                                </NavigationMenuLink>

                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : sublink.sublinks ? (

                                                    <div className="relative group/submenu">

                                                        <div className="flex items-center justify-between font-medium px-3 py-2 text-sm rounded hover:bg-slate-100 cursor-pointer">
                                                            {sublink.label}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                                                <polyline points="9 18 15 12 9 6"></polyline>
                                                            </svg>
                                                        </div>


                                                        <div className="absolute left-full top-0 hidden group-hover/submenu:block bg-white rounded-md border shadow-md w-[250px] p-2 ml-1">
                                                            {sublink.sublinks.map(nestedItem => (
                                                                <div key={nestedItem.label} className="mb-2">
                                                                    {nestedItem.subsublinks && (

                                                                        <div className="relative group/subsubmenu">

                                                                            <div className="flex items-center justify-between font-medium px-3 py-2 text-sm rounded hover:bg-slate-100 cursor-pointer">
                                                                                {nestedItem.label}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                                </svg>
                                                                            </div>

                                                                            {/* Fourth-level submenu that appears on hover */}
                                                                            <div className="absolute left-full top-0 hidden group-hover/subsubmenu:block bg-white rounded-md border shadow-md w-[300px] p-2 ml-1">
                                                                                {nestedItem.subsublinks.map(subsublink => (

                                                                                    <NavigationMenuLink
                                                                                        className={cn(navigationMenuTriggerStyle(), 'w-full justify-start text-sm')}
                                                                                        onClick={() => router({ to: subsublink.href })}
                                                                                        key={subsublink.label}
                                                                                    >
                                                                                        {subsublink.label}
                                                                                    </NavigationMenuLink>

                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (sublink && sublink.label && sublink.href) && (

                                                    <NavigationMenuLink
                                                        className={cn(navigationMenuTriggerStyle(), 'w-full justify-start')}
                                                        onClick={() => { router({ to: sublink.href }) }}
                                                    >
                                                        {sublink.label}
                                                    </NavigationMenuLink>

                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </div>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavLinks;