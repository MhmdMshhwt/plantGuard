import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useTheme } from './context/theme-context';
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import MakePlantGuardBetter from './pages/feedback/makeLynxBetter';
import SignUp from './pages/registeration/signUp/stepOne';
import Login from './pages/registeration/login/stepOne';
import Footer from './components/footer';

function App() {
  const { theme } = useTheme();
  return (
    <Box className={styles.app}>
      <Box className="main"
        sx={{
          width:{
            xs: '100%',
            sm: '100%',
            md: '430px',
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <>
              <Navbar />
              <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Landing />} />
                <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home />} />
                <Route path={`${process.env.PUBLIC_URL}/feedback`} element={<MakePlantGuardBetter />} />
                <Route path={`${process.env.PUBLIC_URL}/signup`} element={<SignUp />} />
                <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
              </Routes>
              {/* <Footer /> */}
            </>
          </BrowserRouter>
        </ThemeProvider>        
      </Box>
    </Box>
  );
}

export default App;
