import React, { useReducer } from 'react';

enum ActionType {
	Increment,
	Decrement,
}

interface Action {
	type: ActionType;
	payload: number;
}

interface State {
	count: number;
}

const App: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 } as State);

	function reducer(state: State, action: Action): State {
		switch (action.type) {
			case ActionType.Increment:
				return { ...state, count: state.count + action.payload }; //staet + action.payload;

			case ActionType.Decrement:
				return { ...state, count: state.count - action.payload }; //staet - action.payload;

			default:
				throw new Error();
		}
	}

	return (
		<div>
			Use Reducer: {state.count}
			<br />
			<button
				type="button"
				onClick={() => dispatch({ type: ActionType.Increment, payload: 1 })}
			>
				Increment count
			</button>
			<button
				type="button"
				onClick={() => dispatch({ type: ActionType.Decrement, payload: 1 })}
			>
				Decrement count
			</button>
		</div>
	);
};
export default App;
