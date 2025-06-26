import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';

type RegisterFormValues = {
	name: string;
	email: string;
	password: string;
};

type RegisterFormErrors = {
	name?: string;
	email?: string;
	password?: string;
};

export default function SimpleLoginForm() {
	const [form, setForm] = useState<RegisterFormValues>({
		name: '',
		email: '',
		password: '',
	});

	console.log('SimpleLoginForm');

	const [errors, setErrors] = useState<RegisterFormErrors>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setForm(prevForm => ({ ...prevForm, [name]: value }));
		validate();
	};

	const validate = (): boolean => {
		setErrors({});
		const formNameValue = form.name.trim();
		const formEmailValue = form.email.trim();
		const formPasswordValue = form.password.trim();

		const tempErrors: RegisterFormErrors = {};

		if (!formNameValue) {
			tempErrors.name = 'Name can not be empty.';
		}

		if (!formEmailValue) {
			tempErrors.email = 'Email can not be empty.';
		} else if (!formEmailValue.includes('@')) {
			tempErrors.email = 'Email is not in valid format.';
		}

		if (!formPasswordValue) {
			tempErrors.password = 'Password should not be empty.';
		} else if (formPasswordValue.length < 8) {
			tempErrors.password = 'Password must be at least 8 characters long.';
		}

		setErrors(tempErrors);

		return Object.keys(tempErrors).length === 0;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (validate()) {
			alert('Form submitted successfully!');
		}
	};

	return (
		<div>
			<h2>Simple Register Form</h2>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<br />
				<input
					type='text'
					name='name'
					value={form.name}
					onChange={handleChange}
					placeholder='Enter your name'
				/>
				{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
				<br />
				<label>Email</label>
				<br />
				<input
					type='email'
					name='email'
					value={form.email}
					onChange={handleChange}
					placeholder='Enter your email'
				/>
				{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
				<br />
				<label>Password</label>
				<br />
				<input
					type='password'
					name='password'
					value={form.password}
					onChange={handleChange}
					placeholder='Enter your password'
				/>
				{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
				<br />
				<button type='submit'>Register</button>
			</form>
		</div>
	);
}
