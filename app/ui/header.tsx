import Link from 'next/link';
import BarNav from '@/app/ui/bar-nav';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-1">
      <Link href="/">
        TN NOTES
      </Link>
      <p>tu-nguyen@tu-nguyen.com</p>
    </section>

    <BarNav />
  </header>

  </>
  );
}
