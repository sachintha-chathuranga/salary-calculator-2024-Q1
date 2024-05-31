import React from "react";
import "./Form.css";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
import InputList from "../input-list/InputList";
function Form() {
	const reset = () =>{
		console.log("reset");
	}
	return (
		<div className="form wrapper">
			<header>
				<h4>Calculate Your Salary</h4>
				<Button  addAlowance={reset} text="Reset" icon="/icons/reset.png" />
			</header>
			<section>
				<h5>Basic Salary</h5>
				<TextInput size="large" placeholder="something" />
			</section>
			<InputList
				title="Earnings"
				subtitle="Allowance, Fixed Allowance, Bonus and etc."
				epfVisibility={true}
				buttonText="Add New Allowance"
			/>
			<hr />
			<InputList
				title="Deductions"
				subtitle="Salary Advances, Loan Deductions and all."
				epfVisibility={false}
				buttonText="Add New Deduction"
			/>
		</div>
	);
}

export default Form;
