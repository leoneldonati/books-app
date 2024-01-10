import booksJson from '../books.json'
import BookCard from "./BookCard"

export default function BooksLists () {
    
  return (
    <section>

    {booksJson.library.map((info, index) => <BookCard book={info.book} key={index}/>)}

    </section>
  )

}