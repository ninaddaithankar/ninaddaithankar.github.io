import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Publications = () => {
    const publications = [
        {
            id: 'tdv2025',
            title: 'Is there an Optimal Set of Assumptions for Training Visual Encoders?',
            authors: '[Manuscript in Preparation] Ninad Daithankar†, Alexi Gladstone†, Heng Ji',
            venue: 'ICML 2026',
            year: '2025',
            paperUrl: '',
            posterUrl: '',
            bibtex: ``
        }
    ];
    const groupedPublications = publications.reduce((acc, pub) => {
        if (!acc[pub.year]) {
            acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
    }, {});
    return (_jsxs("div", { className: "card", children: [_jsx("h2", { className: "section-title", children: "Publications" }), _jsx("div", { className: "section-divider" }), _jsx("p", { style: { fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }, children: "\u2020 denotes equal contribution" }), _jsx("div", { children: Object.entries(groupedPublications)
                    .sort(([a], [b]) => b.localeCompare(a))
                    .map(([year, pubs]) => (_jsxs("div", { children: [_jsx("h3", { style: { fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }, children: year }), _jsx("div", { children: pubs.map((pub) => (_jsx("div", { className: "publication", children: _jsxs("div", { children: [_jsx("h4", { className: "publication-title", children: pub.title }), _jsx("p", { className: "publication-authors", children: pub.authors }), _jsx("div", { className: "publication-links", children: _jsx("span", { className: "publication-badge", children: pub.venue }) })] }) }, pub.id))) })] }, year))) })] }));
};
export default Publications;
