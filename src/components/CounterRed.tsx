import { useReducer } from 'react';

const initialState = {
	counter: 0,
}

type ActionType =
	| { type: 'increase' }
	| { type: 'decrease' }
	| { type: 'reset' }
	| { type: 'custom', payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case 'increase':
			return {
				...state,
				counter: state.counter + 1
			}
		case 'decrease':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'reset':
			return {
				...state,
				counter: 0
			}
		case 'custom':
			return {
				...state,
				counter: action.payload
			}
		default:
			return state;
	}
}

export const CounterRed = () => {
	const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

	return (
		<>
			<h2>Counter: {counter}</h2>
			<button className='btn btn-outline-primary me-2' onClick={() => dispatch({ type: 'increase' })}>
				+ 1
			</button>
			<button className='btn btn-outline-danger me-2' onClick={() => dispatch({ type: 'reset' })}>
				Reset
			</button>
			<button className='btn btn-outline-primary me-2' onClick={() => dispatch({ type: 'decrease' })}>
				- 1
			</button>
			<button className='btn btn-outline-success me-2' onClick={() => dispatch({ type: 'custom', payload: 2430 })}>
				2430
			</button>
		</>
	)
}