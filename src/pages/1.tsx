import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Videoplayer from '../components/Videoplayer';
import { CommentsFacebook } from '../components/CommentsFacebook';
import { Testimonios } from '../components/Testimonios';
import { SocialButtons } from '../components/SocialButtons';
import { navigate } from 'gatsby';

export const S1 = () => {
	const videoUrl = 'https://youtu.be/WDBrfb8tRUI';

	const nextClass = () => {
		navigate('/2');
	};

	return (
		<div className="max-w-7xl mx-auto">
			<div className="pt-10 mx-9 lg:mt-5">
				<div className="flex justify-center md:block">
					<StaticImage
						src="../images/aumenta_pacientes_logo.png"
						alt="Aumenta Pacientes Logo"
					/>
				</div>
				<h1 className="mt-12 font-light text-primary text-27 md:w-1/2">
					Tu oportunidad de tener pacientes{' '}
					<span className="font-bold">Desde las redes sociales</span>
				</h1>
				<div className="mt-10 md:grid md:grid-cols-2 md:gap-4">
					<Videoplayer url={videoUrl} controls={false} />
					<div className="place-self-end">
						<h2 className="text-base font-bold mt-7 text-primary">
							¿No pudiste tomar nota o tienes duda?
						</h2>
						<p className="mt-10 text-base font-light text-primary">
							No te preocupes! Vuelve a ver el video y revisa tu cuaderno de
							trabajo. También puedes acceder al grupo de Facebook y Whatsapp.
						</p>
					</div>
				</div>
				<SocialButtons hidden={'hidden'} />
				<div className="mt-16 flex justify-center">
					<button
						className="px-12 py-4 text-base font-bold transition-transform transform border-2 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight rounded-lg hover:border-transparent"
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
	);
};

export default S1;
