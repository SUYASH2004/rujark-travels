export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-50">

            <a href="/" className="text-2xl font-bold"> Rujark-Travel</a>

            <div className="space-x-6">
                <a href="/" className="hover:text-blue-500 transition">Home</a>
                <a href="/about" className="hover:text-blue-500 transition">About</a>
                <a href="/services" className="hover:text-blue-500 transition">Services</a>
                <a href="/plans" className="hover:text-blue-500 transition">Plans</a>
                <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
        </nav>
    )
}