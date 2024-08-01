import Link from 'next/link';

export default function NavbarAuth() {
  return (
    <>
      <li>
        <Link
          href="/protected"
          className="text-sm font-medium underline-offset-4"
          prefetch={false}
        >
          Protected
        </Link>
      </li>
    </>
  );
}
