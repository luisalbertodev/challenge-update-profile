import { ReactChildren, ReactElement } from 'react';

export interface IHashMap {
  [key: string]: string | number;
}

export interface ILanguages {
  [key: string]: IHashMap;
}

export interface ILanguagesContext {
  setCurrentLanguageCode: (s: string) => void;
  setLanguages: (s: ILanguages) => void;
  currentLanguageCode: string;
  languages: ILanguages;
  strings: any;
}

export interface Children {
  children?: ReactElement | ReactChildren;
}
