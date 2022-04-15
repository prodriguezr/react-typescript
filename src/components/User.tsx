import { useState } from 'react';

interface iUser {
	uid: string;
	name: string;
}

export const User = () => {
	const [user, setUser] = useState<iUser>();

	const login = () => {
		setUser({
			uid: 'THGER5645',
			name: 'Pablo Rodríguez',
		});
	}
	return (
		<div>
			<h3>User:</h3>

			<button className='btn btn-outline-primary' onClick={login}>
				Login
			</button>
			<br />
			{
				!user ? <pre>No user login yet</pre> : <pre>{JSON.stringify(user)}</pre>
			}
		</div>
	)
}