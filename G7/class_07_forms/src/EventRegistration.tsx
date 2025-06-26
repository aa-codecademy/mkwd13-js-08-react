import { useForm, useWatch } from 'react-hook-form';

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
		control,
		formState: { errors },
		reset,
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

	const type = useWatch({ control, name: 'type' });

	console.log(type);

	const onSubmit = (data: EventRegistrationValues) => {
		console.log('form submitted', data);

		reset();
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
				<input
					type='date'
					{...register('date', {
						required: 'Date is required',
					})}
				/>
				{errors.date?.message && (
					<p style={{ color: 'red' }}>{errors.date?.message}</p>
				)}
				<br />
				<label htmlFor='time'>Event Time:</label>
				<br />
				<input
					type='time'
					{...register('time', {
						required: 'Time is required',
					})}
				/>
				{errors.time?.message && (
					<p style={{ color: 'red' }}>{errors.time?.message}</p>
				)}
				<br />
				<label htmlFor='no-of-participants'>Number of Participants:</label>
				<br />
				<input
					type='number'
					min={0}
					max={100}
					{...register('participants', {
						required: 'Number of participants is required',
						min: {
							value: 1,
							message: 'Event must have at least one participant',
						},
						max: {
							value: 100,
							message: 'Event can have up to 100 participants',
						},
					})}
				/>
				{errors.participants?.message && (
					<p style={{ color: 'red' }}>{errors.participants?.message}</p>
				)}
				<br />
				<label htmlFor='category'>Category:</label>
				<br />
				<select
					id='category'
					{...register('category', {
						required: 'Category is required',
					})}>
					{categories.map(category => (
						<option key={category.value} value={category.value}>
							{category.label}
						</option>
					))}
				</select>
				{errors.category?.message && (
					<p style={{ color: 'red' }}>{errors.category?.message}</p>
				)}
				<br />
				<fieldset>
					<legend>Topics (choose at least one):</legend>
					{topics.map(topic => (
						<div key={topic}>
							<input
								id={topic}
								type='checkbox'
								value={topic}
								{...register('topics', {
									validate: value => {
										if (value && value.length > 0) {
											return true;
										}
										return 'Select at least one topic';
									},
								})}
							/>
							<label htmlFor={topic}>{topic}</label>
							<br />
						</div>
					))}
				</fieldset>
				{errors.topics?.message && (
					<p style={{ color: 'red' }}>{errors.topics?.message}</p>
				)}
				<br />
				<fieldset>
					<legend>Event Type:</legend>
					<input
						id='online'
						type='radio'
						value='online'
						checked={type === 'online'}
						{...register('type')}
					/>
					<label htmlFor='online'>Online</label>
					<br />
					<input
						id='onsite'
						type='radio'
						value='onsite'
						checked={type === 'onsite'}
						{...register('type')}
					/>
					<label htmlFor='onsite'>Onsite</label>
				</fieldset>

				{type === 'onsite' && (
					<>
						<br />
						<label htmlFor='location'>Location</label>
						<br />
						<input
							id='location'
							type='text'
							placeholder='Treta Makedonska Brigada br.1'
							{...register('location', {
								required: type === 'onsite' ? 'Location is required' : '',
							})}
						/>
						{errors.location?.message && (
							<p style={{ color: 'red' }}>{errors.location?.message}</p>
						)}
						<br />
					</>
				)}
				<br />
				<label htmlFor='photo'>Upload Event Photo:</label>
				<br />
				<input
					type='file'
					accept='image/*'
					{...register('image', {
						validate: files => {
							if (files && files.length > 0) {
								return true;
							}
							return 'Upload at least one photo';
						},
					})}
				/>
				{errors.image?.message && (
					<p style={{ color: 'red' }}>{errors.image?.message}</p>
				)}
				<br />
				<br />
				<label htmlFor='notes'>Additional Notes:</label>
				<br />
				<textarea
					id='notes'
					{...register('notes', {
						required: 'Notes are required',
					})}
					placeholder='Any additional notes about the event...'
					rows={3}></textarea>
				{errors.notes?.message && (
					<p style={{ color: 'red' }}>{errors.notes?.message}</p>
				)}
				<br />
				<input
					id='confirmation'
					type='checkbox'
					{...register('confirm', {
						required: 'You must agree to the terms and conditions!',
					})}
				/>
				<label htmlFor='confirmation'>
					I agree to the terms and conditions
				</label>
				{errors.confirm?.message && (
					<p style={{ color: 'red' }}>{errors.confirm?.message}</p>
				)}
				<br />
				<button type='submit'>Register</button>
			</form>
		</div>
	);
}
