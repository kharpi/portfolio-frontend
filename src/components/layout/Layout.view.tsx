import DarkToggle from '../ui/DarkToggle.ui';
import { SLayoutContainer } from './style/Layout.style';

const LayoutView: React.FC = (props): React.ReactElement => {
	return (
		<SLayoutContainer>
			{props.children}
			<DarkToggle />
		</SLayoutContainer>
	);
};

export default LayoutView;
