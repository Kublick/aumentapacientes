import { useEffect, useState } from 'react';

export const useGetUrls = (): any => {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		const getUrls = async () => {
			const url = '7YXamvsw6hSppoy-s2cPc';

			try {
				const response = await fetch(
					`https://6u4nv7easg.execute-api.us-west-1.amazonaws.com/url/7YXamvsw6hSppoy-s2cPc`,
				);
				const data = await response.json();
				console.log('la data', data.body.link);
				setUrls(data.body.link);
			} catch (error) {
				console.log(error);
			}
		};
		getUrls();
	}, []);
	return urls;
};
