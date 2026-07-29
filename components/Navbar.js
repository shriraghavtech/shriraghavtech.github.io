// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav class="flex justify-between items-center p-6 bg-slate-900 text-white">
      <div class="text-xl font-bold">ShriraghavTech</div>
      <div class="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
