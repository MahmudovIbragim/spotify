import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

// Определяем интерфейс для данных
interface TypeContext {
  data: SEARCH.GetSearchRes | undefined; // Тип данных
  setData: Dispatch<SetStateAction<SEARCH.GetSearchRes | undefined>>; // Типизация для функции setData
}

// Создаем контекст с типизацией
export const DataContext = createContext<TypeContext | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SEARCH.GetSearchRes | undefined>(); // Начальное состояние

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Используйте этот хук для доступа к контексту
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
