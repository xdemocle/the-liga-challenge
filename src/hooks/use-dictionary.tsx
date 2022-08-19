import { useContext } from 'react';
import {
  DictionaryContext,
  DictionaryContextProps
} from '../context/dictionary';

const useDictionary = (): DictionaryContextProps => {
  return useContext(DictionaryContext);
};

export default useDictionary;
