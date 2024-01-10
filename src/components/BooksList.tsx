import React, { useState } from "react";
import booksJson from "../books.json";
import useBooksContext from "../hooks/useBooksContext";
import BookCard from "./BookCard";

export default function BooksLists() {
  const { readingList, filterBooks } = useBooksContext()!;
  const [booksList, setBooksList] = useState(booksJson.library)

  const availibleBooks = booksJson.library.length - readingList?.length;

  const handleRangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pages = parseInt(event.target.value)
    filterBooks({ pages })
  }

  const handleSelectInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    filterBooks({ genre: event.target.value })
  }
  return (
    <section>
      <h1
        className="text-4xl"
      >{availibleBooks} libros disponibles.</h1>

      <h2
        className="text-2xl mb-5"
      >{readingList.length} en lista de lectura.</h2>

      <div
        className="[&>label]:flex [&>label]:flex-row [&>label]:gap-4 [&>label]:items-center flex flex-row gap-6 p-4 border rounded justify-center items-center mb-8"
      >
      
        <label htmlFor="range">
          Filtrar por páginas
          <input
            id="range"
            type="range"
            max={2000}
            min={20}
            onChange={handleRangeInput}
            className="cursor-pointer"
          />
        </label>

        <label htmlFor="genre">
          Filtrar por género
          <select id="genre" onChange={handleSelectInput}>
            <option value="All">Todas</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
        </label>
      </div>

      <div
        className="grid grid-cols-3 gap-3"
      >
        {booksList.map((info, index) => (
          <BookCard book={info.book} key={index} />
        ))}
      </div>
    </section>
  );
}
