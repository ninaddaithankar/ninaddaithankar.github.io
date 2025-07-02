import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Experience = () => {
    const experienceItems = [
        {
            title: 'Summer Research Intern',
            institution: 'Blender Lab - University of Illinois Urbana-Champaign',
            period: '05/2025 - Present',
            advisor: 'Prof. Heng Ji',
            advisorUrl: 'https://blender.cs.illinois.edu/hengji.html',
            topic: 'Temporal Difference Encoders',
            logo: '/assets/uiuc.png',
            logoAlt: 'UIUC Logo'
        },
        {
            title: 'Graduate Student Researcher',
            institution: 'Blender Lab - University of Illinois Urbana-Champaign',
            period: '09/2025 - Present',
            advisor: 'Prof. Heng Ji',
            advisorUrl: 'https://blender.cs.illinois.edu/hengji.html',
            topic: 'SSL - Visual Representation Learning',
            logo: '/assets/uiuc.png',
            logoAlt: 'UIUC Logo'
        },
        {
            title: 'Software Engineer - Data Virtualization',
            institution: 'eQ Technologic',
            period: '08/2021 - 07/2024',
            topic: 'SSL - Visual Representation Learning',
            logo: '/assets/eq-logo.webp',
            logoAlt: 'eQ Logo'
        }
    ];
    return (_jsxs("div", { className: "card", children: [_jsx("h2", { className: "section-title", children: "Experience" }), _jsx("div", { className: "section-divider" }), _jsx("div", { children: experienceItems.map((item, index) => (_jsxs("div", { className: "experience-item", children: [_jsxs("div", { className: "experience-content", children: [_jsx("h3", { className: "experience-title", children: item.title }), _jsx("p", { className: 'experience-period', children: item.institution }), _jsx("p", { className: "experience-period", children: item.period }), item.advisor && item.advisor.trim() !== "" && (_jsxs("p", { className: "education-extra-details", children: ["Advisor:", ' ', item.advisorUrl ? (_jsx("a", { href: item.advisorUrl, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: item.advisor })) : (item.advisor)] }))] }), _jsx("img", { src: item.logo, alt: item.logoAlt, className: "institution-logo" })] }, index))) })] }));
};
export default Experience;
