import React, { useContext } from 'react';

import { IContext } from './interfaces';
import initialState from './State';

const GlobalContext = React.createContext<IContext>({ state: initialState, dispatch: () => {} });

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
