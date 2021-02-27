import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage} />;
} //:category? : ?는 선택적(optional)

export default App;
