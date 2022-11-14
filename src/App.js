import { ThemeProvider } from "./contexts/ThemeContext";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
