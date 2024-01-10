import booksJson from "../books.json";
import useBooksContext from "../hooks/useBooksContext";
import BookCard from "./BookCard";

export default function BooksLists() {
  const { readingList } = useBooksContext()!;

  const availibleBooks = booksJson.library.length - readingList?.length;

  return (
    <section>
      <h1
        className="text-4xl"
      >{availibleBooks} libros disponibles.</h1>

      <h2
        className="text-2xl mb-5"
      >{readingList.length} en lista de lectura.</h2>

      <div
        className="grid grid-cols-3 gap-3"
      >
        {booksJson.library.map((info, index) => (
          <BookCard book={info.book} key={index} />
        ))}
      </div>
    </section>
  );
}
