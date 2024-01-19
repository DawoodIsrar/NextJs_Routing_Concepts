export default function ServicesDetail({
  params,
}: {
  params: { servicesid: string };
}) {
  return (
    <>
      <div>
        <h1>this is product page of id {params.servicesid}</h1>
      </div>
    </>
  );
}
