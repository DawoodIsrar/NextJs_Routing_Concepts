export default function ServicedOffer({
  params,
}: {
  params: { servicesid: String; reviewsid: String };
}) {
  return (
    <>
      <h1>
        this is the serviced offer in service having service id
        {params.servicesid} and having reviews id {params.reviewsid}
      </h1>
    </>
  );
}
