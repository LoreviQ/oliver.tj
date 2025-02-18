# Remix Personal Site Template

A modern, customizable personal website template built with Remix and React. This template is designed to be easily forkable and customizable, perfect for developers looking to quickly set up their personal site or portfolio.

## Features

- 🎨 Easily customizable through configuration files
- 📱 Fully responsive design
- 📝 Built-in blog support
- 🎯 Project portfolio
- 🎨 Customizable theming via Tailwind CSS
- 🚀 Fast and SEO-friendly with Remix

## Quick Start

1. Fork this repository
2. Clone your forked repository
3. Install dependencies:

```bash
npm install
```

4. Customize your site:
   - Edit `app/site.conf` to update site-wide settings
   - Add your content to `app/content/`
   - Customize theme colors in `app/tailwind.css`

5. Run the development server:

```bash
npm run dev
```

## Customization

### Site Configuration

All site-wide settings can be configured in `app/site.conf`. This includes:
- Site title
- Description
- Social media links
- Contact information
- Navigation settings

### Content Management

#### Blog Posts
Add your blog posts in `app/content/blog/`. Each post should include:
- Title
- Date
- Tags
- Content
- Optional excerpt

#### Projects
Configure your projects in `app/content/projects/`. Each project can have:
- Name
- Logo
- URL
- Description
- Tags
- Associated blog post (optional)
- Date

### Theming

Customize the look and feel of your site by editing `app/tailwind.css`. The template uses a flexible theming system that allows you to:
- Change color schemes
- Modify typography
- Adjust spacing and layouts

## Structure

```
app/
├── content/ # Your content files
├── routes/ # Your routes
├── components/ # React components
├── types/ # TypeScript interfaces
├── utils/ # Utility functions
├── tailwind.css # Your tailwind.css file
└── site.conf # Your site.conf file
```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.