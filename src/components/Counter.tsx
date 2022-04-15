import { useState } from 'react'

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = (n: number = 1): void => {
		if (counter + n < 0)
			setCounter(0);
		else
			setCounter(counter + n);
	};

	return (
		<div className='mt-5'>
			<h3>Counter:</h3>
			<span>Valor: {counter}</span>
			<br />
			<div>
				<button className='btn btn-outline-primary mt-2 me-2' onClick={() => increment()}>
					+ 1
				</button>
				<button className='btn btn-outline-primary mt-2 me-2' onClick={() => increment(2)}>
					+ 2
				</button>
				<button className='btn btn-outline-danger mt-2 me-2' onClick={() => setCounter(0)}>
					Reset
				</button>
				<button className='btn btn-outline-primary mt-2 me-2' onClick={() => increment(-1)} disabled={counter <= 0}>
					- 1
				</button>
				<button className='btn btn-outline-primary mt-2 me-2' onClick={() => increment(-2)} disabled={counter <= 0}>
					- 2
				</button>
			</div>
		</div>
	)
}
