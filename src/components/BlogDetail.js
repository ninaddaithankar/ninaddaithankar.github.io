import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const blogMeta = [
    {
        id: 'how-running-changed-me',
        title: 'How Running Changed Me',
    },
];
const BlogDetail = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const meta = blogMeta.find(b => b.id === id);
    useEffect(() => {
        if (!id)
            return;
        setLoading(true);
        fetch(`assets/blogs/${id}.md`)
            .then(res => {
            if (!res.ok)
                throw new Error('Not found');
            return res.text();
        })
            .then(text => {
            setContent(text);
            setLoading(false);
        })
            .catch(() => {
            setError('Blog not found.');
            setLoading(false);
        });
    }, [id]);
    if (!meta)
        return _jsx("div", { className: "text-content", children: "Blog not found." });
    return (_jsxs("div", { children: [_jsx(Link, { to: "/blog", className: "back-link", children: "\u2190 Back to Blog" }), _jsx("h2", { className: "section-title", style: { marginTop: '4rem' }, children: meta.title }), _jsx("div", { className: "section-divider", style: { marginBottom: '2rem' } }), _jsxs("div", { className: "text-content", style: { marginTop: '1.5rem' }, children: [loading && 'Loading...', error && error, !loading && !error && _jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], children: content })] })] }));
};
export default BlogDetail;
