/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  env:{
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  async rewrites(){
    return [
      {
        //переписываем путь.вместо 3000 открываем 4200 на бэке
      source:'/api/:path*',
      destination: 'http://localhost:4200/api/:path*',
      },
      {
        //переписываем путь.вместо 3000 открываем 4200 на бэке для подгрузки файлов
        source:'/uploads/:path*',
        destination:'http://localhost:4200/uploads/:path*',
      },
    ]
  }
}


module.exports = nextConfig
