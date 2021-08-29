import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleDarkMode } from 'src/redux/actionCreators';
import { SDarkToggle } from './DarkToggle.style';

const DarkToggle: React.FC = (): React.ReactElement => {
	const dispatch: Dispatch<any> = useDispatch();

	const [darkMode, setDarkMode] = useState<boolean>(false);

	const toggleClickHandler = () => {
		document.body.classList.toggle('dark');
		setDarkMode(!darkMode);
		dispatch(toggleDarkMode(!darkMode));
	};

	useEffect(() => {
		const toggled: boolean =
			localStorage.getItem('applicationState') === 'true';
		setDarkMode(toggled);
		if (toggled) document.body.classList.add('dark');
	}, []);

	useEffect(() => {
		localStorage.setItem('applicationState', JSON.stringify(darkMode));
	}, [darkMode]);

	return (
		<SDarkToggle onClick={toggleClickHandler}>
			{darkMode ? 'Sötét mód: KI' : 'Sötét mód: BE'}
		</SDarkToggle>
	);
};

export default DarkToggle;
