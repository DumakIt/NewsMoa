import { KeyboardEvent, RefObject } from "react";

export interface ISearchBar01Props {
  inputRef: RefObject<HTMLInputElement>;
  onInputKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}
