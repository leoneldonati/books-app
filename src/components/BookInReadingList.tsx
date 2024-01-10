import useBooksContext from "../hooks/useBooksContext"
import { Book } from "../interfaces"

export default function BookInReadingList ({ book }: {book: Book}) {
  const {deleteBook} = useBooksContext()!

  const handleDeleteBook = () => {
    deleteBook(book.ISBN)
  }
  return (
    <article>
      <button
        onClick={handleDeleteBook}
      >
        x
      </button>
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
  )
}