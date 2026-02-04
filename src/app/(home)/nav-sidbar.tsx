import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link"

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    item: NavbarItem[];
    open: boolean;
    OnOpenChange: (open: boolean) => void;
}


export const NavbarSidbar = ({ item, open, OnOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={OnOpenChange}>
            <SheetContent
                side="left"
                className="p-8 translate-none"
            >
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>
                            Menue
                        </SheetTitle>
                    </div>


                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {item.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={()=>OnOpenChange(false)}
                        >
                            {item.children}

                        </Link>
                    ))}
                    <div className="border-t">
                        <Link href={"/sign-in"}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Log in
                        </Link>
                        <Link href={"/sign-in"}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"

                        >
                            Start selling
                        </Link>
                    </div>

                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}