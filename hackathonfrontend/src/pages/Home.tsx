import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuViewport,
    NavigationMenuIndicator,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <header className="bg-black text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Hackathon App</h1>

                {/* Nav menu */}
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-6">
                        {/* Dropdown menu */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="absolute top-full left-0 bg-white text-black p-4 rounded-md shadow-lg">
                                <NavigationMenuLink
                                    href="/design"
                                    className="block p-2 hover:bg-gray-100"
                                >
                                    UI/UX Design
                                </NavigationMenuLink>
                                <NavigationMenuLink
                                    href="/dev"
                                    className="block p-2 hover:bg-gray-100"
                                >
                                    Development
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Regular links styled as buttons */}
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/about"
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                            >
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/contact"
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuIndicator />
                    <NavigationMenuViewport />
                </NavigationMenu>
            </div>
        </header>
    )
}

