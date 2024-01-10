import useBooksContext from "../hooks/useBooksContext";
import { Book } from "../interfaces";

export default function BookCard({ book }: { book: Book }) {
  const { readingList, setBook } = useBooksContext()!;

  const isAddedToList = readingList.find(
    (savedBook) => savedBook.ISBN === book.ISBN
  );

  const handleSetBook = () => {
    setBook(book);
  };
  return (
    <article>
      <button
        onClick={handleSetBook}
        title="Add to reading list"
        style={{
          pointerEvents: isAddedToList ? "none" : "auto",
          opacity: isAddedToList ? 0.7 : 1,
        }}
      >
        <picture>
          <img
            src={book.cover}
            alt={book.title}
            loading="lazy"
            width={200}
            height={800}
            className="object-contain"
          />
        </picture>
      </button>
    </article>
  );
}
