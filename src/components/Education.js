import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Education = () => {
    const educationItems = [
        {
            institution: 'University of Illinois Urbana-Champaign',
            period: '2024 - ongoing',
            degree: 'Masters - Computer Science, GPA - 3.91/4',
            details: ['Coursework: Advances in Cognitive Science, Deep Learning for Computer Vision, Natural Language Processing, Deep Generative Models, Advanced Information Retrieval, Computational Photography'],
            logo: '/assets/uiuc.png',
            logoAlt: 'UIUC Logo',
            advisor: 'Prof. Heng Ji',
            advisorUrl: 'https://blender.cs.illinois.edu/hengji.html'
        },
        {
            institution: 'Savitribai Phule Pune University',
            period: '2017 - 2021',
            degree: 'Bachelors - Computer Science, GPA - 9.1/10',
            details: ['Coursework: Data Structures, Advanced Algorithms, Object Oriented Programming, Machine Learning, Web Development, Database Systems, High Performance Computing, Software Design'],
            logo: '/assets/sppu.png',
            logoAlt: 'SPPU Logo'
        }
    ];
    return (_jsxs("div", { className: "card", children: [_jsx("h2", { className: "section-title", children: "Education" }), _jsx("div", { className: "section-divider" }), _jsx("div", { children: educationItems.map((item, index) => (_jsxs("div", { className: "education-item", children: [_jsxs("div", { className: "education-content", children: [_jsx("h3", { className: "education-title", children: item.institution }), _jsx("p", { className: "education-period", children: item.period }), _jsx("p", { className: "education-details", children: item.degree }), item.advisor && item.advisor.trim() !== "" && (_jsxs("p", { className: "education-extra-details", children: ["Advisor:", ' ', item.advisorUrl ? (_jsx("a", { href: item.advisorUrl, target: "_blank", rel: "noopener noreferrer", children: item.advisor })) : (item.advisor)] })), item.details.map((detail, detailIndex) => (_jsx("p", { className: "education-extra-details", children: detail }, detailIndex)))] }), _jsx("img", { src: item.logo, alt: item.logoAlt, className: "institution-logo" })] }, index))) })] }));
};
export default Education;
