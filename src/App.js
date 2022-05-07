import "./App.css";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/Project";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <main>
        <NavBar />
        <About />
        <Projects />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
