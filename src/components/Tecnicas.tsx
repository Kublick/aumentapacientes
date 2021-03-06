import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Tecnicas = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="px-8 mt-16  mb-14 ">
				<h1 className="text-2xl font-bold text-primary">¿Que descubrirás</h1>
				<h1 className="text-2xl font-bold text-primary">en este taller?</h1>
			</div>
			{/* <div className="container mx-auto mb-40 background-image"> */}
			<div className="hidden mx-auto mb-40 lg:block">
				<div className="relative flex flex-col justify-between px-6 mx-20 md:mx-0 md:grid md:grid-cols-4 top-14">
					<div>
						<StaticImage
							src="../images/oferta_laptop.png"
							alt="oferta laptop"
							className="mb-8"
						/>
						<div className="font-light text-lightgray flex flex-col items-center">
							<p>Clase 1</p>
							<p className="font-bold">LA OPORTUNIDAD</p>
							<p>
								Descubrirás como esta era digital te permite llegar con tu
								servicio de consulta a cientos de pacientes alrededor del mundo.
							</p>
						</div>
					</div>
					<div>
						<StaticImage
							src="../images/oferta_equipo.png"
							alt="oferta equipo"
							className="mb-8"
						/>
						<div className="font-light text-lightgray text-center">
							<p>Clase 2</p>
							<p className="font-bold">EL MECANISMO</p>
							<p>
								Aprenderás el mecanismo con el que puedes vivir de tu profesión
								y aumentar tus ingresos.
							</p>
						</div>
					</div>
					<div>
						<StaticImage
							src="../images/oferta_personas.png"
							alt="oferta equipo"
							className="mb-8"
						/>
						<div className="font-light text-lightgray text-center">
							<p>Clase 3</p>
							<p className="font-bold">EL MAPA</p>
							<p>
								Conocerás los elementos que debes tener para conseguir pacientes
								a través de internet.
							</p>
						</div>
					</div>
					<div>
						<StaticImage
							src="../images/oferta_crecimiento_desktop.png"
							alt="oferta personas"
							className="mb-8"
						/>
						<div className="font-light text-lightgray text-center">
							<p>Clase 4</p>
							<p className="font-bold">LA ESTRATEGIA</p>
							<p>
								Compartiré contigo las piezas de la estrategia que te sirven
								para incrementar tu consulta.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Carousel
				className="lg:hidden"
				autoPlay={true}
				infiniteLoop={true}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
			>
				<div>
					<StaticImage
						src="../images/oferta_laptop.png"
						alt="oferta laptop"
						className="mb-8"
					/>
					<div className="font-light text-lightgray px-20 text-center">
						<p>Clase 1</p>
						<p className="font-bold">LA OPORTUNIDAD</p>
						<p>
							Descubrirás como esta era digital te permite llegar con tu
							servicio de consulta a cientos de pacientes alrededor del mundo.
						</p>
					</div>
				</div>
				<div>
					<StaticImage
						src="../images/oferta_equipo.png"
						alt="oferta equipo"
						className="mb-8"
					/>
					<div className="font-light text-lightgray px-20 text-center">
						<p>Clase 2</p>
						<p className="font-bold">EL MECANISMO</p>
						<p>
							Aprenderás el mecanismo con el que puedes vivir de tu profesión y
							aumentar tus ingresos.
						</p>
					</div>
				</div>
				<div>
					<StaticImage
						src="../images/oferta_personas.png"
						alt="oferta equipo"
						className="mb-8"
					/>
					<div className="font-light text-lightgray px-20 text-center">
						<p>Clase 3</p>
						<p className="font-bold">EL MAPA</p>
						<p>
							Conocerás los elementos que debes tener para conseguir pacientes a
							través de internet.
						</p>
					</div>
				</div>
				<div>
					<StaticImage
						src="../images/oferta_crecimiento_desktop.png"
						alt="oferta personas"
						className="mb-8"
					/>
					<div className="font-light text-lightgray px-20 text-center">
						<p>Clase 4</p>
						<p className="font-bold">LA ESTRATEGIA</p>
						<p>
							Compartiré contigo las piezas de la estrategia que te sirven para
							incrementar tu consulta.
						</p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
