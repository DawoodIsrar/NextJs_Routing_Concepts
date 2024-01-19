import Link from "next/link";
const navLink = [
  { name: "Register", href: "/Register" },
  { name: "Login", href: "/Login" },
];
export default function DocsLAyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {navLink.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </section>
  );
}
