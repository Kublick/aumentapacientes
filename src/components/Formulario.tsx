import { navigate } from 'gatsby';
import React, { useState } from 'react';

interface Form {
	fullname: string;
	email: string;
}

export const Formulario = (): JSX.Element => {
	const [form, setForm] = useState({} as Form);
	const [formError, setFormError] = useState('');

	const handleChange = (e: any): void => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (
			Object.keys(form).length === 0 ||
			form.email === '' ||
			form.fullname === ''
		) {
			setFormError('Por favor, llene todos los campos');
			return;
		}

		const data = new FormData(e.target);

		const url = 'https://psicologaberenicebastidas.activehosted.com/proc.php';

		fetch(url, {
			method: 'POST',
			body: data,
			mode: 'no-cors',
		})
			.then((response) => {
				setTimeout(() => {
					navigate('/gracias');
					setFormError('');
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="px-8 lg:px-24 bg-primary lg:mt-0 mt-7">
				<div className="flex flex-col py-6 text-white lg:py-8 md:flex-row md:justify-between max-w-7xl mx-auto  ">
					<div className="">
						<h1 className="text-3xl font-bold">¡Cupo limitado!</h1>
						<p className="text-base font-thin">
							Aprovecha esta oportunidad{' '}
							<span className="font-bold">sin costo</span>
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<input type="hidden" name="u" value="33" />
						<input type="hidden" name="f" value="33" />
						<input type="hidden" name="s" />
						<input type="hidden" name="c" value="0" />
						<input type="hidden" name="m" value="0" />
						<input type="hidden" name="act" value="sub" />
						<input type="hidden" name="v" value="2" />
						<input
							type="hidden"
							name="or"
							value="ccdd57901eba6f15ca6262851317a292"
						/>
						<div className="flex flex-col gap-2 lg:flex-row mt-7 md:mt-0 md:grid lg:flex ">
							<div className="flex flex-col gap-2 md:flex-row md:gap-4">
								<input
									type="text"
									name="fullname"
									placeholder="Nombre"
									className="px-8 h-14 text-primary"
									onChange={handleChange}
								/>

								<input
									type="email"
									name="email"
									placeholder="Email"
									className="px-8 h-14 text-primary"
									onChange={handleChange}
								/>
							</div>
							<button
								type="submit"
								className="px-4 font-bold uppercase bg-secondary h-14 text-primary hover:bg-secondarylight transform active:scale-75 transition-transform min-w-fit"
							>
								¡Si, Quiero entrar!
							</button>
						</div>
						<p className="mt-4 text-center text-xl font-bold">{formError}</p>
					</form>
				</div>
			</div>
		</>
	);
};
