//Defining title in layout
// export const metadata = {
//   title: "Documents 123",
//   description: "Docs",
// };

export default function DocsLAyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Header for docs</h1>
      {children}
      <h1>Footer for docs</h1>
    </section>
  );
}
