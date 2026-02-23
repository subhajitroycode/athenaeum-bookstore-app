import { getBooksByGenre } from "@/app/actions/books";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //   console.log(slug);

  const genreString = slug.replace(/-/g, " ");
  const booksByGenre = await getBooksByGenre(genreString);

  console.log(booksByGenre);

  return <div>page</div>;
}
