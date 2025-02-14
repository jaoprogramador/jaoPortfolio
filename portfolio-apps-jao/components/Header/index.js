

import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState, useContext } from "react";
import Button from "../Button";
import Select from "../SelectLanguaje";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const dataHeader = require(`../../src/translations/${language}/${language}.json`);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 onClick={() => router.push("/")} className="font-medium p-2 laptop:p-0 link">
                {data.name}.
              </h1>

              <div className="flex items-center">
              
              <Select
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { value: "es", label: "🇪🇸 Castellano" },
                  { value: "en", label: "🇬🇧 English" },
                  { value: "eu", label: "🇪🇺 Euskera" }
                ]}
              />
                {data.darkMode && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
                  </Button>
                )}

                <Popover.Button>
                  <img className="h-5" src={`/images/${!open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`} alt="Menu toggle" />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}>
              <div className="grid grid-cols-1">
                {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
                <Button onClick={handleWorkScroll}>{dataHeader.headers.work}</Button>
                <Button onClick={handleAboutScroll}>{dataHeader.headers.about}</Button>
                <Button onClick={() => router.push("/blog")}>{dataHeader.headers.blog}</Button>
                <Button onClick={() => router.push("/frameworks")}>{dataHeader.headers.frameworks}</Button>
                <Button onClick={() => router.push("/resume")}>{dataHeader.headers.resume}</Button>
                <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{dataHeader.headers.contact}</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex">
        <h1 onClick={() => router.push("/")} className="font-medium cursor-pointer">
          {data.name}.
        </h1>
        <div className="flex">
          {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
          <Button onClick={handleWorkScroll}>{dataHeader.headers.work}</Button>
          <Button onClick={handleAboutScroll}>{dataHeader.headers.about}</Button>
          <Button onClick={() => router.push("/blog")}>{dataHeader.headers.blog}</Button>
          <Button onClick={() => router.push("/frameworks")}>{dataHeader.headers.frameworks}</Button>
          <Button onClick={() => router.push("/resume")}>{dataHeader.headers.resume}</Button>
          <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{dataHeader.headers.contact}</Button>
         
          <Select
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { value: "es", label: "🇪🇸 Castellano" },
                  { value: "en", label: "🇬🇧 English" },
                  { value: "eu", label: "🇪🇺 Euskera" }
                ]}
              />
          {mounted && theme && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
/* import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState, useContext } from "react";
import Button from "../Button";
import Select from "../SelectLanguaje";
import { LanguageContext } from "../../context/LanguageContext";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {

  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const data = require(`../../src/translations/${language}/${language}.json`);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 onClick={() => router.push("/")} className="font-medium p-2 laptop:p-0 link">
                {data.name}.
              </h1>

              <div className="flex items-center">
              <Select
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { value: "es", label: "🇪🇸 Castellano" },
                  { value: "en", label: "🇬🇧 English" },
                  { value: "eu", label: "🇪🇺 Euskera" }
                ]}
              />

                {data.darkMode && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
                  </Button>
                )}

                <Popover.Button>
                  <img className="h-5" src={`/images/${!open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`} alt="Menu toggle" />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}>
              <div className="grid grid-cols-1">
                {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
                <Button onClick={handleWorkScroll}>{data.headers.work}</Button>
                <Button onClick={handleAboutScroll}>{data.headers.about}</Button>
                <Button onClick={() => router.push("/blog")}>{data.headers.blog}</Button>
                <Button onClick={() => router.push("/frameworks")}>{data.headers.frameworks}</Button>
                <Button onClick={() => router.push("/resume")}>{data.headers.resume}</Button>
                <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{data.headers.contact}</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex">
        <h1 onClick={() => router.push("/")} className="font-medium cursor-pointer">
          {data.name}.
        </h1>
        <div className="flex">
          {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
          <Button onClick={handleWorkScroll}>{data.headers.work}</Button>
          <Button onClick={handleAboutScroll}>{data.headers.about}</Button>
          <Button onClick={() => router.push("/blog")}>{data.headers.blog}</Button>
          <Button onClick={() => router.push("/frameworks")}>{data.headers.frameworks}</Button>
          <Button onClick={() => router.push("/resume")}>{data.headers.resume}</Button>
          <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{data.headers.contact}</Button>

         
          <Select
              value={language}
              onChange={handleLanguageChange}
              options={[
                { value: "es", label: "🇪🇸 Castellano" },
                { value: "en", label: "🇺🇸 English" },
                { value: "eu", label: "🇪🇺 Euskera" }
              ]}
            />
          {mounted && theme && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header; */



/* import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showBlog && (
                    <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:jaoprogramador@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:jaoprogramador@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showBlog && (
                    <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:jaoprogramador@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showBlog && (
              <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showBlog && (
              <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
 */