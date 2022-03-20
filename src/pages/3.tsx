import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Videoplayer from '../components/Videoplayer';
import { CommentsFacebook } from '../components/CommentsFacebook';
import { Testimonios } from '../components/Testimonios';
import { SocialButtons } from '../components/SocialButtons';
import { navigate } from 'gatsby';

export const S3 = () => {
	const videoUrl = 'https://youtu.be/TaWaSonUb64';

	const nextClass = () => {
		navigate('/4');
	};

	const prevClass = () => {
		navigate('/2');
	};

	React.useEffect(() => {
		window.location.href = 'https://www.incrementatuconsulta.com';
	}, []);

	const view = false;

	return (
		<>
			{view ? (
				<div className="mx-auto max-w-7xl">
					<div className="pt-10 mx-9 lg:mt-5">
						<div className="flex justify-center md:block">
							<StaticImage
								src="../images/aumenta_pacientes_logo.png"
								alt="Aumenta Pacientes Logo"
								className=""
							/>
						</div>
						<h1 className="mt-12 font-light text-primary text-27 md:w-1/2">
							<span className="font-bold">El Mapa</span>
						</h1>
						<div className="mt-10 md:grid md:grid-cols-2 md:gap-4">
							<Videoplayer url={videoUrl} controls={false} />
							<div className="place-self-end">
								<h1 className="text-3xl text-primary">
									Proximamente: <br />
									<span className="font-bold">Lunes 14 de Marzo</span>
								</h1>

								<h2 className="text-base font-bold mt-7 text-primary">
									Revisa tu correo electronico
								</h2>
								<p className="mt-10 text-base font-light text-primary">
									Entra al grupo de Facebook y comparte tu plantilla del
									paciente ideal.
								</p>
							</div>
						</div>
						<SocialButtons hidden={'hidden'} />

						<div className="flex justify-center mt-16 space-x-6">
							<button
								className="px-12 py-4 text-base font-bold transition-transform transform border-2 rounded-lg bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight hover:border-transparent"
								onClick={() => prevClass()}
							>
								Clase Previa
							</button>
							<button
								className="px-12 py-4 text-base font-bold transition-transform transform border-2 rounded-lg bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight hover:border-transparent"
								onClick={() => nextClass()}
							>
								Proxima Clase
							</button>
						</div>

						<div className="my-20">
							<p className="text-base font-bold text-primary">
								Agrega un comentario público…
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-4">
							<CommentsFacebook />
							<Testimonios />
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default S3;
