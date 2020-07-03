import React from 'react';
import Card from './generic/Card';
import time1 from '../assets/images/time-1.png';
import time2 from '../assets/images/time-2.png';
import time3 from '../assets/images/time-32.png';
import unwrapp from '../assets/images/unwrapp.png';
import portfolio from '../assets/images/portfolio-new.png';

const Work = () => {
	const works = [
		{
			title: 'My Web Portfolio',
			summary:
				'A fun project, imbued with minimalism, and a showcase for previous work.',
			techStack: 'React & CSS',
			purpose: 'Personal Interest',
			image: portfolio,
			link: 'https://github.com/ninaddaithankar/my-portfolio-react',
		},
		{
			title: 'E-TIME Quiz-2020',
			summary:
				'A frontend GUI for E-TIME Quiz Interschool - 2020 edition,	held on 24th Jan, 2020.',
			techStack: 'React & CSS',
			purpose: 'Freelance',
			image: time3,
			link: 'https://github.com/ninaddaithankar/etime-quiz-2020-react',
		},
		{
			title: 'Unwrapp',
			summary:
				'A Play Store Apps Analyzer, which visualizes app trends, and predicts app ratings.',
			techStack: 'HTML & CSS, Python, Django',
			purpose: 'TE-Miniproject',
			image: unwrapp,
			link: 'https://github.com/ninaddaithankar/play-store-analysis-django',
		},
		{
			title: 'Time Quiz-2019',
			summary:
				'A JavaFX desktop application, for visual interaction in the TIME Quiz-2019 Finale.',
			techStack: 'JavaFX, CSS & XML',
			purpose: 'Freelance',
			image: time2,
			link: 'https://github.com/ninaddaithankar/timeQuiz2019-fifthToTenth',
		},
		{
			title: 'Time Quiz-2018',
			summary:
				'A Java application, for basic visual interaction in the TIME Quiz-2018 Finale.',
			techStack: 'Java, Swing',
			purpose: 'Freelance',
			image: time1,
			link: 'https://github.com/ninaddaithankar/timeQuiz2018',
		},
	];
	return (
		<div className='work-flex'>
			{works.map((work) => (
				<Card key={work.title} work={work} />
			))}
		</div>
	);
};

export default Work;
