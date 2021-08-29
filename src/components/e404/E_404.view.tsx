import { useHistory } from 'react-router';
import Button from '../ui/Button.ui';
import { SE404Container, SE404Text } from './style/E_404.style';

const E_404_View: React.FC = (): React.ReactElement => {
	const history = useHistory();
	return (
		<SE404Container>
			<div>
				<SE404Text>404 | Az oldal nem található!</SE404Text>
				<Button
					centered={true}
					color='white'
					rounded={true}
					weight='500'
					animatedBg={{
						bgColor: '#9b9b9b',
						gradientColor: '#7b7b7b',
						infinite: false,
					}}
					textSize='1.2rem'
					customStyle='margin-top:10px'
					onClick={() => {
						history.push('/');
					}}
				>
					Vissza a főoldalra!
				</Button>
			</div>
		</SE404Container>
	);
};

export default E_404_View;
