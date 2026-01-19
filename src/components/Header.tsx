import Link from 'next/link';
import Button from './Button';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom h-24 flex items-center justify-between relative">
        <Link href="/" className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase relative z-10">
          SpaceMinds
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Selected Work
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block relative z-10">
          <Button variant="primary" size="default">
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  );
}
