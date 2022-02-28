import React from 'react';

export const SocialButtons = () => {
	const getWorkBook = () => {
		window.open(
			'https://incrementafiles.s3.us-west-1.amazonaws.com/Aumenta+Pacientes.pdf',
		);
	};

	const whatsappGroup = () => {
		window.open('https://chat.whatsapp.com/JQ2qY3qWZ8qLzw1BZHkMZO');
	};

	const fbGroup = () => {
		window.open('https://www.facebook.com/groups/aumentapacientes/');
	};

	return (
		<div>
			<div className="flex flex-col gap-4 md:gap-8 mt-7 md:flex-row">
				<button
					className="w-full py-4 text-base font-bold transition-transform transform border-2 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight rounded-lg hover:border-transparent"
					onClick={() => getWorkBook()}
				>
					Cuaderno de Trabajo
				</button>
				<button
					className="w-full py-4 text-base font-bold text-white transition-transform transform bg-whatsapp active:scale-75 rounded-lg"
					onClick={() => whatsappGroup()}
				>
					Grupo de Whatsapp
				</button>
				<button
					className="w-full py-4 text-base font-bold uppercase transition-transform transform bg-facebook text-white border-primary active:scale-75 hover:bg-blue-600 rounded-lg"
					onClick={fbGroup}
				>
					No te lo pierdas
				</button>
			</div>
			<div className="my-20">
				<p className="text-base font-bold text-primary">
					Agrega un comentario público…
				</p>
			</div>
		</div>
	);
};
