import Link from 'next/link';

export default function NavbarNonAuth() {
  return (
    <>
      <li>
        <Link
          href="/about"
          className="text-sm font-medium underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/sign-in"
          className="text-sm font-medium underline-offset-4"
          prefetch={false}
        >
          Signin
        </Link>
      </li>
      <li>
        <Link
          href="/sign-up"
          className="text-sm font-medium underline-offset-4"
          prefetch={false}
        >
          Signup
        </Link>
      </li>
    </>
  );
}
