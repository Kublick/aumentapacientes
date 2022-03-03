import { useEffect, useState } from 'react';

export const useGetUrls = (): any => {
	const [urls, setUrls] = useState([]);

	const backend = process.env.AWSURL;

	useEffect(() => {
		const getUrls = async () => {
			const id = '7YXamvsw6hSppoy-s2cPc';

			try {
				const response = await fetch(`${process.env.AWSURL}/${id}`);
				const data = await response.json();
				setUrls(data.body.link);
			} catch (error) {
				console.log(error);
			}
		};
		getUrls();
	}, []);
	return urls;
};
