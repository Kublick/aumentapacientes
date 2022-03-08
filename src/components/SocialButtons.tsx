import React, { FC } from 'react';
import { fbwhite } from './utils/svg';

type Props = {
	hidden?: string;
};

export const SocialButtons: FC<Props> = ({ hidden }) => {
	const getWorkBook = () => {
		window.open(
			'https://incrementafiles.s3.us-west-1.amazonaws.com/Aumenta+Pacientes.pdf',
		);
	};

	const whatsappGroup = () => {
		window.open('https://wa.me/message/LD54V7JCH3TXD1');
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
					className={`w-full py-4 text-base font-bold text-white transition-transform transform bg-whatsapp active:scale-75 rounded-lg ${hidden}`}
					onClick={() => whatsappGroup()}
				>
					Grupo de Whatsapp
				</button>
				<button
					className="w-full py-4 text-base font-bold uppercase transition-transform transform bg-facebook text-white border-primary active:scale-75 hover:bg-blue-600 rounded-lg"
					onClick={fbGroup}
				>
					<span className="flex items-center justify-center gap-x-4">
						{fbwhite} No te lo pierdas
					</span>
				</button>
			</div>
		</div>
	);
};
