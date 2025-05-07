"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { AlignRight, X } from "lucide-react"
import { navLinks } from "./nav-constants"
import type { NavItem } from "./nav-types"
import { useIsMobile } from "@/hooks/use-mobile"

const NestedAccordion = ({ items, baseId, depth = 0 }: { items: NavItem[]; baseId: string; depth?: number }) => {
    return (
        <>
            <Accordion type="single" collapsible className={cn(depth > 0 && "pl-4 border-l-2 border-slate-200")}>
                {items.map((item, idx) => (
                    <div key={`${baseId}-${idx}`}>
                        {item.href && !item.links && !item.sublinks ? (
                            <Link
                                to={item.href}
                                className="block p-2 hover:bg-slate-100 rounded-md text-teal-700 hover:text-teal-800"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <AccordionItem value={`${baseId}-${idx}`}>
                                <AccordionTrigger
                                    className={cn(
                                        "text-teal-700 hover:text-teal-800 font-medium py-2 rounded-none [&[data-state=open]>svg]:rotate-90",
                                    )}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        {item.label}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="pl-4 border-l-2 border-slate-200">
                                        {item.links?.map((link, linkIdx) => (
                                            <Link
                                                key={`${baseId}-${idx}-link-${linkIdx}`}
                                                to={link.href}
                                                className="block p-2 hover:bg-slate-100 rounded-md text-teal-700 font-semibold"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}

                                        {item.sublinks?.map((sublink, sublinkIdx) => (
                                            <div key={`${baseId}-${idx}-sublink-${sublinkIdx}`}>
                                                {sublink.href && !sublink.links && !sublink.sublinks ? (
                                                    <Link to={sublink.href} className="block p-2 hover:bg-slate-100 rounded-md text-teal-700 font-semibold -ml-2">
                                                        {sublink.label}
                                                    </Link>
                                                ) : (
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value={`${baseId}-${idx}-sublink-${sublinkIdx}`}>
                                                            <AccordionTrigger className="text-teal-700 hover:text-teal-800 py-2 text-sm">
                                                                {sublink.label}
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="pl-3 border-l-2 border-slate-200">
                                                                    {sublink.links?.map((nestedLink, nestedLinkIdx) => (
                                                                        <Link
                                                                            key={`${baseId}-${idx}-sublink-${sublinkIdx}-link-${nestedLinkIdx}`}
                                                                            to={nestedLink.href}
                                                                            className="block p-2 hover:bg-slate-100 rounded-md text-sm text-teal-700 font-semibold"
                                                                        >
                                                                            {nestedLink.label}
                                                                        </Link>
                                                                    ))}

                                                                    {sublink.sublinks?.map((nestedItem, nestedItemIdx) => (
                                                                        <div key={`${baseId}-${idx}-sublink-${sublinkIdx}-nested-${nestedItemIdx}`}>
                                                                            {nestedItem.subsublinks ? (
                                                                                <Accordion type="single" collapsible>
                                                                                    <AccordionItem
                                                                                        value={`${baseId}-${idx}-sublink-${sublinkIdx}-nested-${nestedItemIdx}`}
                                                                                    >
                                                                                        <AccordionTrigger className="text-teal-700 hover:text-teal-800 py-1 text-sm">
                                                                                            {nestedItem.label}
                                                                                        </AccordionTrigger>
                                                                                        <AccordionContent>
                                                                                            <div className="pl-2 border-l-2 border-slate-200 text-teal-700 font-semibold">
                                                                                                {nestedItem.subsublinks.map((subsublink, subsubIdx) => (
                                                                                                    <Link
                                                                                                        key={`${baseId}-${idx}-sublink-${sublinkIdx}-nested-${nestedItemIdx}-sub-${subsubIdx}`}
                                                                                                        to={subsublink.href}
                                                                                                        className="block p-1 hover:bg-slate-100 rounded-md text-sm"
                                                                                                    >
                                                                                                        {subsublink.label}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </div>
                                                                                        </AccordionContent>
                                                                                    </AccordionItem>
                                                                                </Accordion>
                                                                            ) : nestedItem.href ? (
                                                                                <Link
                                                                                    to={nestedItem.href}
                                                                                    className="block p-2 hover:bg-slate-100 rounded-md text-sm font-semibold"
                                                                                >
                                                                                    {nestedItem.label}
                                                                                </Link>
                                                                            ) : (
                                                                                <div className="p-2 text-sm font-medium">{nestedItem.label}</div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </div>
                ))}
            </Accordion>
        </>
    )
}

export const NavSheet = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
    const isMobile = useIsMobile()
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn("bg-transparent flex items-center justify-center hover:text-white transition-all", isMobile ? "block" : "hidden")}
                >
                    {!open ? <AlignRight className="h-8 w-8" /> : <X className="h-6 w-6" />}
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="mx-4 mt-22.5 mb-5 rounded-lg overflow-y-auto max-h-[80vh] ring-[1px] ring-gray-300 z-50">
                <div className="w-full flex flex-col gap-0 px-4">
                    {navLinks.map((item, idx) => (
                        <div key={`nav-item-${idx}`}>
                            {item.href && !item.links && !item.sublinks ? (
                                <>
                                    <Button
                                        className="w-full pb-2 text-center items-center justify-start p-0 m-0 text-teal-700"
                                        variant="ghost"

                                    >
                                        <Link to={item.href} className="block text-teal-700 hover:text-teal-600 font-semibold py-2">
                                            {item.label}
                                        </Link>
                                    </Button>

                                </>
                            ) : (
                                <NestedAccordion items={[item]} baseId={`main-${idx}`} />
                            )}
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

