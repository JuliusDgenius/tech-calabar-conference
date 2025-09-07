# Tech Conference Calabar 2025

> Innovation. Networking. Future.

A modern, responsive website for Tech Conference Calabar 2025 - the premier gathering of innovators, entrepreneurs, and developers in Nigeria's Silicon South.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility Compliant**: WCAG 2.1 AA compliant
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Interactive Elements**: Countdown timer, FAQ accordions, and smooth scrolling
- **Form Integration**: Google Forms/Formspree for registration and ticketing
- **Static Site**: No backend required - pure HTML, CSS, and JavaScript

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: Interactive features and performance optimizations
- **GitHub Actions**: CI/CD pipeline with automated testing and deployment
- **Google Forms/Formspree**: Form handling for registration and ticketing
- **GitHub Pages**: Static site hosting

## 📁 Project Structure

```
tech-conference-calabar/
├── .github/
│   ├── workflows/          # GitHub Actions workflows
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/
│   ├── attendees/          # Attendee profile images
│   ├── hero-imgs/          # Hero section background images
│   ├── partners/           # Partner and sponsor logos
│   ├── speakers/           # Speaker profile images
│   └── teams/              # Team member images
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for development tools)
- Python 3 (for local server)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tech-conference-calabar.git
   cd tech-conference-calabar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start local development server**
   ```bash
   npm start
   # or
   python3 -m http.server 3000
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm start

# Run linting
npm run lint

# Run HTML validation
npm run validate

# Run Lighthouse performance audit
npm run lighthouse

# Format code
npm run format

# Check code formatting
npm run format:check

# Serve on different port
npm run serve
```

### Code Quality

The project includes comprehensive linting and validation:

- **HTML**: HTMLHint and HTML-Validate
- **CSS**: Stylelint with standard configuration
- **JavaScript**: ESLint with standard configuration
- **Performance**: Lighthouse CI for performance monitoring

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs CI/CD pipeline
3. Site is deployed to `https://your-username.github.io/tech-conference-calabar`

### Manual Deployment

For other static hosting platforms (Netlify, Vercel, etc.):

1. **Upload files** directly to your hosting provider
   - No build process needed - it's a static site
   - Ensure all assets are included

2. **Configure form handling** (if using external forms)
   - Set up Google Forms or Formspree integration
   - Update form action URLs in HTML

## 🔧 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow:

### Main Workflow (`ci-cd.yml`)
- **Linting**: HTML, CSS, and JavaScript validation
- **Performance Testing**: Lighthouse audits
- **Security Scanning**: Vulnerability checks
- **Static Site Validation**: Structure validation and optimization checks
- **Form Integration Check**: Validates Google Forms/Formspree integration
- **Deployment**: Automatic deployment to GitHub Pages

### Additional Workflows
- **Performance Monitoring**: Daily Lighthouse audits
- **Dependency Updates**: Weekly dependency updates

## 📊 Performance

The site is optimized for performance:

- **Lighthouse Scores**: 90+ across all categories
- **Image Optimization**: Compressed and properly sized images
- **Lazy Loading**: Images load as needed
- **Minimal JavaScript**: Vanilla JS for better performance
- **CSS Optimization**: Efficient selectors and minimal unused code

## ♿ Accessibility

The site follows WCAG 2.1 AA guidelines:

- **Semantic HTML**: Proper heading structure and landmarks
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Sufficient contrast ratios
- **Screen Reader Support**: ARIA labels and roles

## 🔍 SEO

Optimized for search engines:

- **Meta Tags**: Comprehensive meta descriptions and Open Graph tags
- **Structured Data**: Schema.org event markup
- **Semantic HTML**: Proper heading hierarchy
- **Performance**: Fast loading times
- **Mobile-First**: Responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Ensure all tests pass
- Update documentation as needed
- Test on multiple browsers and devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Tech Conference Calabar](https://techconfcalabar.com)
- **Email**: info@techconfcalabar.com
- **Twitter**: [@TechConfCalabar](https://twitter.com/techconfcalabar)

## 🙏 Acknowledgments

- Design inspiration from modern conference websites
- Icons and images from various sources
- Community feedback and contributions

---

**Built with ❤️ by JuliusDgenius for the Nigerian tech community**