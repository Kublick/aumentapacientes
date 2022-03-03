import { useEffect, useState } from 'react';

export const useGetUrls = (): any => {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		const getUrls = async () => {
			const id = '7YXamvsw6hSppoy-s2cPc';

			try {
				const response = await fetch(`${process.env.APIURL}/${id}`);
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
