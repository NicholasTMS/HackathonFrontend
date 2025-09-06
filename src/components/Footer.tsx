export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 mt-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left side - Logo / Brand */}
                <div className="text-lg font-bold">TULEARN</div>

                {/* Middle - Links */}
                <div className="flex gap-6">
                    <a href="/about" className="hover:text-gray-300 transition">About</a>
                    <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
                    <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
                </div>

                {/* Right side - Copyright */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Tulearn. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
