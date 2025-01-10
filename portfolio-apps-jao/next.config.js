/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Mantén el modo estricto de React
  output: 'standalone',   // Configura el sitio para ser exportado de forma estática
  trailingSlash: true,     // Agrega una barra diagonal a las URLs
  images: {
    unoptimized: true,     // Desactiva la optimización de imágenes si no se soporta en Render
  },
};

module.exports = nextConfig;
