# Fardin Talukder - Portfolio Website 🚀

A modern, responsive portfolio website showcasing MERN stack development skills and cybersecurity expertise. Built with React, TypeScript, and TailwindCSS.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-blue)

## 👨‍💻 About

This portfolio website represents **MD. Omur Faruque Talukder**, a passionate Computer Science & Engineering student at NITER, Bangladesh, specializing in MERN stack development and cybersecurity. Currently working as a Frontend Developer at Uddhar, Rajshahi.

## ✨ Features

### 🏠 **Homepage**

- **Hero Section**: Eye-catching introduction with gradient text effects
- **About Section**: Professional bio with actual photo
- **Skills Showcase**: Categorized technical skills with proficiency levels
- **Featured Projects**: Highlight of key projects with live demos
- **Contact Form**: Functional contact form with validation
- **Dark/Light Mode**: Smooth theme switching with persistence

### 📄 **Individual Pages**

- **About Page**: Detailed biography, education timeline, certifications, and interests
- **Projects Page**: Complete project portfolio with filtering capabilities
- **Contact Page**: Comprehensive contact information with social links

### 🎨 **Design & UX**

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional aesthetic with subtle animations
- **Accessibility**: WCAG 2.1 compliant with proper ARIA attributes
- **Performance**: Optimized loading with lazy loading and efficient bundling

## 🛠️ Tech Stack

### **Frontend**

- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite 6.2.2** - Fast build tool and development server
- **React Router 6.26.2** - Client-side routing (SPA mode)

### **Styling & UI**

- **TailwindCSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Headless, accessible UI components
- **Lucide React** - Beautiful icon system
- **Framer Motion** - Smooth animations and transitions

### **Backend Integration**

- **Express.js 4.18.2** - Node.js web framework
- **Serverless HTTP** - Serverless deployment support

### **Development Tools**

- **Vitest** - Unit testing framework
- **ESLint & Prettier** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fardin072/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
├── client/                     # React frontend application
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Radix UI)
│   │   ├── portfolio/         # Portfolio-specific components
│   │   └── Navigation.tsx     # Main navigation component
│   ├── pages/                 # Route components
│   │   ├── Index.tsx         # Homepage
│   │   ├── About.tsx         # About page
│   │   ├── Projects.tsx      # Projects showcase
│   │   └── Contact.tsx       # Contact page
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── global.css            # Global styles and CSS variables
│   └── main.tsx              # App entry point with routing
├── server/                    # Express.js backend
│   ├── routes/               # API route handlers
│   └── index.ts              # Server configuration
├── shared/                    # Shared types and interfaces
├── public/                    # Static assets
├── components.json           # shadcn/ui configuration
├── tailwind.config.ts        # TailwindCSS configuration
└── package.json              # Project dependencies and scripts
```

## 🎯 Key Features Breakdown

### **Professional Information**

- **Name**: MD. Omur Faruque Talukder
- **Education**: BSc Computer Science & Engineering, NITER
- **Current Role**: Frontend Developer at Uddhar, Rajshahi
- **Specializations**: MERN Stack, Cybersecurity, Ethical Hacking

### **Technical Skills**

- **Programming**: JavaScript (Intermediate), C++, Python
- **MERN Stack**: MongoDB, Express.js, React, Node.js
- **UI Frameworks**: TailwindCSS, Daisy UI, Material UI
- **Cybersecurity**: Wireshark, Nmap, Burp Suite, OWASP, Red Team tactics

### **Certifications**

- ✅ Web Development Course (Programming Hero)
- ✅ Introduction to Cyber Security
- ✅ Junior Penetration Tester (Try Hack Me)
- ⏳ Programming Course (Ongoing)
- ⏳ Red Teaming (Try Hack Me, Ongoing)

### **Contact Information**

- **Email**: omurfaruquetalukder9@gmail.com
- **Phone**: +880 1581 452083
- **Location**: Savar, Dhaka, Bangladesh
- **GitHub**: [fardin072](https://github.com/fardin072)
- **LinkedIn**: [md-omurfaruque-talukder](https://www.linkedin.com/in/md-omurfaruque-talukder/)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build for production
npm run build:client # Build client only
npm run build:server # Build server only

# Production
npm start           # Start production server

# Testing & Quality
npm test           # Run unit tests
npm run typecheck  # TypeScript type checking
npm run format.fix # Format code with Prettier
```

## 🌐 Deployment

### **Development Server**

The project uses a single-port setup (8080) for both frontend and backend during development.

### **Production Build**

```bash
npm run build
npm start
```

### **Deployment Options**

- **Netlify**: Optimized for static deployment with serverless functions
- **Vercel**: Full-stack deployment with edge functions
- **Docker**: Containerized deployment (Dockerfile included)
- **Traditional Hosting**: Build and serve static files

### **Environment Variables**

No environment variables required for basic functionality. The portfolio works out of the box.

## 🎨 Customization

### **Color Scheme**

Colors are defined in `client/global.css` using HSL values:

```css
:root {
  --primary: 220.9 39.3% 11%;
  --secondary: 220 14.3% 95.9%;
  /* ... more colors */
}
```

### **Typography**

Uses Inter font family loaded from Google Fonts. Configure in `tailwind.config.ts`.

### **Content Updates**

- Personal information: Update components in `client/components/portfolio/`
- Projects: Modify the projects array in `client/pages/Projects.tsx`
- Skills: Update skills categories in `client/components/portfolio/Skills.tsx`

## 🔒 Security Features

- **Input Validation**: Form validation using Zod schemas
- **XSS Protection**: Sanitized inputs and outputs
- **HTTPS**: Secure communication protocols
- **Privacy**: No tracking or analytics by default

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailored for all screen sizes
- **Touch Friendly**: Optimized touch interactions
- **Performance**: Lazy loading and optimized images

## 🧪 Testing

```bash
npm test           # Run all tests
npm run test:watch # Run tests in watch mode
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact & Support

**MD. Omur Faruque Talukder**

- 📧 Email: omurfaruquetalukder9@gmail.com
- 📱 Phone: +880 1581 452083
- 💼 LinkedIn: [md-omurfaruque-talukder](https://www.linkedin.com/in/md-omurfaruque-talukder/)
- 💻 GitHub: [fardin072](https://github.com/fardin072)

## 🌟 Acknowledgments

- **Programming Hero** - Web Development Course
- **Try Hack Me** - Cybersecurity training platform
- **NITER** - National Institute of Textile Engineering and Research
- **Uddhar** - Current workplace providing practical experience

---

**Built with ❤️ by Fardin Talukder | MERN Stack Developer & Cybersecurity Enthusiast**
