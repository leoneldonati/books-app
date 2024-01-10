import { type ReactNode, createContext, useEffect, useState } from "react";
import { Book } from "./interfaces";


interface Context {
  readingList: Array<Book> | [];
  setBook: (book: Book) => void;
  deleteBook: (id: string) => void;
  filterBooks: (filters: {pages?: number, genre?: string }) => void
}

export const Context = createContext<Context | null>(null);

export function Provider({ children }: { children: ReactNode }) {
  const [readingList, setReadingList] = useState<Array<Book>>([]);

  const setBook = (book: Book) => {
    // verificar si existe una lista anterior
    const readingList = window.localStorage.getItem("readingList");

    // si no existe una lista de lectura crear una nueva
    if (readingList === null) {
      const firstReadingList = [book];

      window.localStorage.setItem(
        "readingList",
        JSON.stringify(firstReadingList)
      );

      setReadingList(firstReadingList);

      return;
    }

    const parsedList = JSON.parse(readingList!);

    const newReadingList: Array<Book> = [...parsedList, book];

    window.localStorage.setItem("readingList", JSON.stringify(newReadingList));

    setReadingList(newReadingList);
  };

  const deleteBook = (id: string) => {
    const localReadingList: Array<Book> = JSON.parse(
      window.localStorage.getItem("readingList")!
    );

    const filteredList = localReadingList.filter(
      (localBook) => localBook.ISBN !== id
    );

    setReadingList(filteredList);

    window.localStorage.setItem("readingList", JSON.stringify(filteredList));
  };

  const filterBooks = ({genre = 'All', pages = 200}) => {
    const readingList = window.localStorage.getItem('readingList')

    if (readingList === null) return

    const parsedList: Array<Book> = JSON.parse(readingList!)

    const filteredList = parsedList.filter(book => book.genre === genre && book.pages !>= pages)

    setReadingList(filteredList)

    window.localStorage.setItem('readingList', JSON.stringify(filteredList))
  }

  useEffect(() => {
    const readingList = window.localStorage.getItem("readingList");

    if (readingList === null) {
      setReadingList([]);

      return;
    }

    setReadingList(JSON.parse(readingList!));
  }, []);

  return (
    <Context.Provider
      value={{
        readingList,
        setBook,
        deleteBook,
        filterBooks
      }}
    >
      {children}
    </Context.Provider>
  );
}
