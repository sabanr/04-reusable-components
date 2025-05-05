import React, { useReducer } from 'react';

enum ActionType {
	Increment,
	Decrement,
	SetIncrementBy,
}

interface Action {
	type: ActionType;
	payload: number;
}

interface State {
	count: number;
	incrementBy: number;
}

const App: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		incrementBy: 2,
	} as State);

	function reducer(state: State, action: Action): State {
		switch (action.type) {
			case ActionType.Increment:
				return { ...state, count: state.count + state.incrementBy }; //staet + action.payload;

			case ActionType.Decrement:
				return { ...state, count: state.count - state.incrementBy }; //staet - action.payload;

			case ActionType.SetIncrementBy:
				return { ...state, incrementBy: action.payload }; //staet - action.payload;
			default:
				throw new Error();
		}
	}

	return (
		<div>
			Use Reducer: {state.count}
			<br />
			<input
				title="increment by"
				value={state.incrementBy}
				onChange={(e) =>
					dispatch({
						type: ActionType.SetIncrementBy,
						payload: Number(e.target.value),
					})
				}
			/>
			<button
				type="button"
				onClick={() => dispatch({ type: ActionType.Increment } as Action)}
			>
				Increment count
			</button>
			<button
				type="button"
				onClick={() => dispatch({ type: ActionType.Decrement } as Action)}
			>
				Decrement count
			</button>
		</div>
	);
};
export default App;
