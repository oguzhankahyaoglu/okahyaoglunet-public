module.exports = {
  siteName: 'Hi! | Oğuzhan Kahyaoğlu',
  siteDescription: 'A starter project for Gridsome with Bootstrap for you to quickly build a resume.',
  siteUrl: 'https://okahyaoglu.net',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  outputDir:"docs",
  pathPrefix:"/docs",
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}
