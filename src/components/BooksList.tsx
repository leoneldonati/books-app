import booksJson from '../books.json'
import useBooks from '../hooks/useBooks'
import BookCard from "./BookCard"

export default function BooksLists () {
  
  const {readingList} = useBooks()

  const availibleBooks = booksJson.library.length - readingList.length

  return (
    <section>
      
      <h1>
        {availibleBooks} libros disponibles.
      </h1>

      <h2>
        {readingList.length} en lista de lectura.
      </h2>

    {booksJson.library.map((info, index) => <BookCard book={info.book} key={index}/>)}

    </section>
  )

}