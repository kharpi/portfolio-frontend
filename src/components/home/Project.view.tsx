import MoreChevron from '../ui/MoreChevron.ui';
import { SProjectLink } from './styles/Project.style';

const ProjectView: React.FC = (): React.ReactElement => {
	return (
		<section className='my-wrapper'>
			<div className='my-container'>
				<h2 className='my-lead'>PROJEKT</h2>
				<SProjectLink
					href='https://github.com/kharpi/portfolio-frontend'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</SProjectLink>
			</div>
			<MoreChevron multiply={3} />
		</section>
	);
};

export default ProjectView;
