import 'react-calendar-heatmap/dist/styles.css';

import {BrowserRouter, Routes,Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './components/pages/Profile';
import Repo from './components/pages/Repo';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/:username" element={<Profile />}/>
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
