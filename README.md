# Modern Portfolio - Ninad Daithankar

A modern, responsive portfolio website built with React, TypeScript, and CSS.

## Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with clean CSS
- **Interactive Components**: Collapsible bibliography sections
- **Clean UI**: Modern card-based layout with smooth transitions
- **Type Safety**: Full TypeScript support for better development experience
- **Fast Development**: Hot module replacement with Vite

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Clean CSS with modern design
- **Build Tool**: Vite
- **Package Manager**: npm
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd modern-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Profile header with image and social links
│   ├── About.tsx       # Introduction section
│   ├── Research.tsx    # Research interests
│   ├── Publications.tsx # Publications with collapsible bibtex
│   ├── Education.tsx   # Education history
│   ├── Experience.tsx  # Work experience
│   ├── Awards.tsx      # Awards and achievements
│   ├── Misc.tsx        # Personal interests
│   └── Footer.tsx      # Footer with copyright
├── App.tsx             # Main app component
├── main.tsx           # Entry point
├── App.css            # All styling
└── index.css          # CSS imports

public/
└── assets/            # Images and static files
```

## Customization

### Colors

The primary color is defined in `App.css`:

```css
.social-link {
  color: #307Df6;
}
```

### Content

Update the content by modifying the respective component files in `src/components/`.

### Styling

Custom styles can be added in `src/App.css`.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Original design inspired by academic portfolio templates. Built with modern web technologies for better performance and maintainability.
