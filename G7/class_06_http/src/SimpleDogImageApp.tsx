import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const API_URL = `https://dog.ceo/api/breeds/image/random`;

export default function SimpleDogImageApp() {
	const [imageUrl, setImageUrl] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchDogImage = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(API_URL);
			console.log(response.data);
			setImageUrl(response.data.message);
		} catch (error: unknown) {
			setError((error as AxiosError).message);
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchDogImage();
	}, []);

	return (
		<div>
			<h2>Simple HTTP Example: Random Dog Image</h2>
			<div>
				<button disabled={isLoading} onClick={fetchDogImage}>
					{isLoading ? 'Fetching a new image...' : 'Fetch New Dog'}
				</button>
			</div>
			{isLoading && <h3>Is Loading...</h3>}
			{error && !isLoading && <h3 style={{ color: 'red' }}>{error}</h3>}
			{imageUrl && !isLoading && (
				<img
					style={{
						maxHeight: '500px',
						height: 'auto',
						width: '500px',
					}}
					src={imageUrl}
				/>
			)}
		</div>
	);
}
