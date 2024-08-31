/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Agrega el dominio de las imágenes aquí
  },
};

export default nextConfig;
