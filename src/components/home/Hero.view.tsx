import MoreChevron from '../ui/MoreChevron.ui';
import { SHeroDesc, SHeroLead, SHeroWrapper } from './styles/Hero.style';
import Typist from 'react-typist';

const HeroView: React.FC = (): React.ReactElement => {
	return (
		<SHeroWrapper className='my-wrapper'>
			<SHeroLead>Kárpáti Tamás</SHeroLead>
			<Typist cursor={{ hideWhenDone: true }}>
				<Typist.Delay ms={1000} />
				<SHeroDesc>Webfejlesztő</SHeroDesc>
			</Typist>
			<MoreChevron multiply={1} />
		</SHeroWrapper>
	);
};

export default HeroView;
