import { clearStorage, Data, State } from "./Context";

export type Action =
    | { type: "SET_BASIC_SALARY"; payload: string }
    | { type: "UPDATE_EARNING"; payload: Data[] }
    | { type: "UPDATE_DEDUCTION"; payload: Data[]}
    | { type: "RESET"; payload: State}

export const SetBasicSalary = (salary: string): Action => (
	{
		type: "SET_BASIC_SALARY",
		payload: salary
	}
);

export const UpdateEarnings = (earnings: Data[]): Action => ({
	type: "UPDATE_EARNING",
	payload: earnings
});

export const UpdateDeductions = (deductions: Data[]): Action => ({
	type: "UPDATE_DEDUCTION",
	payload: deductions
});

export const Reset = (): Action => ({
	type: "RESET",
	payload: clearStorage()
});

