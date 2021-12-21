module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.aumentapacinetes.com',
		title: 'aumentapacientes',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
