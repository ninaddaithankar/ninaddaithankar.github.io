import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Awards = () => {
    const awards = [
        'Academic Excellence Award (Top 5% GPA), Renmin Univ. of China, 2021, 2023.',
        'Provincial First Prize, Contemporary Undergraduate Mathematical Contest in Modeling, 2022.',
        'Meritorious Mention, Mathematical Contest in Modeling and Interdisciplinary Contest in Modeling, 2022.',
        'First Prize, The 24th Innovation Cup of Renmin University of China, 2022.'
    ];
    return (_jsxs("div", { className: "card", children: [_jsx("h2", { className: "section-title", children: "Award" }), _jsx("div", { className: "section-divider" }), _jsx("ul", { className: "awards-list", children: awards.map((award, index) => (_jsxs("li", { children: [_jsx("strong", { children: award.split(',')[0] }), award.includes(',') && award.substring(award.indexOf(','))] }, index))) })] }));
};
export default Awards;
