# RUN PROYECT IN LOCAL
# =====================
## JAO npm install 
## npm install --legacy-peer-deps
## npm run build
## npm start


#PONER IDIOMA
npm install i18next react-i18next i18next-browser-languagedetector --legacy-peer-deps

crear fichero src/i18n.js

crear fichero json multilenguaje
    src/locales/en.json

importarlo en index.js





npm install react-i18next i18next
npm install react-i18next i18next --legacy-peer-deps

=====================
src/
└── translations/
    ├── en/
    │   ├── portfolio.json      # Traducción de portfolio.json en inglés
    │   └── posts/              # Traducción de los posts en inglés
    │       ├── firstblog.md
    │       ├── secondblog.md
    │       └── fiveblog.md
    ├── es/
    │   ├── portfolio.json      # Traducción de portfolio.json en castellano
    │   └── posts/              # Traducción de los posts en castellano
    │       ├── firstblog.md
    │       ├── secondblog.md
    │       └── fiveblog.md
    └── eu/
        ├── portfolio.json      # Traducción de portfolio.json en euskera
        └── posts/              # Traducción de los posts en euskera
            ├── firstblog.md
            ├── secondblog.md
            └── fiveblog.md


Page                                       Size     First Load JS
┌ ○ /                                      2.54 kB         140 kB
├   /_app                                  0 B            93.2 kB
├ ○ /404                                   194 B          93.4 kB
├ λ /api/blog                              0 B            93.2 kB
├ λ /api/blog/edit                         0 B            93.2 kB
├ λ /api/portfolio                         0 B            93.2 kB
├ ● /blog                                  1.33 kB         137 kB
├ ● /blog/[slug] (7330 ms)                 856 B           457 kB
├   ├ /blog/secondblog (2295 ms)
├   ├ /blog/fourblog (2269 ms)
├   ├ /blog/threeblog (2169 ms)
├   ├ /blog/fiveblog (311 ms)
├   └ /blog/firstblog
├ ○ /edit                                  3.62 kB         139 kB
├ ● /frameworks (444 ms)                   4.56 kB         140 kB
├ ● /frameworks/[slug] (4438 ms)           858 B           457 kB
├   ├ /frameworks/firstblog (2180 ms)
├   ├ /frameworks/secondblog (1960 ms)
├   ├ /frameworks/fiveblog
├   ├ /frameworks/fourblog
├   └ /frameworks/threeblog
├ ○ /frameworks/AppCard                    574 B          93.8 kB
├ ○ /frameworks/AppTable                   1.04 kB        94.3 kB
└ ○ /resume                                1.97 kB         137 kB
+ First Load JS shared by all              93.2 kB
  ├ chunks/framework-75db3117d1377048.js   45 kB
  ├ chunks/main-6d31f1caf3df54dd.js        28.8 kB
  ├ chunks/pages/_app-5f8ee1ef90dcf6c7.js  18.6 kB
  ├ chunks/webpack-5752944655d749a0.js     845 B
  └ css/48ecd580c56102f8.css               3.92 kB

  # PDF
  npm install jspdf

  npm install jspdf html2canvas

  npm install react-to-print

  # IMAGEN POSTS https://unsplash.com/es/fotos/un-fondo-azul-muy-bonito-con-una-gran-cantidad-de-pliegues-LAsBMFrH_WY
  # "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  #   "https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  #   "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  #   "https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
 #  IMAGEN PC


 #HE QUITADO LA LINEA "export": "next export" PORQUE CONVIERTE EL PROYECTO A STATICO Y NO FUNCIONAN LAS APIS EN render
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "start": "next start",
    "lint": "next lint"
  },



