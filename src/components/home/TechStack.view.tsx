import { Techs } from 'src/Techs';
import MoreChevron from '../ui/MoreChevron.ui';
import { STechStack } from './styles/TechStack.style';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import { useEffect, useState } from 'react';
import { IDarkMode } from 'src/redux/types';
import { connect } from 'react-redux';

const TechStackView: React.FC<IDarkMode> = (props): React.ReactElement => {
	const [options, setOptions] = useState({
		colors: ['#000'],
		enableTooltip: false,
		deterministic: false,
		fontFamily: 'impact',
		fontStyle: 'normal',
		fontWeight: 'normal',
		padding: 1,
		rotations: 3,
		fontSizes: [15, 40] as MinMaxPair,
		transitionDuration: 1000,
	});

	useEffect(() => {
		const toggled: string | null = localStorage.getItem('applicationState');
		if (toggled) setOptions({ ...options, colors: ['#fff'] });
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		const toggled: string | null = localStorage.getItem('applicationState');
		if (props.toggled || toggled === 'true')
			setOptions({ ...options, colors: ['#fff'] });
		else setOptions({ ...options, colors: ['#000'] });
		//eslint-disable-next-line
	}, [props.toggled]);

	return (
		<section className='my-wrapper'>
			<div className='my-container'>
				<h2 className='my-lead'>Techstack</h2>
				<STechStack>
					{<ReactWordcloud options={options} words={Techs} />}
				</STechStack>
			</div>
			<MoreChevron multiply={2} />
		</section>
	);
};

const mapStateToProps = (state: IDarkMode) => ({
	toggled: state.toggled,
});

export default connect(mapStateToProps)(TechStackView);
