import { Timer } from './Timer'
import { useState } from 'react';

export const TimerPadre = () => {
	const [milliseconds, setMilliseconds] = useState(1000);


	return (
		<>
			<span>Milliseconds {milliseconds}</span>
			<br />
			<button className='btn mt-2 me-2 btn-outline-success' onClick={() => setMilliseconds(1000)}>
				1000
			</button>
			<button className='btn mt-2 me-2 btn-outline-success' onClick={() => setMilliseconds(2000)}>
				2000
			</button>
			<Timer milliseconds={milliseconds} />
		</>
	)
}