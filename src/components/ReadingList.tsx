import useBooksContext from "../hooks/useBooksContext"
import BookInReadingList from "./BookInReadingList"

export default function ReadingList () {

  const { readingList } = useBooksContext()!
  return (
    <section>
      <h2>Lista de lectura</h2>

      <div>
        {readingList.map((book, index) => <BookInReadingList book={book} key={index} />)}
      </div>
    </section>
  )
}