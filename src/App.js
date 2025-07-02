import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import About from './components/About'
// import Research from './components/Research'
import Publications from './components/Publications';
import Education from './components/Education';
import Experience from './components/Experience';
// import Awards from './components/Awards'
import Misc from './components/Misc';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
function App() {
    return (_jsx("div", { className: "container", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Experience, {}), _jsx(Publications, {}), _jsx(Education, {}), _jsx(Misc, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/blog", element: _jsx(BlogList, {}) }), _jsx(Route, { path: "/blog/:id", element: _jsx(BlogDetail, {}) })] }) }));
}
export default App;
