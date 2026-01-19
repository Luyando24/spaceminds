import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">SpaceMinds</h3>
            <p className="text-gray-500 text-sm mb-2">
              Based in Lusaka, Zambia.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SpaceMinds Agency. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 text-sm transition-all">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 text-sm transition-all">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 text-sm transition-all">LinkedIn</Link>
            <Link href="#" className="text-gray-500 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 text-sm transition-all">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
