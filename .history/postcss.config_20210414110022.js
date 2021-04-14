module.exports = {
	plugins: [
		'tailwindcss', 
	    process.env.NODE_ENV === 'production' ? purgecss : undefined,
		'postcss-preset-env'],

}

const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
	   //specify the paths to all the tempalate files
	   content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	   ],
	  //function used to extract class names from the templates
	  defaultExtractor: (content) => {
		//capture as liberally as possible including things like `h-(screen-1.5)`
		const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
	        const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
	        return broadMatches.concat(innerMatches);
	  }
	}
]
