import { createContext, ReactNode, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import { Action } from "./Actions";
export interface Data{
	id: number;
  title: string;
  amount: string;
  epf: boolean;
}

export interface State {
    basicSalary: string;
    earnings: Data[];
    deductions: Data[];
}
// Load initial state from sessionStorage
const loadState = (): State => {
	const storedState = sessionStorage.getItem("appState");
	if (storedState) {
		return JSON.parse(storedState);
	}
	return {
		basicSalary: "",
		earnings: [],
		deductions: [],
	};
};

// Clear the sessionStorage
export const clearStorage = (): State => {
	sessionStorage.removeItem("appState");
	return {
		basicSalary: "",
		earnings: [],
		deductions: [],
	};
};

export const INITIAL_STATE: State = loadState();

export const Context = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({ state: INITIAL_STATE, dispatch: () => {} });

interface ContextProviderProps {
    children: ReactNode;
}
export const  ContextProvider:React.FC<ContextProviderProps> = ({children}) =>{
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	useEffect(() => {
		console.log("update session storage!");
		sessionStorage.setItem("appState", JSON.stringify(state));
	}, [state]);

	return (
		<Context.Provider 
			value={{
				state,
				dispatch
			}}>
			{children}
		</Context.Provider>
	);
};
