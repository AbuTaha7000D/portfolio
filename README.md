# Portfolio — Mahmoud Ehab

This is the source code for my personal portfolio website. It highlights my background as a Computer Engineer and System Administrator, showcases selected projects, and provides ways to get in touch.

## Live Site

- GitHub Pages: `abutaha7000d.github.io/portfolio/`

## Features

- **Responsive layout** built with Bootstrap 5
- **Animated sections** using AOS (Animate On Scroll)
- **Typed hero text** via typed.js
- **Projects section** with external links
- **Contact form** powered by Formspree
- **Dynamic details** (age and current year) rendered via vanilla JS

## Tech Stack

- **HTML5**, **CSS3**, **JavaScript** (no framework)
- **Bootstrap 5**, **Bootstrap Icons**
- Vendor libraries: **AOS**, **typed.js**, **Glightbox**, **Swiper**, **PureCounter**, **Waypoints**, **Isotope**

## Project Structure

```text
index.html
assets/
  css/
    main.css
  js/
    main.js
  img/
    ... images (profile, hero, favicon)
  vendor/
    bootstrap/
    bootstrap-icons/
    aos/
    glightbox/
    swiper/
    typed.js/
    purecounter/
    waypoints/
    isotope-layout/
  cv/
    Mahmoud_Ehab_CV.pdf
```

Key sections in `index.html`:

- `#hero` — Intro and CV download
- `#about` — Bio and quick facts
- `#skills` — Skill bars
- `#resume` — Education, certifications, and experience
- `#projects` — Highlighted projects with links
- `#contact` — Contact info, map, and Formspree form

## Local Development

Because this is a static site, you can open `index.html` directly in a browser. For a better experience (proper asset loading and CORS-safe dev), use a local HTTP server:

```bash
# Option 1: Python
python3 -m http.server 8000
# then open http://localhost:8000

# Option 2: Node (serve)
npx serve . -l 8000 --single
# then open http://localhost:8000
```

## Deployment

- Host on GitHub Pages by serving this repository from the `main` branch (or `docs/` if preferred).
- Ensure asset paths remain relative (as in this repo) so they work on Pages.

## Customization

- Update profile info, links, and copy in `index.html` (e.g., the `#about`, `#resume`, and `#contact` sections).
- Replace images in `assets/img/` with your own, keeping filenames or updating references in HTML.
- Adjust colors and styles in `assets/css/main.css` and, if needed, override Bootstrap variables/utilities.
- Update the CV at `assets/cv/Mahmoud_Ehab_CV.pdf` and the download link in the hero section.
- Configure the contact form endpoint in `#contact` (`Formspree` action attribute) if you fork this project.

## Attribution & License

- Design based on a template by BootstrapMade. See their license terms: `https://bootstrapmade.com/license/`.
- Third-party libraries are used under their respective licenses.
- Content (text, images, and CV) © Mahmoud Ehab.

## Contact

- Email: `eng.mahmoud.e.hussein@gmail.com`
- LinkedIn: `linkedin.com/in/abutaha7000d`
- GitHub: `github.com/AbuTaha7000D`
