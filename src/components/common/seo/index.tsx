import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title='Beacon'
			description='A simple Ethereum explorer built with viem'
			openGraph={{
				url: 'https://block-explorer-viem.vercel.app',
				title: 'Beacon',
				description: 'A simple Ethereum explorer built with viem',
				images: [
					{
						url: 'https://i.ibb.co/M6XyPGr/OG.png',
						width: 1200,
						height: 630,
						alt: 'Beacon OG Image',
						type: 'image/png',
					},
				],
				siteName: 'Beacon',
			}}
			twitter={{
				handle: '@Envoy_1084',
				site: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export default SEO;
