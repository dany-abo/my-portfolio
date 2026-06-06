// ===================================
// Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Language Toggle
// ===================================
let currentLang = 'en'; // Default language is English

function toggleLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('langText');
    
    if (currentLang === 'en') {
        // Switch to Arabic
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.textContent = 'EN';
        currentLang = 'ar';
        translateToArabic();
    } else {
        // Switch to English
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.textContent = 'AR';
        currentLang = 'en';
        translateToEnglish();
    }
    
    // Save preference
    localStorage.setItem('language', currentLang);
}

// Translation functions
function translateToEnglish() {
    document.querySelectorAll('[data-en]').forEach(element => {
        const englishText = element.getAttribute('data-en');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = englishText;
        } else {
            element.innerHTML = englishText;
        }
    });
}

function translateToArabic() {
    document.querySelectorAll('[data-ar]').forEach(element => {
        const arabicText = element.getAttribute('data-ar');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = arabicText;
        } else {
            element.innerHTML = arabicText;
        }
    });
}

// Load saved language preference on page load
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }
});

// ===================================
// Project Filters
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// Project Modal
// ===================================
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

function openProjectModal(projectId) {
    // Project details data
    const projectDetails = {
        'project-1': {
            title: 'E-Commerce Platform',
            titleAr: 'منصة تجارة إلكترونية',
            category: 'Web Application',
            categoryAr: 'تطبيق ويب',
            description: 'A comprehensive e-commerce platform built with modern technologies, featuring a complete shopping experience from browsing products to secure checkout.',
            descriptionAr: 'منصة تجارة إلكترونية شاملة مبنية بتقنيات حديثة، تتميز بتجربة تسوق كاملة من تصفح المنتجات إلى الدفع الآمن.',
            role: 'Full Stack Developer - Designed and developed the entire front-end interface',
            roleAr: 'مطور Full Stack - صممت وطورت واجهة المستخدم بالكامل',
            duration: '3 months',
            durationAr: '3 أشهر',
            client: 'E-Commerce Startup',
            clientAr: 'شركة تجارة إلكترونية ناشئة',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            features: [
                'User authentication and authorization',
                'Product catalog with advanced filtering',
                'Shopping cart with real-time updates',
                'Secure payment integration with Stripe',
                'Admin dashboard for inventory management',
                'Responsive design for all devices'
            ],
            featuresAr: [
                'مصادقة وتفويض المستخدمين',
                'كتالوج منتجات مع تصفية متقدمة',
                'سلة تسوق مع تحديثات فورية',
                'تكامل دفع آمن مع Stripe',
                'لوحة تحكم للإدارة',
                'تصميم متجاوب لجميع الأجهزة'
            ],
            results: [
                'Increased conversion rate by 45%',
                'Reduced page load time by 60%',
                'Achieved 98% customer satisfaction',
                'Processed 1000+ orders in first month'
            ],
            resultsAr: [
                'زيادة معدل التحويل بنسبة 45%',
                'تقليل وقت تحميل الصفحة بنسبة 60%',
                'تحقيق رضا العملاء بنسبة 98%',
                'معالجة أكثر من 1000 طلب في الشهر الأول'
            ],
            liveLink: 'https://github.com/dany-abo',
            githubLink: 'https://github.com/dany-abo'
        },
        'project-2': {
            title: 'Task Management App',
            titleAr: 'تطبيق إدارة المهام',
            category: 'Web Application',
            categoryAr: 'تطبيق ويب',
            description: 'A productivity application for managing tasks and projects with real-time collaboration features.',
            descriptionAr: 'تطبيق إنتاجية لإدارة المهام والمشاريع مع ميزات التعاون الفوري.',
            role: 'Front End Developer',
            roleAr: 'مطور واجهات أمامية',
            duration: '2 months',
            durationAr: 'شهران',
            client: 'Personal Project',
            clientAr: 'مشروع شخصي',
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
            features: [
                'Drag and drop task management',
                'Real-time updates with Firebase',
                'Team collaboration features',
                'Task prioritization and deadlines',
                'Progress tracking and analytics'
            ],
            featuresAr: [
                'إدارة المهام بالسحب والإفلات',
                'تحديثات فورية مع Firebase',
                'ميزات التعاون الجماعي',
                'تحديد أولويات المهام والمواعيد',
                'تتبع التقدم والتحليلات'
            ],
            results: [
                '500+ active users',
                '95% task completion rate',
                '4.8/5 user rating',
                'Featured on Product Hunt'
            ],
            resultsAr: [
                'أكثر من 500 مستخدم نشط',
                'معدل إنجاز مهام 95%',
                'تقييم 4.8/5 من المستخدمين',
                'مميز على Product Hunt'
            ],
            liveLink: 'https://github.com/dany-abo',
            githubLink: 'https://github.com/dany-abo'
        },
        'project-3': {
            title: 'Creative Portfolio',
            titleAr: 'بورتفوليو إبداعي',
            category: 'Portfolio Website',
            categoryAr: 'موقع بورتفوليو',
            description: 'A modern portfolio website with smooth animations and interactive elements.',
            descriptionAr: 'موقع بورتفوليو حديث مع رسوم متحركة سلسة وعناصر تفاعلية.',
            role: 'Designer & Developer',
            roleAr: 'مصمم ومطور',
            duration: '1 month',
            durationAr: 'شهر واحد',
            client: 'Freelance Client',
            clientAr: 'عميل حر',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
            features: [
                'Smooth scroll animations',
                'Interactive project showcase',
                'Responsive design',
                'Contact form integration',
                'SEO optimized'
            ],
            featuresAr: [
                'رسوم متحركة سلسة للتمرير',
                'عرض تفاعلي للمشاريع',
                'تصميم متجاوب',
                'تكامل نموذج التواصل',
                'محسّن لمحركات البحث'
            ],
            results: [
                'Client received 10+ job offers',
                'PageSpeed score: 95/100',
                '100% mobile responsive',
                'Featured in design galleries'
            ],
            resultsAr: [
                'حصل العميل على أكثر من 10 عروض عمل',
                'نتيجة PageSpeed: 95/100',
                'متجاوب 100% على الموبايل',
                'مميز في معارض التصميم'
            ],
            liveLink: 'https://github.com/dany-abo',
            githubLink: 'https://github.com/dany-abo'
        },
        'project-4': {
            title: 'Weather Forecast App',
            titleAr: 'تطبيق توقعات الطقس',
            category: 'Web Application',
            categoryAr: 'تطبيق ويب',
            description: 'Real-time weather application with 7-day forecast and location-based updates.',
            descriptionAr: 'تطبيق طقس فوري مع توقعات 7 أيام وتحديثات حسب الموقع.',
            role: 'Front End Developer',
            roleAr: 'مطور واجهات أمامية',
            duration: '2 weeks',
            durationAr: 'أسبوعان',
            client: 'Personal Project',
            clientAr: 'مشروع شخصي',
            technologies: ['React', 'OpenWeather API', 'CSS3', 'Geolocation API'],
            features: [
                'Real-time weather data',
                '7-day forecast',
                'Location-based updates',
                'Multiple city search',
                'Weather alerts and notifications'
            ],
            featuresAr: [
                'بيانات طقس فورية',
                'توقعات 7 أيام',
                'تحديثات حسب الموقع',
                'بحث عن مدن متعددة',
                'تنبيهات وإشعارات الطقس'
            ],
            results: [
                '1000+ daily active users',
                'Sub-second load time',
                '99.9% API uptime',
                'Featured on GitHub'
            ],
            resultsAr: [
                'أكثر من 1000 مستخدم نشط يومياً',
                'وقت تحميل أقل من ثانية',
                'توفر API بنسبة 99.9%',
                'مميز على GitHub'
            ],
            liveLink: 'https://github.com/dany-abo',
            githubLink: 'https://github.com/dany-abo'
        }
    };
    
    const project = projectDetails[projectId];
    
    if (!project) return;
    
    const isArabic = currentLang === 'ar';
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${isArabic ? project.titleAr : project.title}</h2>
        <span class="project-category">${isArabic ? project.categoryAr : project.category}</span>
        
        <div style="margin: 20px 0;">
            <h3>${isArabic ? 'نظرة عامة' : 'Overview'}</h3>
            <p>${isArabic ? project.descriptionAr : project.description}</p>
        </div>
        
        <div style="margin: 20px 0;">
            <h3>${isArabic ? 'دوري في المشروع' : 'My Role'}</h3>
            <p>${isArabic ? project.roleAr : project.role}</p>
            <p><strong>${isArabic ? 'المدة:' : 'Duration:'}</strong> ${isArabic ? project.durationAr : project.duration} | <strong>${isArabic ? 'العميل:' : 'Client:'}</strong> ${isArabic ? project.clientAr : project.client}</p>
        </div>
        
        <div style="margin: 20px 0;">
            <h3>${isArabic ? 'التقنيات المستخدمة' : 'Technologies Used'}</h3>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin: 20px 0;">
            <h3>${isArabic ? 'الميزات الرئيسية' : 'Key Features'}</h3>
            <ul class="achievements">
                ${(isArabic ? project.featuresAr : project.features).map(feature => `<li><i class="fas fa-check-circle"></i>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin: 20px 0;">
            <h3>${isArabic ? 'النتائج والتأثير' : 'Results & Impact'}</h3>
            <ul class="achievements">
                ${(isArabic ? project.resultsAr : project.results).map(result => `<li><i class="fas fa-chart-line"></i>${result}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin: 20px 0; display: flex; gap: 15px;">
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> ${isArabic ? 'عرض المشروع' : 'View Project'}</a>` : ''}
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary"><i class="fab fa-github"></i> ${isArabic ? 'الكود المصدري' : 'Source Code'}</a>` : ''}
        </div>
    `;
    
    modal.classList.add('show');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // هنا يمكنك إضافة كود إرسال البريد الإلكتروني
    // مثال باستخدام EmailJS أو API خاص بك
    
    try {
        // Example: await sendEmail(formData);
        alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
        contactForm.reset();
    } catch (error) {
        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    }
});

// ===================================
// Skill Progress Animation
// ===================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ===================================
// Smooth Scroll for All Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Typing Effect (Optional Enhancement)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// const heroTitle = document.querySelector('.typing-text');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

// ===================================
// Initialize on Page Load
// ===================================
window.addEventListener('load', () => {
    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
});
