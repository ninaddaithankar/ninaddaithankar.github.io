import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../assets/svg/svg-portrait-new.svg';
import spinner from '../assets/images/spinner.gif';

const Intro = () => {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<section className='vertical-border-real'></section>

			<div className='intro-flex'>
				<section>
					<div className='intro-text'>
						A student
						<br /> currently{' '}
						<span className='highlight-text'>
							studying<span className='comma'> </span>
							<br />
							the science
							<br /> behind the art
						</span>
						<br /> of deep learning.
						<br />{' '}
					</div>
					<div className='intro-bottom-link'>
						<Link className='btn-link' to='/my-portfolio-react/work'>
							View Work >
						</Link>
					</div>
				</section>

				<section className='vertical-border-shadow'></section>
				<section className='svg-section'>
					{!loaded && <img src={spinner} alt='spinner' />}

					<img
						src={graphic}
						className='intro-graphic'
						onLoad={() => {
							setLoaded(true);
						}}
						alt='intro-graphic-undraw'
					/>
				</section>
			</div>
		</>
	);
};

export default Intro;
