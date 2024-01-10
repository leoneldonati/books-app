# Aplicación para visualización de libros y lista de lectura.

Esta aplicación es para una prueba técnica **front-end junior**, creada con Vite + React.

## Scripts
> Para correr esta app con NPM
```bash
npm run dev
```

> O en mi caso usar BunJS
```bash
bun run dev
```

## Contexto

He utilizado contexto global para sincronizar datos entre componentes para evitar "prop drilling".

```ts
export const Context = useContext<Context | null>(null);

export function Provider ({ children }: { children: ReactNode }) {

  return <Context.Provider>{ children }</Context.Provider>

}
```

## Tipado
Un excelente tipado con TypeScript y modularización de interfaces y tipos.

```ts
interface Author {
  name: string;
  otherBooks: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

interface LibraryItem {
  book: Book;
}

export interface Library {
  library: LibraryItem[];
}
```