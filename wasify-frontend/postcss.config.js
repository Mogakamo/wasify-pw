module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
       (process.env.NODE_ENV === 'production') ? {
	 '@fullhuman/postcss-purgecss': {
                 // added sections folder and changed extension to jsx
                 content: ['./components/**/*.js', './pages/**/*.js'],
                 defaultExtractor: content =>
                    content.match(/[\w-/:]+(?<!:)/g) || [], 
       },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}
