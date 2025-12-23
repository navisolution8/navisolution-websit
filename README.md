# NaviSolution Website

A modern, professional single-page website for NaviSolution - a forward-thinking company specializing in innovative app development.

![NaviSolution](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop)

## 🚀 Features

- **Modern Design**: Stunning dark theme with vibrant gradients and glassmorphism effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Animations**: Particle effects, scroll animations, and smooth transitions
- **Portfolio Showcase**: Filterable project gallery with hover effects
- **Contact Form**: Integrated with Formspree for easy message handling
- **SEO Optimized**: Proper meta tags, semantic HTML, and Open Graph support
- **Fast Loading**: Lazy loading images and optimized performance
- **GitHub Pages Ready**: Static site optimized for easy deployment

## 📋 Sections

1. **Hero** - Eye-catching intro with animated particles and typing effect
2. **About Us** - Company mission, vision, and core values
3. **Services** - 6 comprehensive service offerings
4. **Process** - 6-step development methodology timeline
5. **Portfolio** - Filterable project showcase (Mobile, Web, AI/ML)
6. **Why Choose Us** - Key differentiators and competitive advantages
7. **Contact** - Form with validation + contact information
8. **Footer** - Quick links, social media, and legal info

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with variables, Grid, Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts (Inter)** - Premium typography
- **Formspree** - Contact form handling

## 📦 File Structure

```
navisolution_webapp/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── main.js        # Interactive features
├── images/            # Image assets (currently using external URLs)
├── README.md          # This file
└── CNAME             # (Optional) For custom domain
```

## 🚀 Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in a modern web browser (Chrome, Firefox, Edge, Safari)
3. That's it! No build process required.

### Using Live Server (Recommended)

For the best development experience, use a local server:

```bash
# If you have Python installed:
python -m http.server 8000

# Or use VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deploying to GitHub Pages

### Step-by-Step Guide

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it `navisolution-website` (or any name you prefer)
   - Make it **Public**
   - Click "Create repository"

3. **Upload your files**
   
   **Option A: Using GitHub Web Interface**
   - Click "uploading an existing file"
   - Drag and drop all your website files
   - Click "Commit changes"
   
   **Option B: Using Git (Command Line)**
   ```bash
   # Navigate to your project directory
   cd d:\android_app\navisolution_webapp
   
   # Initialize Git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: NaviSolution website"
   
   # Add remote repository (replace USERNAME with your GitHub username)
   git remote add origin https://github.com/USERNAME/navisolution-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** in the left sidebar
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait a few minutes for deployment

5. **Access your website**
   - Your site will be live at: `https://USERNAME.github.io/navisolution-website/`
   - The URL will appear in the Pages settings

### Using a Custom Domain (Optional)

1. **Purchase a domain** (e.g., navisolution.com)

2. **Configure DNS** at your domain registrar:
   - Add a CNAME record pointing to `USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Add CNAME file** to your repository:
   - Create a file named `CNAME` (no extension)
   - Add your domain: `www.navisolution.com`
   - Commit and push

4. **Configure in GitHub Pages settings**:
   - Enter your custom domain
   - Check "Enforce HTTPS"

## 📧 Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io/) - a free service for static sites.

1. **Go to** https://formspree.io/
2. **Sign up** for a free account
3. **Create a new form**
4. **Copy your form endpoint** (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. **Update index.html**:
   - Find line with `<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID

That's it! Messages will now be sent to your email.

## 🎨 Customization Guide

### Update Company Information

**Logo & Name**:
- Search for "NaviSolution" in `index.html` and replace with your company name
- Update the rocket emoji favicon if desired (line ~29)

**Colors**:
- Edit CSS variables in `css/style.css` (lines 10-17)
```css
--primary-color: #00D9FF;      /* Change primary color */
--secondary-color: #B026FF;     /* Change secondary color */
--accent-color: #FF6B35;        /* Change accent color */
```

**Content**:
- Edit text directly in `index.html`
- Replace Unsplash image URLs with your own images
- Update services and portfolio projects

**Social Media Links**:
- Update links in the Contact section (around line 530)
- Add your actual LinkedIn, Twitter, GitHub, Facebook URLs

**Email Address**:
- Change `info@navisolution.com` to your actual email

### Adding Your Own Images

1. Place images in the `images/` folder
2. Update `img src` attributes in `index.html`:
   ```html
   <!-- From: -->
   <img src="https://images.unsplash.com/photo-xyz" alt="...">
   
   <!-- To: -->
   <img src="images/your-image.jpg" alt="...">
   ```

## 🐛 Troubleshooting

**Images not loading?**
- Check that image URLs are correct
- Ensure images are in the `images/` folder
- Check browser console for errors (F12)

**Contact form not working?**
- Verify Formspree form ID is correct
- Check that form endpoint starts with `https://formspree.io/f/`
- Test form submission and check spam folder

**Website not appearing on GitHub Pages?**
- Ensure repository is public
- Check that `index.html` is in the root directory
- Wait 5-10 minutes after enabling Pages
- Check Pages settings for error messages

**Mobile menu not working?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Clear browser cache

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Contact: info@navisolution.com

---

**Built with ❤️ for the future by NaviSolution**

🚀 Ready to launch your digital presence!
