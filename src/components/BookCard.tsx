import { Book } from "../interfaces";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article>
      <picture>
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          width={200}
          height={800}
        />
      </picture>
    </article>
  );
}
