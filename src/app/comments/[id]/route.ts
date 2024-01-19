import { data } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = data.find((item) => {
    return item.id === parseInt(params.id);
  });

  console.log(comment);

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { comment } = body;
  const index = data.findIndex((item) => {
    return item.id === parseInt(params.id);
  });
  console.log("index.......", index);
  data[index].comment = comment;

  return Response.json("sucessfully updated");
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex((item) => {
    return item.id === parseInt(params.id);
  });
  data.splice(index, 1);
  return Response.json("sucessfully deleted");
}
