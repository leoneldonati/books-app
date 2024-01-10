import { useState } from "react";
import { Book } from "../interfaces";

export default function useBooks () {

  const [readingList, setReadingList] = useState<Array<Book>>([])
  
  const setBook = (book: Book) => {

    const readingList = window.localStorage.getItem('readingList') && JSON.parse(window.localStorage.getItem('readingList')!)

    const newReadingList: Array<Book> = [...readingList, book]

    window.localStorage.setItem('readingList', JSON.stringify(newReadingList))
    
    setReadingList(newReadingList)

  }

  return {
    setBook,
    readingList
  }

}