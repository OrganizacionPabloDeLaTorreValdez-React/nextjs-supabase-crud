/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/loader/supabaseloader.js',
  }
}

module.exports = nextConfig;
