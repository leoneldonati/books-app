import useBooksContext from "../hooks/useBooksContext";
import BookInReadingList from "./BookInReadingList";

export default function ReadingList() {
  const { readingList } = useBooksContext()!;
  return (
    <section className="border rounded p-4">
      <h2 className="text-3xl mb-10">Lista de lectura</h2>

      <div className="grid grid-cols-2 gap-3">
        {readingList.map((book, index) => (
          <BookInReadingList book={book} key={index} />
        ))}
      </div>
    </section>
  );
}
