import { createContext, ReactNode } from 'react';
import { DICTIONARY } from '../constants';

export interface DictionaryContextProps {
  [key: string]: string;
}

export const DictionaryContext =
  createContext<DictionaryContextProps>(DICTIONARY);

interface DictionaryProps {
  children: ReactNode;
}

const DictionaryProvider = ({ children }: DictionaryProps) => {
  return (
    <DictionaryContext.Provider value={DICTIONARY}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
