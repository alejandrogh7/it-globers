import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from './redux/thunks/productThunks';

//COMPONENTS
import LandingPage from './Components/LandingPage/LandingPage.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
