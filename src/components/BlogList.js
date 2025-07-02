import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Link } from 'react-router-dom';
const blogs = [
    {
        id: 'how-running-changed-me',
        title: 'How Running Changed Me',
        summary: '(still a work in progress) A personal story of why I chose running over weightlifting, why I think it is harder, and how it has changed my thought process.'
    },
];
const BlogList = () => {
    return (_jsxs("div", { children: [_jsx(Link, { to: "/", className: "back-link", children: "\u2190 Back to Home" }), _jsx("h2", { className: "section-title", style: { marginTop: '4rem' }, children: "my thoughts" }), _jsx("div", { className: "section-divider", style: { marginBottom: '2rem' } }), blogs.map(blog => (_jsxs("div", { className: "card", children: [_jsx(Link, { to: `/blog/${blog.id}`, className: "publication-title", style: { fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }, children: blog.title }), _jsx("div", { className: "text-content", children: blog.summary })] }, blog.id)))] }));
};
export default BlogList;
