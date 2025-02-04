import portfolioDataES from "../data/portfolio.ES.json";
import portfolioDataEN from "../data/portfolio.EN.json";
import portfolioDataEU from "../data/portfolio.EN.json";

// Podrías tener un solo archivo que gestione todas las fuentes de datos
const data = {
  portfolioEs: portfolioDataES,
  portfolioEu: portfolioDataEU,
  portfolioEn: portfolioDataEN,
};

export default data;
