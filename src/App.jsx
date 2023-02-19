import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyled from './components/GlobalStyle';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyled />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
