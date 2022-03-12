import { StaticImage } from 'gatsby-plugin-image';
import Videoplayer from '../components/Videoplayer';
import { SocialButtons } from '../components/SocialButtons';
import Venta from '../components/Venta';
import React, { useRef } from 'react';
import { SalesPitch } from '../components/SalesPitch';

export const S4 = () => {
	const videoUrl = 'https://youtu.be/rEB2Stu9cX4';
	//const salesPitchTime = 'March 25, 2020 17:30';
	const [show, setShow] = React.useState(false);
	const [point, setPoint] = React.useState(false);
	const ventaRef = useRef<null | HTMLDivElement>(null);

	const salesPitchTime = 'March 15, 2022 15:30';

	function timing() {
		setInterval(() => {
			if (Date.now() > new Date(salesPitchTime).getTime()) {
				setShow(true);
				setPoint(true);
			}
		}, 10000);
	}
	timing();

	if (point === true) {
		ventaRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className="max-w-7xl mx-auto">
			<div className="pt-10 mx-9 lg:mt-5">
				<div className="flex justify-center md:block">
					<StaticImage
						src="../images/aumenta_pacientes_logo.png"
						alt="Aumenta Pacientes Logo"
						className=""
					/>
				</div>
				<h1 className="mt-12 font-light text-primary text-27 md:w-1/2">
					<span className="font-bold">La Estrategia</span>
				</h1>
				<div className="mt-10 md:grid md:grid-cols-2 md:gap-4">
					<Videoplayer url={videoUrl} controls={false} />
					<div className="place-self-end">
						<h1 className="text-3xl text-primary">
							Proximamente: <br />
							<span className="font-bold">Martes 15 de Marzo</span>
						</h1>
						<h2 className="text-base font-bold mt-7 text-primary">
							¿No pudiste tomar nota o tienes duda?
						</h2>
						<p className="mt-10 text-base font-light text-primary">
							Puedes acceder al grupo de Facebook, Enviame mensaje por whatsapp
							si tienes preguntas.
						</p>
					</div>
				</div>
				<SocialButtons />
				<div className="my-20" ref={ventaRef}>
					{show ? <SalesPitch /> : null}
				</div>
			</div>
		</div>
	);
};

export default S4;
