/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// Global variable for typed.js instance (shared across IIFEs)
let typedInstance = null;

(function () {
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
		navmenu.addEventListener('click', function (e) {
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
	typedInstance = null; // Store typed instance globally for language switching
	const selectTyped = document.querySelector('.typed');
	if (selectTyped) {
		let typed_strings = selectTyped.getAttribute('data-typed-items');
		typed_strings = typed_strings.split(',');
		typedInstance = new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	}



	/**
	 * Correct scrolling position upon page load for URLs containing hash links.
	 */
	window.addEventListener('load', function (e) {
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
(function () {
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
			"about-desc": "Graduate of the Faculty of Engineering, Port Said University – Electrical Engineering (Computer & Control Engineering). Entry-Level IT Support professional focused on troubleshooting, networking basics, and helping users solve technical problems.",
			"about-subtitle": "Entry-Level IT Support Professional",
			"about-summary": "Graduate of Port Said University, Faculty of Engineering - Electrical Engineering (Computer & Control Engineering). Focused on delivering exceptional IT support and technical troubleshooting.",
			"about-label-birthday": "Birthday:",
			"about-val-birthday": "27 Nov 2001",
			"about-label-website": "Website:",
			"about-val-website": "abutaha7000d.github.io/portfolio/",
			"about-label-phone": "Phone:",
			"about-val-phone": "+201097998754",
			"about-label-city": "City:",
			"about-val-city": "Port Said, Egypt",
			"about-label-major": "Major:",
			"about-val-major": "Computer & Control Engineering",
			"about-label-degree": "Degree:",
			"about-val-degree": "Bachelor's",
			"about-label-email": "Email:",
			"about-val-email": "eng.mahmoud.e.hussein@gmail.com",
			"about-label-freelance": "Freelance:",
			"about-val-freelance": "Available",
			"experience-title": "Work & Relevant Experience",
			"experience-desc": "My professional journey and hands-on experience in the field.",
			"exp-professional-title": "Professional Experience",
			"site-coordinator-role": "Site Coordinator",
			"site-coordinator-date": "Feb 2024 – Jul 2025",
			"almentor-location": "Almentor Egypt, Port Said, Egypt",
			"site-coordinator-desc-1": "Supporting instructors and students to ensure smooth offline learning sessions.",
			"site-coordinator-desc-2": "Setting up devices, classroom equipment, and managing technical infrastructure for on-site training.",
			"site-coordinator-desc-3": "Solving technical issues and providing hands-on troubleshooting during live sessions.",
			"training-title": "Training / Professional Certificate",
			"training-google-name": "Google IT Support Professional Certificate",
			"training-google-date": "Dec 2025 – Present",
			"training-google-summary": "Professional certification covering core IT support tasks including troubleshooting, customer service, networking, operating systems, system administration, and security. (Currently in progress)",
			"training-ibm-name": "IBM Full Stack Software Developer Professional Certificate",
			"training-ibm-date": "Dec 2025 – Present",
			"training-ibm-summary": "Comprehensive training in full-stack development, cloud-native applications, and software engineering principles using modern frameworks and tools. (Currently in progress)",
			"certifications-title": "Certifications",
			"cert-ibm-cloud": "Introduction to Cloud Computing",
			"cert-ibm-cloud-inst": "IBM",
			"cert-ibm-cloud-desc": "Foundational concepts of cloud computing, service models, and infrastructure.",
			"cert-ibm-software": "Introduction to Software Engineering",
			"cert-ibm-software-inst": "IBM",
			"cert-ibm-software-desc": "Overview of software engineering principles, SDLC, and agile methodologies.",
			"cert-udemy-python": "The Python Programming Comprehensive Bootcamp",
			"cert-udemy-python-inst": "Udemy",
			"cert-udemy-python-desc": "In-depth Python programming including automation, data analysis, and web development.",
			"cert-iti-cyber": "Cybersecurity Internship",
			"cert-iti-cyber-inst": "Information Technology Institute (ITI)",
			"cert-iti-cyber-desc": "Practical training in cybersecurity fundamentals, threat analysis, and protection.",
			"cert-mahara-cloud": "Cloud & Virtualization",
			"cert-mahara-cloud-inst": "Mahara-Tech",
			"cert-mahara-cloud-desc": "Core concepts of virtualization technologies and cloud deployment models.",
			"cert-mahara-db": "Database Fundamentals",
			"cert-mahara-db-inst": "Mahara-Tech",
			"cert-mahara-db-desc": "Relational database concepts, SQL, and database management basics.",
			"cert-mahara-net": "Computer Network Fundamentals",
			"cert-mahara-net-inst": "Mahara-Tech",
			"cert-mahara-net-desc": "Networking basics including OSI model, protocols, and network hardware.",
			"cert-mahara-hacking": "Ethical Hacking",
			"cert-mahara-hacking-inst": "Mahara-Tech",
			"cert-mahara-hacking-desc": "Techniques for identifying and addressing security vulnerabilities ethically.",
			"cert-mahara-sec": "Introduction to Network Security",
			"cert-mahara-sec-inst": "Mahara-Tech",
			"cert-mahara-sec-desc": "Foundations of securing network infrastructures and data protection.",
			"cert-excel-1": "Microsoft Excel I",
			"cert-excel-1-inst": "Coursera",
			"cert-excel-1-desc": "Fundamental Excel skills, formulas, and data visualization techniques.",
			"cert-excel-2": "Microsoft Excel II",
			"cert-excel-2-inst": "Coursera",
			"cert-excel-2-desc": "Advanced data management, complex formulas, and analytical tools in Excel.",
			"cert-google-net": "The Bits and Bytes of Computer Networking",
			"cert-google-net-inst": "Google",
			"cert-google-net-desc": "Foundations of networking, including the TCP/IP model, networking protocols, and infrastructure.",
			"cert-google-support": "Technical Support Fundamentals",
			"cert-google-support-inst": "Google",
			"cert-google-support-desc": "Key concepts of technical support, including troubleshooting, customer service, and systems administration.",
			"volunteering-title": "Volunteering Experience",
			"vol-icpc-title": "46th & 47th International Collegiate Programming Contest (ICPC)",
			"vol-icpc-date": "Apr 2024",
			"vol-acpc-title": "Africa and Arab Collegiate Programming Contest (ACPC)",
			"vol-acpc-date": "Dec 2023 – Dec 2025",
			"vol-ecpc-title": "Egyptian Collegiate Programming Contest (ECPC)",
			"vol-ecpc-date": "Aug 2023 – Aug 2025",
			"vol-psed-title": "Port Said Engineering Day (PSED)",
			"vol-psed-date": "Oct 2023 – Feb 2025",
			"vol-ieee-psu-title": "IEEE Port Said University Student Branch (IEEE PSU SB)",
			"vol-ieee-psu-date": "Feb 2023 – Oct 2024",
			"vol-ieee-r8-title": "IEEE R8 Entrepreneurship Week",
			"vol-ieee-r8-date": "Feb 2024",
			"vol-icpc-psu-title": "ICPC Port Said University Community (ICPC PSU)",
			"vol-icpc-psu-date": "Oct 2023 – Jun 2024",
			"projects-title": "Projects",
			"project-snack-desc": "An AI-powered nutrition tracking mobile application developed for my graduation project.",
			"project-linux-desc": "A comprehensive Bash automation script for configuring Linux systems after a fresh install.",
			"contact-title": "Contact Me",
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
			"rights-reserved": "All Rights Reserved",
			"typed-items": "IT Support Engineer,Computer Engineer,Network Engineer,Tech Problem Solver"
		},
		ar: {
			"nav-home": "الرئيسية",
			"nav-about": "عني",
			"nav-experience": "الخبرات",
			"nav-certifications": "الشهادات",
			"nav-volunteering": "التطوع",
			"nav-projects": "المشاريع",
			"nav-contact": "تواصل معي",
			"hero-name": "محمود ايهاب",
			"hero-role-prefix": "",
			"btn-download-cv": "تحميل السيرة الذاتية",
			"about-title": "عني",
			"about-desc": "خريج كلية الهندسة، جامعة بورسعيد - الهندسة الكهربية (هندسة حاسبات والتحكم). متخصص دعم فني (Entry-Level IT Support) أركز على حل المشكلات التقنية، وأساسيات الشبكات، ومساعدة المستخدمين.",
			"about-subtitle": "أخصائي دعم فني",
			"about-summary": "خريج جامعة بورسعيد، كلية الهندسة - الهندسة الكهربية (هندسة الحاسبات والتحكم). متخصص في تقديم دعم فني متميز وحل المشكلات التقنية.",
			"about-label-birthday": "تاريخ الميلاد: ",
			"about-val-birthday": "27 نوفمبر 2001",
			"about-label-website": "الموقع الإلكتروني: ",
			"about-val-website": "abutaha7000d.github.io/portfolio/",
			"about-label-phone": "الهاتف: ",
			"about-val-phone": "+201097998754",
			"about-label-city": "المدينة: ",
			"about-val-city": "بورسعيد، مصر",
			"about-label-major": "التخصص: ",
			"about-val-major": "هندسة الحاسبات والتحكم",
			"about-label-degree": "الدرجة العلمية: ",
			"about-val-degree": "بكالوريوس",
			"about-label-email": "البريد الإلكتروني: ",
			"about-val-email": "eng.mahmoud.e.hussein@gmail.com",
			"about-label-freelance": "العمل الحر: ",
			"about-val-freelance": "متاح",
			"experience-title": "العمل والخبرات ذات الصلة",
			"experience-desc": "رحلتي المهنية والخبرة العملية في المجال.",
			"exp-professional-title": "الخبرة المهنية",
			"site-coordinator-role": "منسق موقع",
			"site-coordinator-date": "فبراير 2024 – يوليو 2025",
			"almentor-location": "المنتور مصر، بورسعيد، مصر",
			"site-coordinator-desc-1": "دعم المحاضرين والطلاب لضمان سير جلسات التعلم المباشرة بسلاسة.",
			"site-coordinator-desc-2": "إعداد الأجهزة وتجهيزات الفصول الدراسية وإدارة البنية التحتية التقنية للتدريب الميداني.",
			"site-coordinator-desc-3": "حل المشكلات التقنية وتقديم الدعم الفني المباشر أثناء الجلسات والفعاليات.",
			"training-title": "التدريب / الشهادات المهنية",
			"training-google-name": "شهادة جوجل الاحترافية في الدعم الفني (Google IT Support)",
			"training-google-date": "ديسمبر 2025 – مستمر",
			"training-google-summary": "شهادة احترافية تغطي مهام الدعم الفني الأساسية بما في ذلك حل المشكلات وخدمة العملاء والشبكات وأنظمة التشغيل وإدارة النظم والأمن. (قيد الدراسة حالياً)",
			"training-ibm-name": "شهادة IBM الاحترافية لمطور البرمجيات Full Stack",
			"training-ibm-date": "ديسمبر 2025 – مستمر",
			"training-ibm-summary": "تدريب شامل على تطوير تطبيقات Full Stack والتطبيقات السحابية ومبادئ هندسة البرمجيات باستخدام أحدث الأطر والأدوات. (قيد الدراسة حالياً)",
			"certifications-title": "الشهادات",
			"cert-ibm-cloud": "مقدمة في الحوسبة السحابية",
			"cert-ibm-cloud-inst": "IBM",
			"cert-ibm-cloud-desc": "المفاهيم الأساسية للحوسبة السحابية، نماذج الخدمات، والبنية التحتية.",
			"cert-ibm-software": "مقدمة في هندسة البرمجيات",
			"cert-ibm-software-inst": "IBM",
			"cert-ibm-software-desc": "نظرة عامة على مبادئ هندسة البرمجيات، دورة حياة التطوير، ومنهجيات الأجايل.",
			"cert-udemy-python": "معسكر تدريبي شامل لبرمجة بايثون",
			"cert-udemy-python-inst": "Udemy",
			"cert-udemy-python-desc": "برمجة بايثون متعمقة تشمل الأتمتة، تحليل البيانات، وتطوير الويب.",
			"cert-iti-cyber": "تدريب الأمن السيبراني",
			"cert-iti-cyber-inst": "معهد تكنولوجيا المعلومات (ITI)",
			"cert-iti-cyber-desc": "تدريب عملي على أساسيات الأمن السيبراني، تحليل التهديدات، والحماية.",
			"cert-mahara-cloud": "الحوسبة السحابية والمحاكاة الافتراضية",
			"cert-mahara-cloud-inst": "مهارة تك",
			"cert-mahara-cloud-desc": "المفاهيم الأساسية لتقنيات المحاكاة الافتراضية ونماذج النشر السحابي.",
			"cert-mahara-db": "أساسيات قواعد البيانات",
			"cert-mahara-db-inst": "مهارة تك",
			"cert-mahara-db-desc": "مفاهيم قواعد البيانات العلائقية، لغة SQL، وأساسيات إدارة قواعد البيانات.",
			"cert-mahara-net": "أساسيات شبكات الحاسب",
			"cert-mahara-net-inst": "مهارة تك",
			"cert-mahara-net-desc": "أساسيات الشبكات بما في ذلك نموذج OSI، البروتوكولات، وأجهزة الشبكات.",
			"cert-mahara-hacking": "الاختراق الأخلاقي",
			"cert-mahara-hacking-inst": "مهارة تك",
			"cert-mahara-hacking-desc": "تقنيات تحديد الثغرات الأمنية ومعالجتها بطرق أخلاقية.",
			"cert-mahara-sec": "مقدمة في أمن الشبكات",
			"cert-mahara-sec-inst": "مهارة تك",
			"cert-mahara-sec-desc": "أساسيات تأمين البنية التحتية للشبكات وحماية البيانات.",
			"cert-excel-1": "مايكروسوفت إكسل I",
			"cert-excel-1-inst": "كورسيرا",
			"cert-excel-1-desc": "مهارات إكسل الأساسية، الصيغ، وتقنيات تصور البيانات.",
			"cert-excel-2": "مايكروسوفت إكسل II",
			"cert-excel-2-inst": "كورسيرا",
			"cert-excel-2-desc": "إدارة البيانات المتقدمة، الصيغ المعقدة، والأدوات التحليلية في إكسل.",
			"cert-google-net": "أساسيات شبكات الكمبيوتر",
			"cert-google-net-inst": "Google",
			"cert-google-net-desc": "أساسيات الشبكات، بما في ذلك نموذج TCP/IP، بروتوكولات الشبكات، والبنية التحتية.",
			"cert-google-support": "أساسيات الدعم الفني",
			"cert-google-support-inst": "Google",
			"cert-google-support-desc": "المفاهيم الأساسية للدعم الفني، بما في ذلك استكشاف الأخطاء وإصلاحها، خدمة العملاء، وإدارة النظم.",
			"volunteering-title": "الخبرة التطوعية",
			"vol-icpc-title": "المسابقة الدولية للبرمجة لطلاب الجامعات (ICPC) - الدورتان 46 و47",
			"vol-icpc-date": "أبريل 2024",
			"vol-acpc-title": "المسابقة البرمجية لطلاب الجامعات لأفريقيا والوطن العربي (ACPC)",
			"vol-acpc-date": "ديسمبر 2023 – ديسمبر 2025",
			"vol-ecpc-title": "المسابقة المصرية للبرمجة لطلاب الجامعات (ECPC)",
			"vol-ecpc-date": "أغسطس 2023 – أغسطس 2025",
			"vol-psed-title": "يوم الهندسة ببورسعيد (PSED)",
			"vol-psed-date": "أكتوبر 2023 – فبراير 2025",
			"vol-ieee-psu-title": "مجتمع IEEE الطلابي بجامعة بورسعيد (IEEE PSU SB)",
			"vol-ieee-psu-date": "فبراير 2023 – أكتوبر 2024",
			"vol-ieee-r8-title": "أسبوع ريادة الأعمال لإقليم IEEE R8",
			"vol-ieee-r8-date": "فبراير 2024",
			"vol-icpc-psu-title": "مجتمع ICPC الطلابي بجامعة بورسعيد",
			"vol-icpc-psu-date": "أكتوبر 2023 – يونيو 2024",
			"projects-title": "المشاريع",
			"project-snack-desc": "تطبيق محمول مدعوم بالذكاء الاصطناعي لتتبع النظام الغذائي، تم تطويره كـ مشروع تخرجي.",
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
			"footer-name": "محمود ايهاب",
			"rights-reserved": "جميع الحقوق محفوظة",
			"typed-items": "مهندس دعم فني,مهندس شبكات,محلل مشاكل تقنية"
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
			if (translations[lang][key] !== undefined) {
				element.textContent = translations[lang][key];
			}
		});

		// Update Typed.js with new language
		const selectTyped = document.querySelector('.typed');
		if (selectTyped && typeof Typed !== 'undefined') {
			// Destroy existing instance if it exists (defined in outer scope)
			if (typeof typedInstance !== 'undefined' && typedInstance) {
				typedInstance.destroy();
			}
			// Get new typed items from translations
			const typedItems = translations[lang]['typed-items'];
			if (typedItems) {
				const typed_strings = typedItems.split(',');
				typedInstance = new Typed('.typed', {
					strings: typed_strings,
					loop: true,
					typeSpeed: 100,
					backSpeed: 50,
					backDelay: 2000
				});
			}
		}

		// Trigger AOS refresh to handle layout changes
		if (typeof AOS !== 'undefined') {
			setTimeout(() => AOS.refresh(), 100);
		}
	}

})();
