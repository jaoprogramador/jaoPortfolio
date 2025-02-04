import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext"; // Importa el contexto de idioma
import "../src/i18n"; // Asegúrate de importar i18n para inicializar las traducciones


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
       <LanguageProvider>
          <Component {...pageProps} />
       </LanguageProvider>
      
    </ThemeProvider>
  );
};

export default App;
