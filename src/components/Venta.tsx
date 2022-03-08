import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { SalesCards } from './SalesCards';
import bonos from '../components/utils/bonos.json';
import { Testimonios } from './Testimonios';
import { Footer } from './Footer';
import { FAB } from './FAB';

const Venta = () => {
	const videoLink = 'https://youtu.be/rEB2Stu9cX4';

	const unirme = useRef<null | HTMLDivElement>(null);

	const saleEventDate = '20 March 2022 01:00';

	return (
		<div className="max-w-7xl mx-auto">
			<div className="mx-14 ">
				<div className="grid mt-10 md:grid-cols-2">
					<div className="flex justify-center md:block">
						<StaticImage
							src="../images/aumenta_pacientes_logo.png"
							alt="Aumenta Pacientes Logo"
							className="mb-10 md:mb-0 lg:mb-0 img"
						/>
					</div>

					<h1 className="text-xl font-bold text-center md:text-right md:mr-7 text-primary lg:text-left lg:text-4xl">
						¡INSCRIPCIONES ABIERTAS!
					</h1>
				</div>
				<div className="grid lg:grid-cols-2 lg:gap-7 items-center">
					<div className="mt-8">
						<div className="player-wrapper">
							<ReactPlayer
								url={videoLink}
								playing={false}
								controls={false}
								className="react-player"
								height="100%"
								width="100%"
							/>
						</div>
					</div>
					<div className="grid gap-6 mt-7 text-primary md:grid-cols-2 lg:grid-cols-1">
						<div>
							<h2 className="text-xl font-semibold lg:text-2xl">
								¡Tu ya eres éxito! Solo hagamos que se manifieste
							</h2>
						</div>
						<div>
							<h3 className="lg:text-2xl">
								Bonos de acción rápida (Solo disponibles las primeras 24 horas)
							</h3>
						</div>
						<div>
							<p className="text-lg">
								{' '}
								<span className="font-bold">
									5 SESIONES INDIVIDUALES DE MENTORÍA
								</span>{' '}
								uno a uno con la psicóloga Berenice Bastidas durante el
								entrenamiento, donde podrás recibir de primera mano ayuda
								enfocada únicamente en tu proyecto profesional.{' '}
							</p>
							<p className="font-bold">Valorado en $500 dólares</p>
						</div>

						<div>
							<p className="text-lg">
								{' '}
								<span className="font-bold">
									MANUAL HERRAMIENTAS DIGITALES
								</span>{' '}
								para que no tengas que pasar horas buscando herramientas buenas,
								este manual en lista las mejores herramientas digitales y
								plataformas con las que podrás trabajar y muchas de ellas en su
								versión gratuita.
							</p>
							<p className="font-bold">Valorado en $47 dólares</p>
						</div>
					</div>
				</div>
				<FAB />
				<div ref={unirme}>
					<h1 className="mt-16 text-xl font-bold text-primary">
						Elige el plan que mejor se adapte a tí
					</h1>

					<SalesCards salesDate={saleEventDate} />
				</div>
				<div className="absolute right-10"></div>
				<div>
					<p className="my-16 text-xl text-primary">
						Todo esto es lo que recibes al momento de inscribirte al
						entrenamiento online.
					</p>
					<div className="block md:gap-x-6 md:grid md:grid-cols-2">
						<div>
							<StaticImage
								src="../images/pc_desktop_mock.png"
								alt="Aumenta Pacientes Logo"
							/>
							<div className="mt-7">
								<p className="text-lg ">
									<span className="font-bold text-primary">
										PROGRAMA INTENSIVO DE 12 SEMANAS 100% ONLINE
									</span>{' '}
									donde aprenderás como lograr que los pacientes lleguen a ti
									con la estrategia D.E.P.E. y logres incrementar tu numero de
									pacientes y multiplicar tus ingresos.
								</p>
								<p className="font-bold text-primary">
									Valorado en $997 dólares
								</p>
								<div className="mt-7">
									<p>
										{' '}
										<span className="font-bold text-primary">
											6 MODULOS DE TRABAJO CON LECCIONES DE VIDEO EN HD{' '}
										</span>{' '}
										donde siguiendo la estrategia D.E.P.E. avanzarás paso a paso
										de forma ordenada, enfocada, pero sobre todo a tu ritmo por
										que tu eliges tus propios horarios para ver las lecciones
										que ya témenos pregrabadas y lo puedes hacer desde tu
										computadora o desde tu celular.
									</p>
								</div>
								<div className="mt-7">
									<p>
										<span className="font-bold text-primary">
											ACCESO POR TODO UN AǸO AL PORTAL ONLINE
										</span>{' '}
										para que así puedas ver y repetir las lecciones luego de
										concluir el programa las veces que tu preﬁeras.
									</p>
									<p className="font-bold text-primary">
										Valorado en $497 dólares
									</p>
								</div>
								<div className="mt-7">
									<p>
										<span className="font-bold text-primary">
											12 MENTORIAS GRUPALES EN VIVO ONLINE
										</span>{' '}
										con la psicóloga Berenice Bastidas para obtener seguimiento,
										responder preguntas, aclarar dudas, obtener feedback de tus
										avances y ayudarte a lograr alcanzar tu meta.
									</p>
									<p className="font-bold text-primary">
										Valorado en $597 dólares
									</p>
								</div>
							</div>
						</div>
						<div className="grid mt-10 font-normal md:mt-0 text-lightgray">
							<div>
								<p>
									<span className="font-bold text-primary">
										PERTENECER DE POR VIDA A LA COMUNIDAD INTERNACIONAL DE
										EXITOSAS Y EXITOSOS VIP
									</span>{' '}
									alumnos profesionales del entregamiento incrementa tu
									consulta, el pertenecer a la comunidad es algo invaluable por
									que dentro de ella podrás ir compartiendo los avances que
									vayas logrando con tus compañeros, y empiezas a sentir el
									empuje de ser parte de una tribu que creme no te va a dejar
									sola.
								</p>
								<p className="font-bold text-primary">
									Valorado en $497 dólares
								</p>
							</div>

							<div className="mt-7 m:mt-0">
								<p>
									<span className="font-bold text-primary">
										PLAN DE ESTUDIOS EN PDF
									</span>{' '}
									para que sepas exactamente en dónde debes de enfocarte cada
									semana, para así lograr avanzar a pasos seguros y que así ya
									nada te detenga triunfar
								</p>
								<p className="font-bold text-primary">
									Valorado en $47 dólares
								</p>
							</div>
							<div className="mt-7 m:mt-0">
								<p>
									<span className="font-bold text-primary">
										METAS SEMANALES DE TRABAJO
									</span>{' '}
									que aceleraran tus resultados para que nada quede en teoría,
									cada lección te lleva a la acción con ejercicios detallados,
									de esta manera a medida que avanzas en el programa, también
									avanzas en tu negocio.
								</p>
							</div>
							<div className="mx-auto place-self-end mt-7 m:mt-0">
								<button
									className="px-12 py-4 text-base font-bold uppercase transition-transform transform border-4 md:px-20 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight rounded-lg"
									onClick={() =>
										unirme.current.scrollIntoView({ behavior: 'smooth' })
									}
								>
									¡Quiero Unirme!
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="grid items-center my-9 md:grid-cols-2 gap-7">
					<h1 className="text-xl font-bold text-primary">
						SI ACCEDES HOY, CONSIGUES ESTOS RECURSOS DE FORMA 100% GRATUITA
					</h1>
					<div />
					<div className="text-lg text-lightgray ">
						<StaticImage
							src="../images/bono_1_mobile.png"
							alt="bono 1"
							className="mb-8"
						/>
						<p>
							{' '}
							<span className="font-bold text-primary">
								{bonos.bonos[0].title}
							</span>
							{bonos.bonos[0].description}
						</p>
						<p className="font-bold text-primary">{bonos.bonos[0].value}</p>
					</div>
					<div className="text-lg text-lightgray ">
						<StaticImage
							src="../images/bono_2_mobile.png"
							alt="bono 3"
							className="mb-8"
						/>
						<p>
							{' '}
							<span className="font-bold text-primary">
								{bonos.bonos[1].title}
							</span>{' '}
							{bonos.bonos[1].description}
						</p>
						<p className="font-bold text-primary">{bonos.bonos[1].value}</p>
					</div>
					<div className="text-lg text-lightgray ">
						<StaticImage
							src="../images/bono_3_mobile.png"
							alt="bono 3"
							className="mb-8"
						/>
						<p>
							{' '}
							<span className="font-bold text-primary">
								{bonos.bonos[2].title}
							</span>
							{bonos.bonos[2].description}
						</p>
						<p className="font-bold text-primary">{bonos.bonos[2].value}</p>
					</div>
					<div className="text-lg text-lightgray ">
						<StaticImage
							src="../images/bono_4_mobile.png"
							alt="bono 4"
							className="mb-8"
						/>
						<p>
							{' '}
							<span className="font-bold text-primary">
								{bonos.bonos[3].title}
							</span>
							{bonos.bonos[3].description}
						</p>
						<p className="font-bold text-primary">{bonos.bonos[3].value}</p>
					</div>
				</div>
				<p className="mt-16 text-lg text-lightgray">
					Sin duda es muchísimo valor el que tendrás con el entrenamiento
					completo{' '}
					<span className="font-bold text-primary bg-secondary p-1">
						INCREMENTA TU CONSULTA
					</span>{' '}
					y además con los bonos de regalo, tienes acceso a mas de{' '}
					<span className="font-bold text-red-500"> $3,600 dólares</span> en
					contenido de valor y recursos. Si pagaras todo esto por separado te
					saldría en eso... Pero hoy tengo una invitación, es una oferta
					especial para ti, hoy tu puedes reservar tu inscripción al
					entrenamiento de la siguiente forma hay 3 modalidades de pago; La
					primera opción es el{' '}
					<span className="font-bold text-primary">PLAN FLEXIBLE </span> este
					plan te permite diferir tu inscripción al entrenamiento en una primera
					cuota de <span className="font-bold text-primary">$178 dólares </span>{' '}
					y luego solo 2 cuotas mas, de la misma cantidad. La segunda opción es
					el <span className="font-bold text-primary">PLAN PRACTICO</span> este
					plan como su nombre lo dice es practico pagas la mitad ahora y la otra
					mitad hasta el otro mes, hasta abril, con este{' '}
					<span className="font-bold text-primary">PLAN PRACTICO</span> solo
					hace 2 pagos de{' '}
					<span className="font-bold text-primary">$261 dólares</span>. La
					tercera opción es el{' '}
					<span className="font-bold text-primary bg-secondary p-1">
						PLAN UNICO
					</span>{' '}
					y es la mejor opción por que te ahorras{' '}
					<span className="font-bold text-primary">$38 dólares</span> haciendo
					una inversión de 1 solo pago por{' '}
					<span className="font-bold text-primary">$497 dólares </span>
				</p>

				<p className="text-lg text-lightgray my-7">
					Además tienes{' '}
					<span className="px-2 font-bold text-primary bg-secondary">
						{' '}
						15 días de GARANTIA
					</span>
					podrás empezar la formación conocer a todos tus compañeros empezar a
					formarte y si no te gusta lo que vez, si sientes que no es lo tuyo te
					devuelvo el 100% del importe pagado.
				</p>
				<h1 className="mt-16 mb-8 text-xl font-bold text-primary">
					¿Listo para crear la vida que sueñas? Elige el plan que mejor se
					adapte a tí
				</h1>
				<SalesCards salesDate={saleEventDate} />
				<div className="my-16">
					<Testimonios />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Venta;
