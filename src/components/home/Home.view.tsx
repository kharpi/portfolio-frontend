import ContactView from './Contact.view';
import HeroView from './Hero.view';
import ProjectView from './Project.view';
import TechStackView from './TechStack.view';

const HomeView: React.FC = (): React.ReactElement => {
	return (
		<div>
			<HeroView></HeroView>
			<TechStackView></TechStackView>
			<ProjectView></ProjectView>
			<ContactView></ContactView>
		</div>
	);
};

export default HomeView;
