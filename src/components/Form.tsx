import { useForm } from '../hooks'

interface FormData {
	name: string;
	email: string;
	age: number;
}

export const Form = () => {
	/*
	const [form, setForm] = useState({
		email: '',
		name: ''
	});

	const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[name]: value
		});
	}
	*/

	const { handleChange, name, email, age, form } = useForm<FormData>({
		email: 'prodrigu75@gmail.com',
		name: 'Pablo Andrés Rodríguez Riveros',
		age: 46
	});

	return (
		<form autoComplete='off'>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">E-mail:</label>
				<input type="email" name="email" className="form-control" value={email} onChange={handleChange} />
			</div>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Name:</label>
				<input type="text" name="name" className="form-control" value={name} onChange={handleChange} />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">Age:</label>
				<input type="number" name="age" className="form-control" value={age} onChange={handleChange} />
			</div>
			<pre>{JSON.stringify(form)}</pre>
		</form>
	)
}