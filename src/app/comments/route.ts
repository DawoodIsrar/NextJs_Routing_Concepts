import { STATUS_CODES } from "http";
import { data } from "./data";
export async function GET() {
  return Response.json(data);
}
export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: data.length + 1,
    name: comment.name,
    comment: comment.comment,
  };
  data.push(newComment);
  return Response.json("Succesfully add comment");
}
