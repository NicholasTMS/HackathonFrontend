import { Link, NavLink } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <header className="bg-black text-white p-4 relative z-40">
            <div className="w-full px-6 flex items-center justify-between">

                {/* LEFT SIDE - Logo */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    to="/"
                                    className="text-xl font-bold hover:opacity-80 transition"
                                >
                                    TULEARN
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* RIGHT SIDE - Nav links */}
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-6">

                        {/* Courses */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
                                Courses
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>

                        {/* Teach */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavLink
                                    to="/teach"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md transition-colors ${
                                            isActive
                                                ? "bg-white text-black"
                                                : "bg-black text-white hover:bg-white hover:text-black"
                                        }`
                                    }
                                >
                                    Teach
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Roadmaps */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavLink
                                    to="/roadmaps"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md transition-colors ${
                                            isActive
                                                ? "bg-white text-black"
                                                : "bg-black text-white hover:bg-white hover:text-black"
                                        }`
                                    }
                                >
                                    Roadmaps
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Login */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md transition-colors ${
                                            isActive
                                                ? "bg-white text-black"
                                                : "bg-black text-white hover:bg-white hover:text-black"
                                        }`
                                    }
                                >
                                    Login
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Sign Up */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavLink
                                    to="/signup"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md transition-colors ${
                                            isActive
                                                ? "bg-white text-black"
                                                : "bg-black text-white hover:bg-white hover:text-black"
                                        }`
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}











