import { useForm } from 'react-hook-form';

enum Category {
	Workshop = 'workshop',
	Webinar = 'webinar',
	Meetup = 'meetup',
	Presentation = 'presentation',
}

const categories = [
	{ value: Category.Workshop, label: 'Workshop' },
	{ value: Category.Webinar, label: 'Webinar' },
	{ value: Category.Meetup, label: 'Meetup' },
	{ value: Category.Presentation, label: 'Presentation' },
];

const topics = [
	'React',
	'.NET',
	'Angular',
	'C#',
	'Python',
	'Rust',
	'JavaScript',
];

type EventRegistrationValues = {
	name: string;
	date: string;
	time: string;
	participants: number;
	category: Category;
	topics: string[];
	type: 'online' | 'onsite';
	location?: string;
	image: FileList;
	notes: string;
	confirm: boolean;
};

export default function EventRegistration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EventRegistrationValues>({
		defaultValues: {
			name: '',
			date: '',
			time: '',
			participants: 1,
			category: Category.Workshop,
			topics: [],
			type: 'online',
			location: '',
			image: undefined,
			notes: '',
			confirm: false,
		},
	});

	const onSubmit = () => {
		console.log('form submitted');
	};

	return (
		<div>
			<h2>Event Registration</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='event-name'>Event Name:</label>
				<br />
				<input
					id='event-name'
					type='text'
					placeholder='Student Projects Presentations'
					{...register('name', {
						required: 'Name is required',
					})}
				/>
				{errors.name?.message && (
					<p style={{ color: 'red' }}>{errors.name?.message}</p>
				)}
				<br />
				<label htmlFor='date'>Event Date:</label>
				<br />
				<input type='date' />
				<br />
				<label htmlFor='time'>Event Time:</label>
				<br />
				<input type='time' />
				<br />
				<label htmlFor='no-of-participants'>Number of Participants:</label>
				<br />
				<input type='number' min={0} max={100} />
				<br />
				<label htmlFor='category'>Category:</label>
				<br />
				<select id='category'>
					{categories.map(category => (
						<option key={category.value} value={category.value}>
							{category.label}
						</option>
					))}
				</select>
				<br />
				<fieldset>
					<legend>Topics (choose at least one):</legend>
					{topics.map(topic => (
						<div key={topic}>
							<input id={topic} type='checkbox' value={topic} />
							<label htmlFor={topic}>{topic}</label>
							<br />
						</div>
					))}
				</fieldset>
				<br />
				<fieldset>
					<legend>Event Type:</legend>
					<input type='radio' name='type' />
					<label htmlFor=''>Online</label>
					<br />
					<input type='radio' name='type' />
					<label htmlFor=''>Onsite</label>
				</fieldset>
				<br />
				<label htmlFor='location'>Location</label>
				<br />
				<input
					id='location'
					type='text'
					placeholder='Treta Makedonska Brigada br.1'
				/>
				<br />
				<br />
				<label htmlFor='photo'>Upload Event Photo:</label>
				<br />
				<input type='file' accept='image/*' />
				<br />
				<br />
				<label htmlFor='notes'>Additional Notes:</label>
				<br />
				<textarea
					id='notes'
					placeholder='Any additional notes about the event...'
					rows={3}></textarea>
				<br />
				<input id='confirmation' type='checkbox' />
				<label htmlFor='confirmation'>
					I agree to the terms and conditions
				</label>
				<br />
				<button type='submit'>Register</button>
			</form>
		</div>
	);
}
