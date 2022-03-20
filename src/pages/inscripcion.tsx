import React from 'react';
import Venta from '../components/Venta';

const Inscripcion = () => {
	React.useEffect(() => {
		window.location.href = 'https://www.incrementatuconsulta.com';
	}, []);

	return (
		<div>
			<Venta />
		</div>
	);
};

export default Inscripcion;
