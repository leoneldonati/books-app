import BooksLists from "./components/BooksList";
import ReadingList from "./components/ReadingList";

export default function App () {

  return (
    <main className="flex sm:flex-col md:flex-row">

        <BooksLists />

        <ReadingList />
    </main>
  )
}