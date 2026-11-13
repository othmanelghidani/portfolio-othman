// ===== SCRIPT FUTURISTE - Portfolio Othman El Ghidani =====

// Configuration des particules
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Vérifier et charger l'image de profil
    checkProfileImage();

    // Charger les données initiales
    loadInitialData();
    initNavigation();
    initScrollEffects();
    initCounters();
    initThemeToggle();
    initModals();
    initContactForm();
    initBackToTop();
});

// Vérifier l'image de profil
function checkProfileImage() {
    const profileImg = document.getElementById('profile-image');
    if (profileImg) {
        // Vérifier si l'image existe
        const img = new Image();
        img.onload = function() {
        };
        img.onerror = function() {
            showFallbackImage(profileImg);
        };
        img.src = 'assets/images/profile.jpg';
    }
}

// Fallback pour l'image de profil
function showFallbackImage(imgElement) {
    imgElement.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 288 288"><rect width="288" height="288" fill="%231e293b"/><text x="144" y="140" font-family="Arial" font-size="60" fill="%2300f3ff" text-anchor="middle" font-weight="bold">OE</text><text x="144" y="180" font-family="Arial" font-size="20" fill="%23ffd700" text-anchor="middle">OTHELGH</text></svg>';
    imgElement.alt = "Othman El Ghidani - Initiales";
    imgElement.classList.add('fallback-avatar');
}

// Données initiales
const portfolioData = {
    competences: [
        { categorie: "Programmation", technologies: ["Python", "SQL", "Java", "Scala", "JavaScript", "PHP"], icon: "fas fa-code" },
        { categorie: "IA / Machine Learning", technologies: ["Machine Learning", "Deep Learning", "NLP", "LLM", "RAG", "Hugging Face", "OpenCV"], icon: "fas fa-brain" },
        { categorie: "Data / Big Data", technologies: ["Pandas", "NumPy", "Spark", "Hadoop/HDFS", "Hive", "Power BI"], icon: "fas fa-chart-bar" },
        { categorie: "Bases de données", technologies: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Oracle"], icon: "fas fa-database" },
        { categorie: "Backend & outils", technologies: ["FastAPI", "API REST", "SQLAlchemy", "Docker", "Git", "Linux", "Azure"], icon: "fas fa-cogs" }
    ],
    experiences: [
        {
            titre: "Stage Data & Intelligence Artificielle",
            entreprise: "Haut-Commissariat au Plan (HCP) — Rabat, Maroc",
            periode: "Juil. – août 2026",
            description: [
                "Conception d'un RAG hybride pour interroger des PDF et des données statistiques, avec réponses sourcées",
                "Développement d'une API FastAPI : BGE-M3, Qdrant, PostgreSQL/SQLAlchemy, reranking, Ollama/Qwen3 8B (FR/AR)",
                "Orchestrateur RAG / données structurées ; 66 tests automatisés réussis sur 66, contrôles Ruff et Mypy"
            ],
            technologies: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "Ollama", "BGE-M3"],
            type: "professionnelle"
        },
        {
            titre: "Stage Transformation Digitale",
            entreprise: "Agence de Développement du Digital (ADD) — Maroc",
            periode: "Juin – juil. 2025",
            description: [
                "Création d'une plateforme Scrum : backlog, user stories, sprints, Kanban, rétrospectives et tableau de bord"
            ],
            technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Chart.js"],
            type: "professionnelle"
        },
        {
            titre: "Stage Systèmes d'Information",
            entreprise: "MAROC INGENOV — Maroc",
            periode: "Juin – juil. 2024",
            description: [
                "Développement de fonctionnalités web PHP/MySQL",
                "Contribution à l'administration et à l'optimisation de bases de données relationnelles"
            ],
            technologies: ["PHP", "MySQL"],
            type: "professionnelle"
        }
    ],
    projets: [
        {
            titre: "Toxic Comment Classification",
            description: "Classification multi-label de commentaires toxiques (Kaggle Jigsaw) : TF-IDF + régression logistique, Naive Bayes et DistilBERT fine-tuné, ensemble pondéré — ROC-AUC moyen de 0,9904 en validation.",
            technologies: ["Python", "scikit-learn", "PyTorch", "Transformers"],
            lien: "https://github.com/othmanelghidani/toxic-comment-classification",
            statut: "complet"
        },
        {
            titre: "MedTriage AI",
            description: "Tri de radiographies thoraciques : un CNN détecte la pneumonie, un LLM local rédige un rapport structuré, validé par un humain puis exporté en PDF.",
            technologies: ["PyTorch", "Ollama", "CrewAI", "Streamlit"],
            lien: "https://github.com/othmanelghidani/medtriage-ai-multiagent",
            statut: "complet"
        },
        {
            titre: "HealthyWealthy",
            description: "Plateforme full-stack de repas sains avec chatbot : extraction des contraintes, recherche MongoDB, puis génération de recettes par LLM avec validation du format.",
            technologies: ["FastAPI", "MongoDB", "Transformers", "React"],
            lien: "https://github.com/othmanelghidani/HealthyWealthy",
            statut: "complet"
        },
        {
            titre: "FaceX",
            description: "Authentification par reconnaissance faciale avec espace de fichiers chiffrés par utilisateur (Fernet).",
            technologies: ["FastAPI", "face-api.js", "Cryptography"],
            lien: "https://github.com/othmanelghidani/faceid-project",
            statut: "complet"
        },
        {
            titre: "Gestion Université",
            description: "Application Spring Boot avec rôles (admin, enseignant, étudiant) et emploi du temps avec détection des conflits de salle, d'enseignant et de groupe.",
            technologies: ["Java", "Spring Boot", "Spring Security", "MySQL"],
            lien: "https://github.com/othmanelghidani/gestion_universite",
            statut: "complet"
        },
        {
            titre: "Barcode & QR Scanner",
            description: "Détection et décodage de QR codes et de codes-barres par vision par ordinateur classique (Sobel, morphologie, contours).",
            technologies: ["Python", "OpenCV", "Flask"],
            lien: "https://github.com/othmanelghidani/barcode-qr-scanner",
            statut: "complet"
        }
    ],
    formations: [
        {
            institution: "Télécom Nancy — Nancy, France",
            periode: "2026–2027",
            diplome: "5e année du cycle ingénieur — Big Data & Intelligence Artificielle",
            description: "Dernière année du cycle ingénieur, spécialisation Big Data et IA.",
            mention: "En cours"
        },
        {
            institution: "Université Internationale de Rabat — Maroc",
            periode: "2022–2027",
            diplome: "Cycle ingénieur — Big Data & Intelligence Artificielle",
            description: "Formation d'ingénieur, spécialité Big Data & Intelligence Artificielle.",
            mention: "En cours"
        }
    ],
    certificats: [
        { titre: "Data Science Essentials with Python", organisme: "Cisco" },
        { titre: "SQL & Relational Databases", organisme: "IBM" },
        { titre: "Introduction to AI", organisme: "Google" }
    ]
};

// Fonction pour charger les données
function loadInitialData() {
    // Charger depuis localStorage ou utiliser les données par défaut
    // Public site: always show the published data (local edits are ignored)
    const savedData = null;
    if (savedData) {
        Object.assign(portfolioData, JSON.parse(savedData));
    }
    
    // Rendre les données accessibles globalement
    window.portfolioData = portfolioData;
    
    // Initialiser toutes les sections
    initSkills();
    initExperiences();
    initProjects();
    initFormations();
    initCertificates();
}

// Navigation futuriste
function initNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link-futurist');
    
    // Menu mobile
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        this.innerHTML = mobileMenu.classList.contains('hidden') 
            ? '<i class="fas fa-bars text-xl"></i>' 
            : '<i class="fas fa-times text-xl"></i>';
    });
    
    // Navigation fluide
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Fermer le menu mobile
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                
                // Animation de défilement
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Effet visuel sur le lien
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Highlight de la section active
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Effets de défilement
function initScrollEffects() {
    // Effet de parallaxe
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Navbar background when scrolled (colors handled in CSS for both themes)
        const nav = document.querySelector('nav');
        nav.classList.toggle('nav-scrolled', scrolled > 100);
    });
}

// Compteurs animés
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const duration = 1500; // ms

    const animate = (counter) => {
        const target = +counter.getAttribute('data-target');
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            counter.innerText = Math.round(target * progress);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
        counters.forEach(c => { c.innerText = c.getAttribute('data-target'); });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Toggle du thème (clair/sombre)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (!themeToggle) return;

    const applyTheme = (theme, save) => {
        const light = theme === 'light';
        body.classList.toggle('light-mode', light);
        body.classList.toggle('dark-mode', !light);
        themeToggle.innerHTML = light
            ? '<i class="fas fa-sun text-yellow-500"></i>'
            : '<i class="fas fa-moon text-gold"></i>';
        themeToggle.setAttribute('aria-label', light ? 'Passer en mode sombre' : 'Passer en mode clair');
        initParticles(light);
        if (save) {
            try { localStorage.setItem('theme', theme); } catch (e) { /* storage unavailable */ }
        }
    };

    let savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) { /* storage unavailable */ }
    applyTheme(savedTheme, false);

    themeToggle.addEventListener('click', () => {
        applyTheme(body.classList.contains('light-mode') ? 'dark' : 'light', true);
    });
}

// Particles background, recreated with the colors of the current theme
function initParticles(light) {
    if (typeof particlesJS === 'undefined') return;
    if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
    }
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: light ? ["#0891b2", "#b45309", "#475569"] : ["#00f3ff", "#ffd700", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: light ? "#0891b2" : "#00f3ff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
        },
        retina_detect: true
    });
}

// Initialisation des compétences
function initSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = '';

    portfolioData.competences.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'card-futurist p-6 hover:scale-105 transition-transform duration-300';
        skillCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="skill-icon mr-4">
                    <i class="${skill.icon} text-cyan-400 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white">${skill.categorie}</h3>
            </div>
            
            ${skill.niveau !== undefined ? `            <div class="mb-6">
                <div class="flex justify-between mb-2">
                    <span class="text-gray-400">Maîtrise</span>
                    <span class="text-cyan-400 font-orbitron">${skill.niveau}%</span>
                </div>
                <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full progress-bar" 
                         style="width: ${skill.niveau}%"></div>
                </div>
            </div>` : ''}

            <div class="flex flex-wrap gap-2">
                ${skill.technologies.map(tech => 
                    `<span class="px-3 py-1 bg-gray-800/50 text-cyan-300 rounded-full text-sm border border-cyan-500/20">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="mt-6 pt-4 border-t border-gray-800 flex justify-between">
                <button onclick="editSkill(${index})" class="text-cyan-400 hover:text-cyan-300 text-sm">
                    <i class="fas fa-edit mr-1"></i>Modifier
                </button>
                <button onclick="deleteSkill(${index})" class="text-red-400 hover:text-red-300 text-sm">
                    <i class="fas fa-trash mr-1"></i>Supprimer
                </button>
            </div>
        `;
        container.appendChild(skillCard);
    });
}

// Initialisation des expériences
function initExperiences() {
    const container = document.getElementById('experiences-container');
    if (!container) return;

    container.innerHTML = '';

    portfolioData.experiences.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'timeline-item mb-12';
        expElement.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="card-futurist p-6 ml-0 md:ml-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-12 md:w-5/12' : 'md:w-5/12'}">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <span class="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm mb-2 inline-block">
                            ${exp.type === 'professionnelle' ? '💼 Professionnel' : '🎓 Académique'}
                        </span>
                        <h3 class="text-xl font-bold text-white">${exp.titre}</h3>
                        <div class="text-cyan-300 font-medium mt-1">${exp.entreprise}</div>
                    </div>
                    <span class="px-3 py-1 bg-gray-800 text-gold rounded-full font-orbitron">${exp.periode}</span>
                </div>
                
                <ul class="space-y-3 mb-6">
                    ${exp.description.map(item => `
                        <li class="flex items-start">
                            <i class="fas fa-chevron-right text-cyan-400 mt-1 mr-3 text-xs"></i>
                            <span class="text-gray-300">${item}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${exp.technologies.map(tech => 
                        `<span class="px-3 py-1 bg-gray-800/50 text-gold rounded-full text-sm">${tech}</span>`
                    ).join('')}
                </div>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-800">
                    <div class="text-gray-400 text-sm">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        Durée: ${exp.periode}
                    </div>
                    <div class="flex space-x-4">
                        <button onclick="editExperience(${index})" class="text-cyan-400 hover:text-cyan-300 text-sm">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteExperience(${index})" class="text-red-400 hover:text-red-300 text-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(expElement);
    });
}

// Initialisation des projets
function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    portfolioData.projets.forEach((projet, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card-futurist overflow-hidden group hover:scale-105 transition-all duration-300';
        projectCard.innerHTML = `
            <div class="relative h-48 bg-gradient-to-br from-cyan-900/20 to-gray-900 overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-project-diagram text-6xl text-cyan-400/30"></i>
                </div>
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 ${projet.statut === 'complet' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'} rounded-full text-xs">
                        ${projet.statut === 'complet' ? '✅ Complet' : '🔄 En cours'}
                    </span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href="${projet.lien}" target="_blank" rel="noopener" class="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors">
                        <i class="fas fa-external-link-alt mr-2"></i>Voir le projet
                    </a>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-3">${projet.titre}</h3>
                <p class="text-gray-400 mb-6">${projet.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${projet.technologies.map(tech => 
                        `<span class="px-3 py-1 bg-gray-800/50 text-cyan-300 rounded-full text-sm">${tech}</span>`
                    ).join('')}
                </div>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-800">
                    <div class="text-gray-400 text-sm">
                        <i class="fas fa-code-branch mr-2"></i>
                        Projet ${projet.statut === 'complet' ? 'publié sur GitHub' : 'en développement'}
                    </div>
                    <a href="${projet.lien}" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"><i class="fab fa-github mr-1"></i>Code source</a>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Initialisation des formations
function initFormations() {
    const container = document.getElementById('formations-container');
    if (!container) return;

    container.innerHTML = '';

    portfolioData.formations.forEach((formation, index) => {
        const formationElement = document.createElement('div');
        formationElement.className = 'card-futurist p-6';
        formationElement.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold text-white">${formation.diplome}</h3>
                    <div class="text-cyan-300 font-medium mt-1">${formation.institution}</div>
                </div>
                <span class="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full font-orbitron">${formation.periode}</span>
            </div>
            
            <p class="text-gray-400 mb-6">${formation.description}</p>
            
            <div class="flex justify-between items-center pt-4 border-t border-gray-800">
                <div class="flex items-center">
                    <i class="fas fa-award text-gold mr-2"></i>
                    <span class="text-gold font-medium">${formation.mention}</span>
                </div>
                <div class="flex space-x-4">
                    <button onclick="editFormation(${index})" class="text-cyan-400 hover:text-cyan-300 text-sm">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteFormation(${index})" class="text-red-400 hover:text-red-300 text-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(formationElement);
    });
}

// Initialisation des certificats
function initCertificates() {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    container.innerHTML = '';

    portfolioData.certificats.forEach((cert, index) => {
        const certElement = document.createElement('div');
        certElement.className = 'card-futurist p-6 hover:border-cyan-500/30 transition-all duration-300';
        certElement.innerHTML = `
            <div class="flex items-start">
                <div class="mr-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-cyan-900/30 to-cyan-500/10 rounded-lg flex items-center justify-center">
                        <i class="fas fa-certificate text-cyan-400 text-xl"></i>
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-white mb-1">${cert.titre}</h3>
                    <div class="text-cyan-300 mb-2">${cert.organisme}</div>
                    ${cert.date ? `<div class="flex items-center text-gray-400 text-sm"><i class="fas fa-calendar-alt mr-2"></i><span>Émis: ${cert.date}</span></div>` : ''}
                </div>
            </div>
            
            <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                ${cert.lien && cert.lien !== '#' ? `<a href="${cert.lien}" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300 text-sm flex items-center">
                    <i class="fas fa-external-link-alt mr-2"></i>
                    Voir le certificat
                </a>` : '<span></span>'}
                <div class="flex space-x-4">
                    <button onclick="editCertificate(${index})" class="text-cyan-400 hover:text-cyan-300">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteCertificate(${index})" class="text-red-400 hover:text-red-300">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(certElement);
    });
}

// Initialisation des modals
function initModals() {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('generic-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalClose = document.getElementById('modal-close');
    
    // Boutons pour ouvrir les modals
    const buttons = {
        skill: document.getElementById('add-skill-btn'),
        experience: document.getElementById('add-experience-btn'),
        project: document.getElementById('add-project-btn'),
        formation: document.getElementById('add-formation-btn'),
        certificate: document.getElementById('add-certificate-btn')
    };
    
    // Fonction pour ouvrir un modal
    function openModal(type, data = null, index = null) {
        const modalData = {
            type: type,
            data: data,
            index: index
        };
        
        // Générer le contenu du modal selon le type
        modalContent.innerHTML = generateModalContent(modalData);
        
        // Afficher le modal
        backdrop.classList.remove('hidden');
        modal.classList.remove('hidden');
        
        // Initialiser le formulaire dans le modal
        initModalForm(modalData);
    }
    
    // Fonction pour fermer le modal
    function closeModal() {
        backdrop.classList.add('hidden');
        modal.classList.add('hidden');
    }
    
    // Événements
    buttons.skill?.addEventListener('click', () => openModal('skill'));
    buttons.experience?.addEventListener('click', () => openModal('experience'));
    buttons.project?.addEventListener('click', () => openModal('project'));
    buttons.formation?.addEventListener('click', () => openModal('formation'));
    buttons.certificate?.addEventListener('click', () => openModal('certificate'));
    
    modalClose.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Empêcher la fermeture en cliquant dans le modal
    modal.addEventListener('click', (e) => e.stopPropagation());
}

// Générer le contenu du modal
function generateModalContent(modalData) {
    const { type, data, index } = modalData;
    const isEdit = data !== null;
    
    switch(type) {
        case 'skill':
            return `
                <form id="skill-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 mb-2">Catégorie *</label>
                        <input type="text" id="skill-category" value="${data?.categorie || ''}" 
                               class="input-futurist" placeholder="Ex: Développement Web" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Niveau (%) *</label>
                        <input type="range" id="skill-level" min="0" max="100" value="${data?.niveau || 50}" 
                               class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer">
                        <div class="flex justify-between text-sm text-gray-400 mt-2">
                            <span>0%</span>
                            <span id="level-value">${data?.niveau || 50}%</span>
                            <span>100%</span>
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Icône FontAwesome</label>
                        <input type="text" id="skill-icon" value="${data?.icon || 'fas fa-code'}" 
                               class="input-futurist" placeholder="fas fa-code">
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Technologies (séparées par des virgules) *</label>
                        <textarea id="skill-techs" class="input-futurist" rows="3" 
                                  placeholder="HTML, CSS, JavaScript, ...">${data?.technologies?.join(', ') || ''}</textarea>
                    </div>
                    <div class="flex justify-end space-x-4 pt-6">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800">
                            Annuler
                        </button>
                        <button type="submit" class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                            ${isEdit ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            `;
            
        case 'experience':
            return `
                <form id="experience-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 mb-2">Titre *</label>
                        <input type="text" id="exp-title" value="${data?.titre || ''}" 
                               class="input-futurist" placeholder="Ex: Développeur Full Stack" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Entreprise *</label>
                        <input type="text" id="exp-company" value="${data?.entreprise || ''}" 
                               class="input-futurist" placeholder="Nom de l'entreprise" required>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 mb-2">Date de début *</label>
                            <input type="month" id="exp-start" value="${getDatePart(data?.periode, 'start')}" 
                                   class="input-futurist" required>
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-2">Date de fin</label>
                            <input type="month" id="exp-end" value="${getDatePart(data?.periode, 'end')}" 
                                   class="input-futurist" placeholder="En cours">
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Type</label>
                        <select id="exp-type" class="input-futurist">
                            <option value="professionnelle" ${data?.type === 'professionnelle' ? 'selected' : ''}>Professionnelle</option>
                            <option value="academique" ${data?.type === 'academique' ? 'selected' : ''}>Académique</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Description (une ligne par point) *</label>
                        <textarea id="exp-description" class="input-futurist" rows="4" 
                                  placeholder="• Développement d'applications web&#10;• Gestion de bases de données">${data?.description?.join('\n') || ''}</textarea>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Technologies utilisées (séparées par des virgules)</label>
                        <input type="text" id="exp-techs" value="${data?.technologies?.join(', ') || ''}" 
                               class="input-futurist" placeholder="PHP, MySQL, JavaScript, ...">
                    </div>
                    <div class="flex justify-end space-x-4 pt-6">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800">
                            Annuler
                        </button>
                        <button type="submit" class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                            ${isEdit ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            `;
            
        case 'project':
            return `
                <form id="project-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 mb-2">Titre du projet *</label>
                        <input type="text" id="project-title" value="${data?.titre || ''}" 
                               class="input-futurist" placeholder="Ex: Système de Gestion" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Description *</label>
                        <textarea id="project-description" class="input-futurist" rows="4" 
                                  placeholder="Description détaillée du projet..." required>${data?.description || ''}</textarea>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Statut</label>
                        <select id="project-status" class="input-futurist">
                            <option value="complet" ${data?.statut === 'complet' ? 'selected' : ''}>Complet</option>
                            <option value="en cours" ${data?.statut === 'en cours' ? 'selected' : ''}>En cours</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Technologies (séparées par des virgules) *</label>
                        <input type="text" id="project-techs" value="${data?.technologies?.join(', ') || ''}" 
                               class="input-futurist" placeholder="PHP, MySQL, JavaScript, ..." required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Lien (optionnel)</label>
                        <input type="url" id="project-link" value="${data?.lien || ''}" 
                               class="input-futurist" placeholder="https://example.com">
                    </div>
                    <div class="flex justify-end space-x-4 pt-6">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800">
                            Annuler
                        </button>
                        <button type="submit" class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                            ${isEdit ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            `;
            
        case 'formation':
            return `
                <form id="formation-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 mb-2">Institution *</label>
                        <input type="text" id="formation-institution" value="${data?.institution || ''}" 
                               class="input-futurist" placeholder="Ex: Université Internationale de Rabat" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Diplôme *</label>
                        <input type="text" id="formation-degree" value="${data?.diplome || ''}" 
                               class="input-futurist" placeholder="Ex: Ingénierie Informatique" required>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 mb-2">Date de début</label>
                            <input type="month" id="formation-start" value="${getDatePart(data?.periode, 'start')}" 
                                   class="input-futurist">
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-2">Date de fin</label>
                            <input type="month" id="formation-end" value="${getDatePart(data?.periode, 'end')}" 
                                   class="input-futurist" placeholder="En cours">
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Description</label>
                        <textarea id="formation-description" class="input-futurist" rows="3" 
                                  placeholder="Description de la formation...">${data?.description || ''}</textarea>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Mention</label>
                        <input type="text" id="formation-mention" value="${data?.mention || ''}" 
                               class="input-futurist" placeholder="Ex: Très Bien">
                    </div>
                    <div class="flex justify-end space-x-4 pt-6">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800">
                            Annuler
                        </button>
                        <button type="submit" class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                            ${isEdit ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            `;
            
        case 'certificate':
            return `
                <form id="certificate-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 mb-2">Titre du certificat *</label>
                        <input type="text" id="certificate-title" value="${data?.titre || ''}" 
                               class="input-futurist" placeholder="Ex: SQL and Relational Databases" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Organisme émetteur *</label>
                        <input type="text" id="certificate-issuer" value="${data?.organisme || ''}" 
                               class="input-futurist" placeholder="Ex: IBM" required>
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Date d'obtention</label>
                        <input type="month" id="certificate-date" value="${data?.date || ''}" 
                               class="input-futurist">
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Code du certificat</label>
                        <input type="text" id="certificate-code" value="${data?.code || ''}" 
                               class="input-futurist" placeholder="Ex: IBM-SQL-101">
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-2">Lien (optionnel)</label>
                        <input type="url" id="certificate-link" value="${data?.lien || ''}" 
                               class="input-futurist" placeholder="https://example.com/certificate">
                    </div>
                    <div class="flex justify-end space-x-4 pt-6">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800">
                            Annuler
                        </button>
                        <button type="submit" class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                            ${isEdit ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            `;
        
        default:
            return '<p>Modal non configuré</p>';
    }
}

// Initialiser le formulaire dans le modal
function initModalForm(modalData) {
    const { type, data, index } = modalData;
    const form = document.getElementById(`${type}-form`);
    
    if (!form) return;
    
    // Mettre à jour la valeur du range pour les compétences
    if (type === 'skill') {
        const levelInput = document.getElementById('skill-level');
        const levelValue = document.getElementById('level-value');
        
        if (levelInput && levelValue) {
            levelInput.addEventListener('input', function() {
                levelValue.textContent = `${this.value}%`;
            });
        }
    }
    
    // Gérer la soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveModalData(type, index);
    });
}

// Sauvegarder les données du modal
function saveModalData(type, index) {
    const form = document.getElementById(`${type}-form`);
    let data = {};
    
    switch(type) {
        case 'skill':
            data = {
                categorie: document.getElementById('skill-category').value,
                niveau: parseInt(document.getElementById('skill-level').value),
                icon: document.getElementById('skill-icon').value,
                technologies: document.getElementById('skill-techs').value.split(',').map(t => t.trim())
            };
            break;
            
        case 'experience':
            const start = document.getElementById('exp-start').value;
            const end = document.getElementById('exp-end').value;
            const periode = end ? `${formatMonthYear(start)} - ${formatMonthYear(end)}` : `${formatMonthYear(start)} - Présent`;
            
            data = {
                titre: document.getElementById('exp-title').value,
                entreprise: document.getElementById('exp-company').value,
                periode: periode,
                type: document.getElementById('exp-type').value,
                description: document.getElementById('exp-description').value.split('\n').filter(d => d.trim()),
                technologies: document.getElementById('exp-techs').value.split(',').map(t => t.trim())
            };
            break;
            
        case 'project':
            data = {
                titre: document.getElementById('project-title').value,
                description: document.getElementById('project-description').value,
                technologies: document.getElementById('project-techs').value.split(',').map(t => t.trim()),
                statut: document.getElementById('project-status').value,
                lien: document.getElementById('project-link').value || '#'
            };
            break;
            
        case 'formation':
            const formationStart = document.getElementById('formation-start').value;
            const formationEnd = document.getElementById('formation-end').value;
            const formationPeriode = formationEnd ? 
                `${formatMonthYear(formationStart)} - ${formatMonthYear(formationEnd)}` : 
                `${formatMonthYear(formationStart)} - Présent`;
            
            data = {
                institution: document.getElementById('formation-institution').value,
                diplome: document.getElementById('formation-degree').value,
                periode: formationPeriode,
                description: document.getElementById('formation-description').value,
                mention: document.getElementById('formation-mention').value
            };
            break;
            
        case 'certificate':
            data = {
                titre: document.getElementById('certificate-title').value,
                organisme: document.getElementById('certificate-issuer').value,
                date: document.getElementById('certificate-date').value,
                code: document.getElementById('certificate-code').value,
                lien: document.getElementById('certificate-link').value || '#'
            };
            break;
    }
    
    // Ajouter ou modifier les données
    if (index !== null && index >= 0) {
        // Modification
        const key = type === 'skill' ? 'competences' : 
                   type === 'experience' ? 'experiences' :
                   type === 'project' ? 'projets' :
                   type === 'formation' ? 'formations' : 'certificats';
        portfolioData[key][index] = data;
    } else {
        // Ajout
        const key = type === 'skill' ? 'competences' : 
                   type === 'experience' ? 'experiences' :
                   type === 'project' ? 'projets' :
                   type === 'formation' ? 'formations' : 'certificats';
        portfolioData[key].push(data);
    }
    
    // Sauvegarder et mettre à jour
    saveData();
    updateSection(type);
    closeModal();
    showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} ${index !== null ? 'modifié' : 'ajouté'} avec succès!`, 'success');
}

// Fonctions utilitaires
function getDatePart(period, part) {
    if (!period) return '';
    const parts = period.split(' - ');
    if (parts.length === 2) {
        return part === 'start' ? parts[0] : parts[1];
    }
    return '';
}

function formatMonthYear(dateStr) {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month)-1]} ${year}`;
}

function closeModal() {
    document.getElementById('modal-backdrop').classList.add('hidden');
    document.getElementById('generic-modal').classList.add('hidden');
}

function updateSection(type) {
    switch(type) {
        case 'skill': initSkills(); break;
        case 'experience': initExperiences(); break;
        case 'project': initProjects(); break;
        case 'formation': initFormations(); break;
        case 'certificate': initCertificates(); break;
    }
}

function saveData() {
    localStorage.setItem('portfolioDataFuturist', JSON.stringify(portfolioData));
}

function showNotification(message, type = 'info') {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `fixed top-6 right-6 px-6 py-4 rounded-lg shadow-xl z-50 transform transition-all duration-500 translate-x-full ${
        type === 'success' ? 'bg-gradient-to-r from-cyan-900/90 to-cyan-800/90 border border-cyan-500/30' :
        type === 'error' ? 'bg-gradient-to-r from-red-900/90 to-red-800/90 border border-red-500/30' :
        'bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-500/30'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} 
                ${type === 'success' ? 'text-cyan-400' : type === 'error' ? 'text-red-400' : 'text-gray-400'} mr-3"></i>
            <span class="text-white">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 10);
    
    // Supprimer après 5 secondes
    setTimeout(() => {
        notification.classList.remove('translate-x-0');
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

// Initialisation du formulaire de contact
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Open the visitor's email client with the message pre-filled
        const subject = encodeURIComponent('Contact portfolio — ' + name);
        const body = encodeURIComponent(message + ' — ' + name + ' (' + email + ')');
        window.location.href = 'mailto:othmanelghidani24@gmail.com?subject=' + subject + '&body=' + body;
    });
}

// Initialisation du bouton retour en haut
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Fonctions d'édition et suppression
function editSkill(index) {
    openModal('skill', portfolioData.competences[index], index);
}

function deleteSkill(index) {
    if (confirm('Supprimer cette compétence?')) {
        portfolioData.competences.splice(index, 1);
        saveData();
        initSkills();
        showNotification('Compétence supprimée', 'info');
    }
}

function editExperience(index) {
    openModal('experience', portfolioData.experiences[index], index);
}

function deleteExperience(index) {
    if (confirm('Supprimer cette expérience?')) {
        portfolioData.experiences.splice(index, 1);
        saveData();
        initExperiences();
        showNotification('Expérience supprimée', 'info');
    }
}

function editProject(index) {
    openModal('project', portfolioData.projets[index], index);
}

function deleteProject(index) {
    if (confirm('Supprimer ce projet?')) {
        portfolioData.projets.splice(index, 1);
        saveData();
        initProjects();
        showNotification('Projet supprimé', 'info');
    }
}

function editFormation(index) {
    openModal('formation', portfolioData.formations[index], index);
}

function deleteFormation(index) {
    if (confirm('Supprimer cette formation?')) {
        portfolioData.formations.splice(index, 1);
        saveData();
        initFormations();
        showNotification('Formation supprimée', 'info');
    }
}

function editCertificate(index) {
    openModal('certificate', portfolioData.certificats[index], index);
}

function deleteCertificate(index) {
    if (confirm('Supprimer ce certificat?')) {
        portfolioData.certificats.splice(index, 1);
        saveData();
        initCertificates();
        showNotification('Certificat supprimé', 'info');
    }
}

// Exposer les fonctions globales
window.showFallbackImage = showFallbackImage;
window.editSkill = editSkill;
window.deleteSkill = deleteSkill;
window.editExperience = editExperience;
window.deleteExperience = deleteExperience;
window.editProject = editProject;
window.deleteProject = deleteProject;
window.editFormation = editFormation;
window.deleteFormation = deleteFormation;
window.editCertificate = editCertificate;
window.deleteCertificate = deleteCertificate;
window.closeModal = closeModal;