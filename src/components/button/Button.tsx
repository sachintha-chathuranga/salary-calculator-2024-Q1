import "./Button.css";

type RunFunction = () => void;
interface ButtonProps {
	text: string;
	icon: string;
	addAlowance: RunFunction
}

const Button: React.FC<ButtonProps> = ({ text, icon, addAlowance }) => {
	return (
		<>
			<div className="button" onClick={addAlowance}>
				<img src={icon} alt="Icon description" />
				<span className="buttonText">{text}</span>
			</div>
		</>
	);
};

export default Button;
