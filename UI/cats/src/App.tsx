import React, { useEffect, useReducer } from 'react';
import './App.css';
import Main from './components/Main';
import GlobalContext from './state/Context';
import { AppReducer } from '../src/state/Reducers';
import initialState from '../src/state/State';
import { setCompanyName } from './state/Actions';
import { getRandomWord } from './utils/services';

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCompanyName = async () => {
    const name = await getRandomWord();
    await dispatch(setCompanyName(name.toUpperCase()));
  };

  useEffect(() => {
    if (state.companyName === '') getCompanyName();
  }, [state.companyName]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Main />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
