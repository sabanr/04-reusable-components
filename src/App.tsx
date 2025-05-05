import React, { useReducer } from 'react';

interface State {
	balance: number;
}

interface Action {
	type: 'deposit' | 'withdraw';
	payload: number;
}

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'deposit':
			return { ...state, balance: state.balance + action.payload };

		case 'withdraw':
			return { ...state, balance: state.balance - action.payload };

		default:
			throw new Error();
	}
}

const App: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, { balance: 0 } as State);
	const [amount, setAmount] = React.useState<number>(0);

	return (
		<div>
			{state.balance}
			<input
				title="Amount"
				type="number"
				onChange={(e) => setAmount(Number(e.target.value))}
			/>
			<button
				type="button"
				onClick={() => dispatch({ type: 'deposit', payload: amount })}
			>
				Deposit
			</button>
			<button
				type="button"
				onClick={() => dispatch({ type: 'withdraw', payload: amount })}
			>
				Withdraw
			</button>
		</div>
	);
};
export default App;
