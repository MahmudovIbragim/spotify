import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface TypeProps {
  children: ReactNode;
}
const ReduxProvider: FC<TypeProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
