import React from 'react';
import { SContactInfo } from './styles/Contact.style';

const ContactView: React.FC = (): React.ReactElement => {
	return (
		<section className='my-wrapper'>
			<div className='my-container'>
				<h2 className='my-lead'>Kapcsolat</h2>
				<SContactInfo>
					<a href='mailto:tamas.karpati@icloud.com'>tamas.karpati@icloud.com</a>
					<a
						href='https://fb.com/tkarpati'
						target='_blank'
						rel='noopener noreferrer'
					>
						Facebook
					</a>
					<a
						href='https://www.linkedin.com/in/tamás-kárpáti-2a4b4672/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
				</SContactInfo>
			</div>
		</section>
	);
};

export default ContactView;
