import Button from './Button.ui';
import { SMoreChevron, SMoreChevronBorder } from './MoreChevron.style';

interface IMoreChevronProps {
	multiply: number;
}

const MoreChevron: React.FC<IMoreChevronProps> = (
	props
): React.ReactElement => {
	return (
		<>
			<SMoreChevron>
				<Button
					onClick={() =>
						window.scrollTo(0, window.innerHeight * props.multiply)
					}
					color='white'
					animatedBg={{
						bgColor: 'rgba(107, 114, 128)',
						gradientColor: 'rgba(75, 85, 99, 0.5)',
						infinite: true,
					}}
				>
					&#8964;
				</Button>
			</SMoreChevron>
			<SMoreChevronBorder />
		</>
	);
};

export default MoreChevron;
