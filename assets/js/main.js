/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
(function() {
  "use strict";

  /* --------------------------------------------------------------
  # Theme & Language Logic
  -------------------------------------------------------------- */
  
  // Elements
  const themeToggleBtn = document.getElementById('theme-toggle');
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Translations Dictionary
  const translations = {
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-experience": "Experience",
      "nav-certifications": "Certifications",
      "nav-volunteering": "Volunteering",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "hero-name": "Mahmoud Ehab",
      "hero-role-prefix": "I'm ",
      "btn-download-cv": "Download my CV",
      "about-title": "About",
      "about-desc": "Recent Electrical Engineering graduate specializing in Computer & Control Engineering with hands-on experience in system administration and automation. Successfully coordinated 25+ technical events and mentored 200+ students with 95%+ satisfaction rates. Proficient in Python, Linux environments, and cloud infrastructure.",
      "experience-title": "Work & Relevant Experience",
      "experience-desc": "My professional journey and hands-on experience in the field.",
      "exp-professional-title": "Professional Experience",
      "site-coordinator-role": "Site Coordinator",
      "site-coordinator-date": "Feb 2024 – Jul 2025",
      "almentor-location": "Almentor Egypt, Cairo, Egypt",
      "site-coordinator-desc-1": "Coordinated and managed offline learning sessions ensuring 95%+ participant satisfaction.",
      "site-coordinator-desc-2": "Oversaw event logistics, technical infrastructure, and on-site support for 25+ participants per session.",
      "site-coordinator-desc-3": "Provided technical guidance and academic support to students, reducing technical issues.",
      "software-engineer-intern-role": "Software Engineer Intern",
      "software-engineer-intern-date": "Jun 2023 – Dec 2023",
      "alx-location": "ALX Africa, Remote",
      "software-engineer-intern-desc-1": "Developed and implemented various software solutions.",
      "software-engineer-intern-desc-2": "Contributed to the implementation of new projects from conception to deployment.",
      "software-engineer-intern-desc-3": "Collaborated with colleagues to set plans and strategies for ongoing projects.",
      "certifications-summary-title": "Certifications & Training (Summary)",
      "cybersecurity-internship-role": "Cybersecurity Internship",
      "cybersecurity-internship-date": "2024",
      "iti-location": "Information Technology Institute (ITI)",
      "cloud-role": "Cloud and Virtualization Fundamentals",
      "cloud-date": "2024",
      "mahara-location": "Mahara-Tech",
      "certifications-title": "Certifications",
      "certifications-desc": "Continuous learning and professional development achievements.",
      "volunteering-title": "Volunteering Experience",
      "volunteering-desc": "Giving back to the community and mentoring the next generation.",
      "student-mentor-title": "Student Mentor & Technical Coordinator",
      "organization-label": "Organization:",
      "student-activities": "Various Student Activities",
      "mentoring-desc-1": "Mentored 200+ students in technical workshops, achieving a 95%+ satisfaction rate.",
      "mentoring-desc-2": "Coordinated 25+ technical events, managing logistics and technical support.",
      "mentoring-desc-3": "Fostered a collaborative learning environment for aspiring engineers.",
      "projects-title": "Projects",
      "projects-desc": "Here are some of the projects I've worked on, showcasing my skills in application development, machine learning, and system automation.",
      "project-snack-desc": "An AI-powered nutrition tracking mobile application developed for my graduation project.",
      "project-linux-desc": "A comprehensive Bash automation script for configuring Linux systems after a fresh install.",
      "contact-title": "Contact",
      "contact-desc": "Feel free to reach out to me for any inquiries, collaborations, or opportunities.",
      "address-label": "Address",
      "address-value": "Port Said, 42541, Egypt",
      "call-label": "Call Me",
      "email-label": "Email Me",
      "form-name-label": "Your Name",
      "form-email-label": "Your Email",
      "form-subject-label": "Subject",
      "form-message-label": "Message",
      "form-send-btn": "Send Message",
      "copyright-text": "Copyright",
      "footer-name": "Mahmoud Ehab",
      "rights-reserved": "All Rights Reserved"
    },
    ar: {
      "nav-home": "الرئيسية",
      "nav-about": "عني",
      "nav-experience": "الخبرات",
      "nav-certifications": "الشهادات",
      "nav-volunteering": "التطوع",
      "nav-projects": "المشاريع",
      "nav-contact": "تواصل معي",
      "hero-name": "محمود إيهاب",
      "hero-role-prefix": "أنا ",
      "btn-download-cv": "تحميل السيرة الذاتية",
      "about-title": "عني",
      "about-desc": "خريج هندسة كهربائية حديث متخصص في هندسة الحاسبات والتحكم مع خبرة عملية في إدارة النظم والأتمتة. نسقت بنجاح أكثر من 25 فعالية تقنية وأرشدت أكثر من 200 طالب بمعدلات رضا تفوق 95%. محترف في Python وبيئات Linux والبنية التحتية السحابية.",
      "experience-title": "العمل والخبرات ذات الصلة",
      "experience-desc": "رحلتي المهنية والخبرة العملية في المجال.",
      "exp-professional-title": "الخبرة المهنية",
      "site-coordinator-role": "منسق موقع",
      "site-coordinator-date": "فبراير 2024 – يوليو 2025",
      "almentor-location": "المنتور مصر، القاهرة، مصر",
      "site-coordinator-desc-1": "تنسيق وإدارة دورات التعلم المباشرة مع ضمان رضا المشاركين بنسبة تفوق 95%.",
      "site-coordinator-desc-2": "الإشراف على لوجستيات الفعاليات والبنية التحتية التقنية والدعم المباشر لأكثر من 25 مشاركاً في الجلسة.",
      "site-coordinator-desc-3": "تقديم التوجيه التقني والدعم الأكاديمي للطلاب، مما قلل من المشاكل التقنية.",
      "software-engineer-intern-role": "متدرب مهندس برمجيات",
      "software-engineer-intern-date": "يونيو 2023 – ديسمبر 2023",
      "alx-location": "ALX أفريقيا، عن بعد",
      "software-engineer-intern-desc-1": "تطوير وتنفيذ حلول برمجية متنوعة.",
      "software-engineer-intern-desc-2": "المساهمة في تنفيذ مشاريع جديدة من الفكرة إلى النشر.",
      "software-engineer-intern-desc-3": "التعاون مع الزملاء لوضع خطط واستراتيجيات للمشاريع الجارية.",
      "certifications-summary-title": "الشهادات والتدريب (ملخص)",
      "cybersecurity-internship-role": "تدريب الأمن السيبراني",
      "cybersecurity-internship-date": "2024",
      "iti-location": "معهد تكنولوجيا المعلومات (ITI)",
      "cloud-role": "أساسيات الحوسبة السحابية والمحاكاة الافتراضية",
      "cloud-date": "2024",
      "mahara-location": "مهارة تك",
      "certifications-title": "الشهادات",
      "certifications-desc": "التعلم المستمر وإنجازات التطوير المهني.",
      "volunteering-title": "الخبرة التطوعية",
      "volunteering-desc": "رد الجميل للمجتمع وتوجيه الجيل القادم.",
      "student-mentor-title": "مرشد طلابي ومنسق تقني",
      "organization-label": "المنظمة:",
      "student-activities": "أنشطة طلابية متنوعة",
      "mentoring-desc-1": "إرشاد أكثر من 200 طالب في ورش عمل تقنية، محققاً معدل رضا يفوق 95%.",
      "mentoring-desc-2": "تنسيق أكثر من 25 فعالية تقنية، وإدارة الخدمات اللوجستية والدعم الفني.",
      "mentoring-desc-3": "تعزيز بيئة تعليمية تعاونية للمهندسين الطموحين.",
      "projects-title": "المشاريع",
      "projects-desc": "إليك بعض المشاريع التي عملت عليها، والتي تعرض مهاراتي في تطوير التطبيقات، والتعلم الآلي، وأتمتة النظم.",
      "project-snack-desc": "تطبيق محمول مدعوم بالذكاء الاصطناعي لتتبع التغذية، تم تطويره كـ مشروع تخرجي.",
      "project-linux-desc": "سكربت أتمتة شامل بلغة Bash لتكوين أنظمة Linux بعد التثبيت الجديد.",
      "contact-title": "تواصل معي",
      "contact-desc": "لا تتردد في التواصل معي لأي استفسارات أو تعاواوت أو فرص. أنا دائماً منفتح لمناقشة مشاريع وأفكار جديدة.",
      "address-label": "العنوان",
      "address-value": "بورسعيد، 42541، مصر",
      "call-label": "اتصل بي",
      "email-label": "راسلني",
      "form-name-label": "اسمك",
      "form-email-label": "بريدك الإلكتروني",
      "form-subject-label": "الموضوع",
      "form-message-label": "الرسالة",
      "form-send-btn": "إرسال الرسالة",
      "copyright-text": "حقوق النشر",
      "footer-name": "محمود إيهاب",
      "rights-reserved": "جميع الحقوق محفوظة"
    }
  };

  /**
   * Dark Mode Logic
   */
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('bi-moon', 'bi-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Icon Toggle
    if (isDark) {
      themeIcon.classList.replace('bi-moon', 'bi-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.replace('bi-sun', 'bi-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  /**
   * Bilingual Support Logic
   */
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  langToggleBtn.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  });

  function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';
    
    // Save to localStorage
    localStorage.setItem('lang', lang);

    // Swap Bootstrap CSS
    // Check if rtl css is loaded or needs to be loaded
    // Note: We'll assume standard bootstrap is loaded by default.
    // If RTL, we might want to switch to bootstrap.rtl.min.css if layout breaks, 
    // but often [dir="rtl"] + standard bootstrap works for simple layouts or we need to swap the link href.
    // User specifically asked to switch to bootstrap.rtl.min.css.
    
    const bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]') || document.querySelector('link[href*="bootstrap.rtl.min.css"]');
    if (bootstrapLink) {
        if (lang === 'ar') {
            bootstrapLink.href = 'assets/vendor/bootstrap/css/bootstrap.rtl.min.css';
        } else {
            bootstrapLink.href = 'assets/vendor/bootstrap/css/bootstrap.min.css';
        }
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Trigger AOS refresh to handle layout changes
    if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 100);
    }
  }

})();
