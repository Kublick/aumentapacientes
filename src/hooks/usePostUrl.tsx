const usePostUrl = ({ group }) => {
	const updateUrl = async () => {
		const backend = process.env.AWSURL;
		const id = '7YXamvsw6hSppoy-s2cPc';
		try {
			await fetch(`${backend}/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify({
					link: group,
					site: 'aumenta',
				}),
			});
			return;
		} catch (error) {
			console.log(error);
		}
	};
	updateUrl();
	return;
};

export default usePostUrl;
