import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: 'facebook-domain-verification',
					content: 'kspdfmry486jtdkcj489g8alrwwxkg',
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }
						: [],
				)
				.concat(meta)}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		/>
	);
}

SEO.defaultProps = {
	lang: `es`,
	keywords: [],
	meta: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	lang: PropTypes.string,
	meta: PropTypes.array,
	title: PropTypes.string.isRequired,
};

export default SEO;
