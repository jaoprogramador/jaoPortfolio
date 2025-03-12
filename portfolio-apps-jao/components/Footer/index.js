import { useContext } from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { LanguageContext } from "../../context/LanguageContext"; // Importa el contexto
import { useRouter } from "next/router";
const Footer = ({}) => {
  const router = useRouter();
  // Contexto de idioma
  const { language } = useContext(LanguageContext);
  const dataInit = require(`../../src/translations/${language}/${language}.json`);
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">{dataInit.footer.contact}</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {dataInit.footer.workTogether}
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              
            </h1>
            
            <Button onClick={() => router.push("/pointmentForm")}>{dataInit.footer.scheduleButton}</Button>

            <Button type="primary" onClick={() => router.push("/pointmentForm")}>{dataInit.footer.scheduleButton}</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://jaoportfolio.onrender.com/">
          <a className="underline underline-offset-1">Juan Arana Olalde</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
