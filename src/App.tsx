import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ShareLayput from './components/ShareLayout';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShareLayput />}>
            <Route index element={<Home/>}/>
          </Route>

          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
