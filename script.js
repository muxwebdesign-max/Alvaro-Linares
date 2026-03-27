/**
 * Álvaro Linares Interiores
 * Client-Side Interactivity logic (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. TRANSLATION DICTIONARY (i18n)
    ========================================== */
    const translations = {
        es: {
            hero_title: "ÁLVARO LINARES",
            scroll_text: "Descubrir",
            portfolio_title: "Obras y Proyectos",
            location_title: "Ubicación",
            schedule_title: "Horario",
            mon_thu: "Lunes a Jueves",
            friday: "Viernes",
            weekend: "Sábado y Domingo",
            closed: "Cerrado",
            contact_title: "Contacto",
            contact_name: "Nombre",
            contact_email: "Email",
            contact_message: "Mensaje",
            legal_checkbox: "Acepto los términos legales y la política de privacidad",
            legal_error: "Debe aceptar los términos legales para continuar.",
            submit_btn: "Enviar",
            rights_reserved: "Todos los derechos reservados.",
            legal_notice: "Aviso Legal",
            privacy_policy: "Política de Privacidad",
            cookie_text: "Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.",
            cookie_accept: "Aceptar todas",
            cookie_reject: "Rechazar / Configurar"
        },
        en: {
            hero_title: "ÁLVARO LINARES",
            scroll_text: "Discover",
            portfolio_title: "Works and Projects",
            location_title: "Location",
            schedule_title: "Schedule",
            mon_thu: "Monday to Thursday",
            friday: "Friday",
            weekend: "Saturday and Sunday",
            closed: "Closed",
            contact_title: "Contact",
            contact_name: "Name",
            contact_email: "Email",
            contact_message: "Message",
            legal_checkbox: "I accept the legal terms and privacy policy",
            legal_error: "You must accept the legal terms to continue.",
            submit_btn: "Send",
            rights_reserved: "All rights reserved.",
            legal_notice: "Legal Notice",
            privacy_policy: "Privacy Policy",
            cookie_text: "We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analyzing your browsing habits.",
            cookie_accept: "Accept all",
            cookie_reject: "Reject / Configure"
        },
        de: {
            hero_title: "ÁLVARO LINARES",
            scroll_text: "Entdecken",
            portfolio_title: "Werke und Projekte",
            location_title: "Standort",
            schedule_title: "Öffnungszeiten",
            mon_thu: "Montag bis Donnerstag",
            friday: "Freitag",
            weekend: "Samstag und Sonntag",
            closed: "Geschlossen",
            contact_title: "Kontakt",
            contact_name: "Name",
            contact_email: "E-Mail",
            contact_message: "Nachricht",
            legal_checkbox: "Ich akzeptiere die rechtlichen Bedingungen und die Datenschutzrichtlinie",
            legal_error: "Sie müssen die rechtlichen Bedingungen akzeptieren, um fortzufahren.",
            submit_btn: "Senden",
            rights_reserved: "Alle Rechte vorbehalten.",
            legal_notice: "Impressum",
            privacy_policy: "Datenschutzrichtlinie",
            cookie_text: "Wir verwenden eigene und Cookies von Drittanbietern, um unsere Dienste zu verbessern und Ihnen Werbung im Zusammenhang mit Ihren Präferenzen anzuzeigen, indem wir Ihre Surfgewohnheiten analysieren.",
            cookie_accept: "Alle akzeptieren",
            cookie_reject: "Ablehnen / Konfigurieren"
        },
        fr: {
            hero_title: "ÁLVARO LINARES",
            scroll_text: "Découvrir",
            portfolio_title: "Œuvres et Projets",
            location_title: "Emplacement",
            schedule_title: "Horaires",
            mon_thu: "Du Lundi au Jeudi",
            friday: "Vendredi",
            weekend: "Samedi et Dimanche",
            closed: "Fermé",
            contact_title: "Contact",
            contact_name: "Nom",
            contact_email: "E-mail",
            contact_message: "Message",
            legal_checkbox: "J'accepte les conditions légales et la politique de confidentialité",
            legal_error: "Vous devez accepter les conditions légales pour continuer.",
            submit_btn: "Envoyer",
            rights_reserved: "Tous droits réservés.",
            legal_notice: "Mentions Légales",
            privacy_policy: "Politique de Confidentialité",
            cookie_text: "Nous utilisons des cookies propres et tiers pour améliorer nos services et vous montrer des publicités liées à vos préférences en analysant vos habitudes de navigation.",
            cookie_accept: "Tout accepter",
            cookie_reject: "Refuser / Configurer"
        },
        zh: {
            hero_title: "ÁLVARO LINARES",
            scroll_text: "发现",
            portfolio_title: "作品与项目",
            location_title: "位置",
            schedule_title: "营业时间",
            mon_thu: "周一至周四",
            friday: "星期五",
            weekend: "周六和周日",
            closed: "关闭",
            contact_title: "联系",
            contact_name: "姓名",
            contact_email: "电子邮件",
            contact_message: "信息",
            legal_checkbox: "我接受法律条款和隐私政策",
            legal_error: "您必须接受法律条款才能继续。",
            submit_btn: "发送",
            rights_reserved: "版权所有。",
            legal_notice: "法律声明",
            privacy_policy: "隐私政策",
            cookie_text: "我们使用我们自己和第三方的 cookie 来改善我们的服务，并通过分析您的浏览习惯向您展示与您的偏好相关的广告。",
            cookie_accept: "全部接受",
            cookie_reject: "拒绝 / 配置"
        }
    };

    /* ==========================================
       2. LANGUAGE SELECTOR LOGIC
    ========================================== */
    const langBtn = document.getElementById('langBtn');
    const langOptions = document.querySelectorAll('.lang-option');
    let currentLang = 'es';

    function setLanguage(langCode) {
        if (!translations[langCode] || langCode === currentLang) return;
        
        currentLang = langCode;
        langBtn.textContent = langCode.toUpperCase();
        document.documentElement.lang = langCode;

        // Apply translations with a smooth fade effect
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            // Translate explicit data-i18n tags
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[langCode][key]) {
                    element.textContent = translations[langCode][key];
                }
            });

            // Translate placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (translations[langCode][key]) {
                    element.placeholder = translations[langCode][key];
                }
            });

            // Bring opacity back up
            document.body.style.opacity = '1';
        }, 200); // 0.2s fade-out time
    }

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const langCode = e.target.getAttribute('data-lang');
            setLanguage(langCode);
            // Optionally close the dropdown here if needed
        });
    });

    /* ==========================================
       3. HEADER & HERO SCROLL OBSERVERS
    ========================================== */
    const header = document.getElementById('mainHeader');
    const heroSection = document.getElementById('heroSection');
    
    // Header Glassmorphism Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('transparent');
            header.classList.add('scrolled');
        } else {
            header.classList.add('transparent');
            header.classList.remove('scrolled');
        }
    });

    // Hero Fade-Out Effect with Intersection Observer
    const heroVideo = heroSection.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.volume = 0;
    }

    const heroOptions = {
        root: null,
        threshold: buildThresholdList()
    };

    function buildThresholdList() {
        let thresholds = [];
        let steps = 20;
        for (let i = 1.0; i <= steps; i++) {
            thresholds.push(i / steps);
        }
        thresholds.push(0);
        return thresholds;
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Ratio is 1 when fully visible, 0 when out spanning viewport
            // We want opacity 1 when ratio is ~1, and opacity ~0 when ratio goes below 0.3
            const ratio = entry.intersectionRatio;
            let opacity = ratio > 0.5 ? 1 : ratio * 2;
            heroSection.style.opacity = opacity;
        });
    }, heroOptions);

    heroObserver.observe(heroSection);

    /* ==========================================
       4. FORM VALIDATION
    ========================================== */
    const contactForm = document.getElementById('contactForm');
    const legalCheckbox = document.getElementById('legalCheckbox');
    const legalError = document.getElementById('legalError');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Strict legal validation
        if (!legalCheckbox.checked) {
            legalError.style.display = 'block';
            return;
        }

        legalError.style.display = 'none';

        // Fake Submit Action
        const btn = contactForm.querySelector('.submit-btn');
        const origText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            btn.textContent = 'Enviado';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = '#fff';
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = origText;
                btn.style.backgroundColor = '';
                btn.style.opacity = '1';
                btn.style.color = '';
            }, 3000);
        }, 1200);
    });

    legalCheckbox.addEventListener('change', () => {
        if (legalCheckbox.checked) {
            legalError.style.display = 'none';
        }
    });

    /* ==========================================
       5. COOKIE BANNER LOGIC
    ========================================== */
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const rejectCookiesBtn = document.getElementById('rejectCookies');

    // Check if user already acted
    // using session storage for dev environment testing resets, use localStorage in prod
    const hasConsented = localStorage.getItem('cookies_consent');

    if (!hasConsented) {
        // Slight delay to animate banner in gracefully
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    function hideCookieBanner(status) {
        localStorage.setItem('cookies_consent', status);
        cookieBanner.style.opacity = '0';
        cookieBanner.style.transform = 'translateY(20px)';
        setTimeout(() => {
            cookieBanner.style.visibility = 'hidden';
            cookieBanner.classList.remove('show');
        }, 600); // Wait for transition
    }

    acceptCookiesBtn.addEventListener('click', () => hideCookieBanner('accepted'));
    rejectCookiesBtn.addEventListener('click', () => hideCookieBanner('rejected'));

    /* ==========================================
       6. YEAR UPDATER
    ========================================== */
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
