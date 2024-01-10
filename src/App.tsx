import BooksLists from "./components/BooksList";
import ReadingList from "./components/ReadingList";
import useBooksContext from "./hooks/useBooksContext";

export default function App() {
  const { readingList } = useBooksContext()!;
  return (
    <main className="flex flex-col sm:flex-row gap-6 items-start p-5">
      <BooksLists />

      {readingList.length !== 0 && <ReadingList />}
    </main>
  );
}
