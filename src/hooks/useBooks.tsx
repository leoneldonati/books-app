import { useState } from "react";
import { Book } from "../interfaces";

export default function useBooks() {
  const [readingList, setReadingList] = useState<Array<Book>>([]);

  const setBook = (book: Book) => {
    // verificar si existe una lista anterior
    const readingList =
      window.localStorage.getItem("readingList") &&
      JSON.parse(window.localStorage.getItem("readingList")!);

    // si no existe una lista de lectura crear una nueva
    if (!readingList) {
      const firstReadingList = [book]

      window.localStorage.setItem('readingList', JSON.stringify(firstReadingList))

      setReadingList(firstReadingList)

      return

    }
    const newReadingList: Array<Book> = [...readingList, book];

    window.localStorage.setItem("readingList", JSON.stringify(newReadingList));

    setReadingList(newReadingList);
  };

  return {
    setBook,
    readingList,
  };
}
