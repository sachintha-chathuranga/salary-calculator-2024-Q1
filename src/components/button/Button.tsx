import "./Button.css";
interface ButtonProps {
	text: string;
	icon: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
	return (
		<>
			<div className="button">
				<img src={icon} alt="Icon description" />
				<span className="buttonText">{text}</span>
			</div>
		</>
	);
};

export default Button;
