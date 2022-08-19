import { createContext, ReactNode } from 'react';
import { dictionary } from '../data';

export interface DictionaryContextProps {
  [key: string]: string;
}

export const DictionaryContext =
  createContext<DictionaryContextProps>(dictionary);

interface DictionaryProps {
  children: ReactNode;
}

const DictionaryProvider = ({ children }: DictionaryProps) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
