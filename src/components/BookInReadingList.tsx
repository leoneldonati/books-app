import useBooksContext from "../hooks/useBooksContext";
import { Book } from "../interfaces";

export default function BookInReadingList({ book }: { book: Book }) {
  const { deleteBook } = useBooksContext()!;

  const handleDeleteBook = () => {
    deleteBook(book.ISBN);
  };
  return (
    <article className="relative">
      <button onClick={handleDeleteBook} className="absolute -top-6 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l6 0" />
        </svg>
      </button>
      <picture>
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          width={200}
          height={800}
          className="object-cover"
        />
      </picture>
    </article>
  );
}
