import { useContext } from "react";
import { Context } from "../context";

export default function useBooksContext() {
  return useContext(Context);
}
