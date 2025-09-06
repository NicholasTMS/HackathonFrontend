import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <header className="bg-black text-white p-4 relative z-40">
            <div className="w-full flex justify-between items-center px-6">
                {/* Logo */}
                <h1 className="text-xl font-bold">Tulearn</h1>

                {/* Nav menu */}
                <NavigationMenu className="h-14 px-6 flex items-center">
                    <NavigationMenuList className="flex items-center gap-6">
                        {/* Dropdown menu */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                            >
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-[200px]">
                                    <li>
                                        <NavigationMenuLink
                                            href="/design"
                                            className="hover:bg-gray-100 block rounded p-2"
                                        >
                                            UI/UX Design
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            href="/dev"
                                            className="hover:bg-gray-100 block rounded p-2"
                                        >
                                            Development
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Regular links styled as buttons */}
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/about"
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                            >
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/contact"
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}



