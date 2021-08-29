import { SButton, SButtonWrapper } from './Button.style';

export interface IButtonProps {
	onClick?: (e: any) => any;
	fWidth?: boolean;
	centered?: boolean;
	rounded?: boolean;
	color?: string;
	weight?: string;
	bgColor?: string;
	animatedBg?: {
		bgColor: string;
		gradientColor: string;
		infinite: boolean;
	};
	textSize?: string;
	customStyle?: string;
}

const Button: React.FC<IButtonProps> = (props): React.ReactElement => {
	const getButton = (): React.ReactElement => {
		return (
			<SButtonWrapper
				fWidth={props.fWidth}
				centered={props.centered}
				onClick={props.onClick}
			>
				<SButton
					rounded={props.rounded}
					color={props.color}
					weight={props.weight}
					bgColor={props.bgColor}
					animatedBg={props.animatedBg}
					textSize={props.textSize}
					customStyle={props.customStyle}
				>
					{props.children}
				</SButton>
			</SButtonWrapper>
		);
	};

	return getButton();
};

export default Button;
