import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyled from './components/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
