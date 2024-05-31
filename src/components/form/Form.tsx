import React from "react";
import "./Form.css";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
function Form() {
	return (
		<div className="form wrapper">
			<header>
				<h4>Calculate Your Salary</h4>
				<Button text="Reset" icon="/icons/reset.png" />
			</header>
			<section>
				<h5>Basic Salary</h5>
				<TextInput size="large" placeholder="something" />
			</section>
		</div>
	);
}

export default Form;
