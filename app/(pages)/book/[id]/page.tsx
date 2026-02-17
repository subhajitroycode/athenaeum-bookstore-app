import { getBookById } from "@/app/actions/books";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBookById(id);

  console.log(book);

  return <div>Book: {id}</div>;
}

export default page;
