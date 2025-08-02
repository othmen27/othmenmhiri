# Othmen Mhiri - Personal Portfolio

A clean, responsive personal portfolio and resume website built with Bootstrap 5, Pug, SCSS, and JavaScript. This modern site showcases professional experience, skills, education, and projects.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Build Process](#build-process)
  - [Local Development](#local-development)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)
- [About](#about)

## Features

- Fully responsive design built with Bootstrap 5
- Clean and professional layout for resumes/CVs
- Optimized for performance
- Easy to customize
- Cross-browser compatible
- Built with modern development tools
- Interactive project showcases with hover effects
- Social media integration

## Technologies Used

- [Pug](https://pugjs.org/) - Template engine for HTML
- [SCSS](https://sass-lang.com/) - CSS preprocessor
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Client-side scripting

## Project Structure

```
portfolio/
├── docs/                    # Built files for deployment
├── scripts/                 # Build scripts
├── src/                     # Source files
│   ├── assets/              # Images and other assets
│   ├── js/                  # JavaScript files
│   ├── pug/                 # Pug template files
│   └── scss/                # SCSS files
├── .editorconfig           # Editor configuration
├── .gitignore              # Git ignore file
├── LICENSE                 # License information
└── package.json            # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd othmenmhiri
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Build Process

The project uses custom build scripts to compile Pug, SCSS, and JavaScript files.

- `npm run build` - Clean and build the entire project
- `npm run build:assets` - Copy assets to docs/
- `npm run build:pug` - Compile Pug files to HTML
- `npm run build:scss` - Compile SCSS files to CSS
- `npm run build:scripts` - Process JavaScript files
- `npm run clean` - Clean the docs/ directory

### Local Development

1. Start the development server:
   ```bash
   npm start
   ```

2. The website will be available at `http://localhost:3000`

3. Any changes to source files will automatically trigger a rebuild.

For debugging:
```bash
npm run start:debug
```

## Deployment

The website is ready for deployment to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the changes to your GitHub repository.

3. Enable GitHub Pages in your repository settings to serve from the `docs/` folder.

For direct deployment (if deploy.js is configured):
```bash
npm run deploy
```

## Customization

### Content

- Update personal information in `src/pug/index.pug`
- Replace images in `src/assets/img/`
- Modify sections to match your experience and skills
- Adjust the structure in the Pug templates as needed

### Styling

- Modify color schemes in `src/scss/variables/_colors.scss`
- Adjust spacing in `src/scss/variables/_spacing.scss`
- Change typography in `src/scss/variables/_typography.scss`
- Add or modify components in `src/scss/components/`
- Add or modify sections in `src/scss/sections/`

### JavaScript

- Add custom functionality in `src/js/scripts.js`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About

This portfolio website was created by Othmen Mhiri, an IT student at ISET Sousse specializing in Networks and IT Services. The site showcases his professional experience, skills, education, certifications, and projects.

The portfolio highlights projects like:
- Wishify: A full-stack wishlist web application built with the MERN stack
- Tunisian Algorithm to C++ Translator: A compiler-style program that translates Tunisian pseudocode into C++ code

Othmen is currently focusing on Cloud Computing, DevOps, and Cybersecurity while preparing for industry certifications such as CompTIA Network+, CompTIA Security+, and AWS Certified Cloud Practitioner.
