import MoreChevron from '../ui/MoreChevron.ui';
import { STechStack } from './styles/TechStack.style';
import ReactWordcloud, { MinMaxPair } from 'react-wordcloud';
import { useEffect, useState } from 'react';
import { IDarkMode } from 'src/redux/types';
import { connect } from 'react-redux';
import { ITechs } from './interfaces/ITechStack.type';
import axios from 'axios';

const TechStackView: React.FC<IDarkMode> = (props): React.ReactElement => {
	const [options, setOptions] = useState({
		colors: ['#000'],
		enableTooltip: false,
		deterministic: true,
		fontFamily: 'impact',
		fontStyle: 'normal',
		fontWeight: 'normal',
		padding: 0,
		rotations: 0,
		fontSizes: [15, 40] as MinMaxPair,
		transitionDuration: 200,
	});

	const [techs, setTechs] = useState<ITechs>();

	useEffect(() => {
		const toggled: string | null = localStorage.getItem('applicationState');
		if (toggled) setOptions({ ...options, colors: ['#fff'] });
		axios
			.get<ITechs>('https://portfolio-backend.tamaskarpati.hu/techs')
			.then((response) => {
				setTechs(response.data);
			});
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
					{techs && (
						<ReactWordcloud
							options={options}
							words={techs.message.map((t) => ({
								text: t.text,
								value: t.value,
							}))}
						/>
					)}
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
