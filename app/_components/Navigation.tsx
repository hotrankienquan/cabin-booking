import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from 'next/image'
export default async function Navigation() {
  const session = await auth();
  let guestArea: React.ReactNode;
  if (session?.user?.image) {
    guestArea = (
      <>
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex "
        >
          <Image
          alt=""
            src={session.user.image}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span> Guest area</span>
        </Link>
      </>
    );
  }else{
    guestArea =   <Link
    href="/account"
    className="hover:text-accent-400 transition-colors"
  >
    <span> Guest area</span>
  </Link>
  }
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {guestArea}
        </li>
      </ul>
    </nav>
  );
}
