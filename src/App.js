
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from 'scenes/navBar';
import HomePage from 'scenes/homePage';
import AboutPage from 'scenes/aboutPage';
import BlogPage from 'scenes/blogPage'
import ContactPage from 'scenes/contactPage';
import SecteursPage from 'scenes/secteursPage';
import Footer from 'scenes/footer';
import { ThemeProvider, createTheme } from '@mui/material';
import VetementDeProtection from 'scenes/secteursPage/VetementDeProtection';
import UniformeMedicale from 'scenes/secteursPage/UniformeMedicale';
import { VetementMilitaires } from 'scenes/secteursPage/VetementMilitaires';
import EducationUniforme from 'scenes/secteursPage/EducationUniforme';
import MatiereAccessoires from 'scenes/secteursPage/MatiereAccessoires';
import HotellerieRestauration from 'scenes/secteursPage/hotRestau';
import Epi from 'scenes/secteursPage/Epi';
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  },
});

function App() {
  return (<div className='app'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/acceuil'} element={<HomePage />} />
        <Route exact path={'/about'} element={<AboutPage />} />
        <Route exact path={'/blog'} element={<BlogPage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/secteurs'} element={<SecteursPage />} />
        <Route exact path={'/vetement-de-protection'} element={<VetementDeProtection />} />
        <Route exact path={'/uniforme-medicale'} element={<UniformeMedicale />} />
        <Route exact path={'/vetements-militaires'} element={<VetementMilitaires />} />
        <Route exact path={'/education-uniforme'} element={<EducationUniforme />} />
        <Route exact path={'/matieres-accessoires'} element={<MatiereAccessoires />} />
        <Route exact path={'/hotellerie-restauration'} element={<HotellerieRestauration />} />
        <Route exact path={'/epi'} element={<Epi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div >
  );
}



export default App;






