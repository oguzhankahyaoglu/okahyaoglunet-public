module.exports = {
  siteName: 'Hi! | Oguzhan Kahyaoglu',
  siteDescription: 'My personal website.',
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
  pathPrefix:undefined,
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}
