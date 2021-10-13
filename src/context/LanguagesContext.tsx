/* eslint-disable global-require */

import { createContext, useContext, useState, useLayoutEffect, useEffect, useCallback, FC } from 'react';
import { ILanguagesContext, Children, IHashMap, ILanguages } from 'src/shared/models/languages.model';

const languageContext = createContext<Partial<ILanguagesContext>>({});

export const LanguagesProvider: FC<Children> = ({ children }) => {
  const [currentLanguageCode, _setCurrentLanguageCode] = useState<string>('es');
  const [languages, _setLanguages] = useState<ILanguages | undefined>(undefined);
  const [strings, setStrings] = useState<any>({});

  const setCurrentLanguageCode = (currentState: string) => {
    _setCurrentLanguageCode(currentState);
  };
  const setLanguages = (currentState: ILanguages) => {
    _setLanguages(currentState);
  };

  const onChargeLanguages = useCallback(() => {
    const initialDictionary: ILanguages = {
      es: require('src/shared/translations/spanish.json')
    };
    setLanguages(initialDictionary);
    setStrings(initialDictionary[currentLanguageCode]);
  }, []);

  const updateStringLanguages = useCallback(() => {
    if (languages && !!Object.keys(strings).length) {
      setStrings(languages[currentLanguageCode]);
    }
  }, [languages, currentLanguageCode]);

  useLayoutEffect(() => {
    onChargeLanguages();
  }, [onChargeLanguages]);

  useEffect(() => {
    updateStringLanguages();
  }, [updateStringLanguages]);

  return (
    <languageContext.Provider
      value={{
        setCurrentLanguageCode,
        currentLanguageCode,
        setLanguages,
        languages,
        strings
      }}
    >
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(languageContext);

  if (!context) {
    throw new Error('languageContext must be used within a LanguagesProvider');
  }

  return context;
};
