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
import { useState, useTransition } from "react";
import { ChevronRight } from "lucide-react";

type OpenMenuState = {
    level1?: string;
    level2?: { parent: string; menu: string };
    level3?: { parent: string; subparent: string; menu: string };
};

const NavLinks = ({ className }: { className?: string }) => {
    const router = useNavigate();
    const [openMenus, setOpenMenus] = useState<OpenMenuState>({});
    const [_, startTransition] = useTransition();

    const toggleLevel2 = (parentMenu: string, menuName: string) => {
        setOpenMenus(prev => ({
            level1: parentMenu,
            level2: prev.level2?.menu === menuName ? undefined : { parent: parentMenu, menu: menuName }
        }));
    };

    const toggleLevel3 = (parentMenu: string, subparentMenu: string, menuName: string) => {
        setOpenMenus(prev => ({
            level1: parentMenu,
            level2: { parent: parentMenu, menu: subparentMenu },
            level3: prev.level3?.menu === menuName ? undefined : { parent: parentMenu, subparent: subparentMenu, menu: menuName }
        }));
    };

    return (
        <NavigationMenu className={cn(className, "items-center justify-center z-20")}>
            <NavigationMenuList className="flex flex-1 items-center justify-center space-x-1 b">
                {navLinks.map(item => (
                    <NavigationMenuItem key={item.label} className="group">
                        {item.href && !item.links && !item.sublinks && (
                            <NavigationMenuLink
                                className={cn(navigationMenuTriggerStyle(), 'w-full justify-start bg-transparent')}
                                onClick={() => router({ to: item.href })}
                                key={item.label}
                            >
                                {item.label}
                            </NavigationMenuLink>
                        )}

                        {(item.links || item.sublinks) && (
                            <div className="relative">
                                <NavigationMenuTrigger
                                    className="bg-transparent"
                                >
                                    {item.label}

                                </NavigationMenuTrigger>

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

                                        {item.sublinks && item.sublinks.map(sublink => (
                                            <div key={sublink.label}>
                                                {sublink.links ? (
                                                    <div className="relative" key={sublink.label}>
                                                        <div
                                                            className="flex items-center justify-between font-medium px-3 py-2 text-sm rounded hover:bg-slate-100 cursor-pointer p-2"
                                                            onClick={() => startTransition(() => toggleLevel2(item.label, sublink.label))}
                                                        >
                                                            {sublink.label}
                                                            <span className={cn(
                                                                "transition-transform duration-200",
                                                                (openMenus.level2?.parent === item.label &&
                                                                    openMenus.level2?.menu === sublink.label) && "rotate-90"
                                                            )}>
                                                                <ChevronRight size={16} />
                                                            </span>
                                                        </div>

                                                        {openMenus.level2?.parent === item.label &&
                                                            openMenus.level2?.menu === sublink.label && (
                                                                <div className="absolute z-20 left-full top-0 bg-white rounded-md border shadow-md w-[250px] p-2 ml-1">
                                                                    {sublink.links.map(nestedLink => (
                                                                        nestedLink.target === "_blank" ? 
                                                                        (
                                                                            <NavigationMenuLink
                                                                                className={cn(navigationMenuTriggerStyle(), 'w-full justify-start text-sm')}
                                                                                onClick={() => window.open(nestedLink.href, "_blank")}
                                                                                key={nestedLink.label}
                                                                            >
                                                                                {nestedLink.label}
                                                                            </NavigationMenuLink>
                                                                        ) : (
                                                                        (
                                                                            <NavigationMenuLink
                                                                                className={cn(navigationMenuTriggerStyle(), 'w-full justify-start text-sm')}
                                                                                onClick={() => router({ to: nestedLink.href })}
                                                                                key={nestedLink.label}
                                                                            >
                                                                                {nestedLink.label}
                                                                            </NavigationMenuLink>
                                                                        )
                                                                    )))}
                                                                </div>
                                                            )}
                                                    </div>
                                                ) : sublink.sublinks ? (
                                                    <div className="relative">
                                                        <div
                                                            className="flex items-center justify-between font-medium px-3 py-2 text-sm rounded hover:bg-slate-100 cursor-pointer"
                                                            onClick={() => startTransition(() => toggleLevel2(item.label, sublink.label))}
                                                        >
                                                            {sublink.label}
                                                            <span className={cn(
                                                                "transition-transform duration-200",
                                                                (openMenus.level2?.parent === item.label &&
                                                                    openMenus.level2?.menu === sublink.label) && "rotate-90"
                                                            )}>
                                                                <ChevronRight size={16} />
                                                            </span>
                                                        </div>

                                                        {openMenus.level2?.parent === item.label &&
                                                            openMenus.level2?.menu === sublink.label && (
                                                                <div className="absolute left-full top-0 bg-white rounded-md border shadow-md w-[250px] ml-1 p-2">
                                                                    {sublink.sublinks.map(nestedItem => (
                                                                        <div key={nestedItem.label}>
                                                                            {nestedItem.subsublinks && (
                                                                                <div className="relative">
                                                                                    <div
                                                                                        className="flex items-center justify-between font-medium px-2 py-3 text-sm rounded hover:bg-slate-100 cursor-pointer"
                                                                                        onClick={() => startTransition(() => toggleLevel3(item.label, sublink.label, nestedItem.label))}
                                                                                    >
                                                                                        {nestedItem.label}
                                                                                        <span className={cn(
                                                                                            "transition-transform duration-200",
                                                                                            (openMenus.level3?.parent === item.label &&
                                                                                                openMenus.level3?.subparent === sublink.label &&
                                                                                                openMenus.level3?.menu === nestedItem.label) && "rotate-90"
                                                                                        )}>
                                                                                            <ChevronRight size={16} />
                                                                                        </span>
                                                                                    </div>

                                                                                    {openMenus.level3?.parent === item.label &&
                                                                                        openMenus.level3?.subparent === sublink.label &&
                                                                                        openMenus.level3?.menu === nestedItem.label && (
                                                                                            <div className="absolute left-full top-0 bg-white rounded-md border shadow-md w-[300px] p-2 ml-1">
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
                                                                                        )}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            )}
                                                    </div>
                                                ) : (sublink && sublink.label && sublink.href) && (
                                                    <NavigationMenuLink
                                                        className={cn(navigationMenuTriggerStyle(), 'w-full justify-start -ml-1')}
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