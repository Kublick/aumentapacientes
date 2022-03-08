import { chatIcon } from './utils/svg';
import React from 'react';
import { Tooltip } from './Tooltip';

export const FAB = () => {
	const handleRedirect = () => {
		window.open('https://wa.me/message/LD54V7JCH3TXD1');
	};
	return (
		<>
			<div className="float cursor-pointer" onClick={handleRedirect}>
				<Tooltip text="Si tienes alguna pregunta referente al entrenamiento puedes enviar un mensaje directamente aqui en el botón de WhatsApp">
					{chatIcon}
				</Tooltip>
			</div>
		</>
	);
};
