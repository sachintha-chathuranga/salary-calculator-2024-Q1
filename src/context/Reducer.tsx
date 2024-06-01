import { Action } from "./Actions";
import { State } from "./Context";

const Reducer = (state: State, action: Action): State =>{
	switch (action.type) {
	case "SET_BASIC_SALARY":
		return { ...state, basicSalary: action.payload };
	case "UPDATE_EARNING":
		return { ...state, earnings: action.payload };
	case "UPDATE_DEDUCTION":
		return { ...state, deductions: action.payload };
	case "UPDATE_TAX_RATE":
		return { ...state, taxRate: action.payload };
	case "UPDATE_REGULAR_PROFIT":
		return { ...state, regularProfit: action.payload };
	case "RESET":
		return action.payload;
	default:
		return state;
	}
};

export default Reducer;