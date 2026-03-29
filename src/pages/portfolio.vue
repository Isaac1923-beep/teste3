<template>
<div class="min-h-screen bg-black text-white">

    <!-- Side Menu -->
    <div class="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div class="flex flex-col gap-4">
        <a v-for="item in menuItems" :key="item.name" :href="item.href"
          class="group relative flex items-center" :title="item.name">
          <div class="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700 hover:border-white hover:bg-zinc-800 transition-all duration-300 text-base">
            {{ item.icon }}
          </div>
          <span class="absolute right-14 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>

    <!-- Navigation -->
    <nav :class="['fixed top-0 w-full z-50 transition-all duration-300', scrolled ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="text-xl font-bold tracking-widest uppercase text-white">
            ABDOU ISAAC
          </div>
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navItems" :key="item"
              :href="`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`"
              class="text-zinc-400 hover:text-white transition-colors duration-200 text-sm tracking-wide uppercase">
              {{ item }}
            </a>
          </div>
          <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="md:hidden bg-black border-t border-zinc-800">
        <div class="px-4 py-3 space-y-2">
          <a v-for="item in navItems" :key="item"
            :href="`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`"
            class="block py-2 text-zinc-400 hover:text-white text-sm uppercase tracking-wide"
            @click="isMenuOpen = false">
            {{ item }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;"></div>
      <div class="text-center z-10 px-4">
        <p class="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">Portfolio</p>
        <h1 class="text-6xl md:text-9xl font-black mb-6 tracking-tight animate-fade-in text-white">
          ABDOU<br/>ISAAC
        </h1>
        <div class="w-24 h-px bg-white mx-auto mb-6"></div>
        <p class="text-zinc-400 text-lg md:text-xl mb-2 animate-fade-in-delay">
          Étudiant en BTS SIO — Option SLAM
        </p>
        <p class="text-zinc-600 text-sm mb-10 animate-fade-in-delay-2">
          Développeur passionné · Solutions Logicielles et Applications Métier
        </p>
        <a href="#projets"
          class="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 animate-fade-in-delay-3">
          Voir mes projets
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="a-propos" class="py-24 px-4 border-t border-zinc-900">
      <div class="max-w-6xl mx-auto">
        <p class="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">01 — À propos</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16 text-white">À Propos</h2>
        <div class="grid md:grid-cols-2 gap-16 items-start">
          <div class="space-y-6">
            <p class="text-zinc-300 leading-relaxed text-lg">
              Salut, moi c'est <span class="text-white font-semibold">Abdou Isaac</span> 👋
            </p>
            <p class="text-zinc-400 leading-relaxed">
              Je suis actuellement étudiant en <span class="text-white font-semibold">BTS SIO</span> dans l'option <span class="text-white font-semibold">SLAM</span> (Solutions Logicielles et Applications Métier).
            </p>
            <p class="text-zinc-400 leading-relaxed">
              Passionné par le développement et les nouvelles technologies, découvrez ici mes projets et compétences.
            </p>
            <a href="/cv.pdf"
              class="inline-block border border-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 mt-4">
              Télécharger mon CV
            </a>
          </div>
          <div class="border border-zinc-800 rounded-lg p-8 bg-zinc-950">
            <h3 class="text-xl font-semibold mb-6 text-white">Qu'est-ce que le BTS SIO ? 🎓</h3>
            <p class="text-zinc-400 mb-6 text-sm leading-relaxed">
              Le BTS SIO forme en deux ans aux métiers de l'informatique avec deux spécialités :
            </p>
            <div class="space-y-4">
              <div class="border-l-2 border-white pl-4">
                <h4 class="font-semibold text-white mb-1">Option SLAM 👈 (ma filière)</h4>
                <p class="text-sm text-zinc-500">Solutions Logicielles et Applications Métier</p>
              </div>
              <div class="border-l-2 border-zinc-700 pl-4">
                <h4 class="font-semibold text-zinc-400 mb-1">Option SISR</h4>
                <p class="text-sm text-zinc-500">Solutions d'Infrastructure, Systèmes et Réseaux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours Section -->
    <section id="parcours" class="py-24 px-4 border-t border-zinc-900 bg-zinc-950">
      <div class="max-w-6xl mx-auto">
        <p class="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">02 — Parcours</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16 text-white">Mon Parcours</h2>

        <div class="mb-16">
          <h3 class="text-xs font-semibold mb-8 text-zinc-500 uppercase tracking-widest">Expériences Professionnelles 💼</h3>
          <div class="space-y-6">
            <div class="border border-zinc-800 rounded-lg p-6 bg-black hover:border-zinc-600 transition-all duration-300">
              <div class="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h4 class="text-lg font-semibold text-white">Stage 2ème année — Erasmus 🌍</h4>
                  <p class="text-zinc-500 text-sm">MastxSoftware · Pays-Bas</p>
                </div>
                <span class="border border-zinc-700 px-3 py-1 rounded text-xs text-zinc-400">Jan. — Mars 2026</span>
              </div>
              <ul class="space-y-2 text-zinc-400 text-sm">
                <li class="flex items-start gap-2"><span class="text-white mt-0.5">—</span> Mises à jour de bases de données clients en SQL</li>
                <li class="flex items-start gap-2"><span class="text-white mt-0.5">—</span> Mise à jour de solutions SaaS</li>
                <li class="flex items-start gap-2"><span class="text-white mt-0.5">—</span> Introduction au C++</li>
              </ul>
            </div>
            <div class="border border-zinc-800 rounded-lg p-6 bg-black hover:border-zinc-600 transition-all duration-300">
              <div class="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h4 class="text-lg font-semibold text-white">Stage 1ère année</h4>
                  <p class="text-zinc-500 text-sm">Epithec · Saint-Benoit</p>
                </div>
                <span class="border border-zinc-700 px-3 py-1 rounded text-xs text-zinc-400">Mai — Juil. 2024</span>
              </div>
              <ul class="space-y-2 text-zinc-400 text-sm">
                <li class="flex items-start gap-2"><span class="text-white mt-0.5">—</span> Développement d'un site web avec Vue.js (front-end)</li>
                <li class="flex items-start gap-2"><span class="text-white mt-0.5">—</span> Développement du back-end avec Laravel</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h3 class="text-xs font-semibold mb-8 text-zinc-500 uppercase tracking-widest">Parcours Scolaire 🎓</h3>
          <div class="relative">
            <div class="absolute left-0 top-0 bottom-0 w-px bg-zinc-800"></div>
            <div class="space-y-6 pl-8">
              <div class="relative">
                <div class="absolute -left-8 top-2 w-2 h-2 bg-white rounded-full"></div>
                <div class="border border-zinc-800 rounded-lg p-6 bg-black">
                  <div class="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h4 class="font-semibold text-white">BTS SIO Option SLAM</h4>
                    <span class="text-xs text-zinc-500">2023 — 2025</span>
                  </div>
                  <p class="text-zinc-500 text-sm">Lycée Amiral Bouvet · Saint-Benoit</p>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -left-8 top-2 w-2 h-2 bg-zinc-600 rounded-full"></div>
                <div class="border border-zinc-800 rounded-lg p-6 bg-black">
                  <div class="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h4 class="font-semibold text-white">BAC STI2D / BAC Général</h4>
                    <span class="text-xs text-zinc-500">2020 — 2023</span>
                  </div>
                  <p class="text-zinc-500 text-sm">Lycée Amiral Bouvet · Saint-Benoit</p>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -left-8 top-2 w-2 h-2 bg-zinc-700 rounded-full"></div>
                <div class="border border-zinc-800 rounded-lg p-6 bg-black">
                  <div class="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h4 class="font-semibold text-white">Brevet des Collèges</h4>
                    <span class="text-xs text-zinc-500">2016 — 2020</span>
                  </div>
                  <p class="text-zinc-500 text-sm">Collège · Saint-Benoit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-semibold mb-8 text-zinc-500 uppercase tracking-widest">Compétences 👨‍💻</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <div v-for="skill in skills" :key="skill.name"
              class="border border-zinc-800 rounded-lg p-5 bg-black hover:border-zinc-600 transition-all duration-300">
              <div class="flex justify-between items-center mb-3">
                <span class="text-white font-medium text-sm">{{ skill.icon }} {{ skill.name }}</span>
                <span class="text-zinc-500 text-xs">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-zinc-900 rounded-full h-px">
                <div class="bg-white h-px rounded-full" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>

          <h3 class="text-xs font-semibold mb-8 text-zinc-500 uppercase tracking-widest">Outils ⚙️</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="tool in tools" :key="tool.name"
              class="border border-zinc-800 rounded-lg p-5 bg-black hover:border-zinc-600 transition-all duration-300 text-center">
              <div class="text-3xl mb-2">{{ tool.icon }}</div>
              <p class="text-white text-sm font-medium">{{ tool.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projets" class="py-24 px-4 border-t border-zinc-900">
      <div class="max-w-6xl mx-auto">
        <p class="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">03 — Projets</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">Mes Projets</h2>
        <p class="text-zinc-500 mb-16 text-sm">Découvrez mes projets réalisés à ce jour.</p>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(project, index) in projects" :key="index"
            class="group border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 hover:border-zinc-600 transition-all duration-300">
            <div class="relative overflow-hidden h-52">
              <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-70"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="border border-zinc-600 bg-black/80 px-3 py-1 rounded text-xs text-zinc-300 uppercase tracking-wide">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-1 text-white">{{ project.title }}</h3>
              <p class="text-xs text-zinc-500 mb-3 uppercase tracking-wide">{{ project.tech }}</p>
              <p class="text-zinc-400 text-sm mb-5">{{ project.description }}</p>
              <a :href="project.href || '#'"
                class="inline-block border border-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                {{ project.buttonText || 'Voir le projet →' }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Veille Section -->
    <section id="veille" class="py-24 px-4 border-t border-zinc-900 bg-zinc-950">
      <div class="max-w-6xl mx-auto">
        <p class="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">04 — Veille</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">Veille Technologique</h2>
        <p class="text-zinc-500 mb-12 text-sm max-w-2xl">
          Surveillance des évolutions techniques et innovations dans le domaine du quantique.
        </p>

        <div class="border border-zinc-800 rounded-lg p-8 mb-12 bg-black text-center">
          <p class="text-zinc-600 text-xs tracking-widest uppercase mb-3">Thématique</p>
          <h3 class="text-2xl font-bold text-white mb-2">L'Ordinateur Quantique</h3>
          <p class="text-zinc-500 text-sm">Comment l'ordinateur quantique transforme-t-il notre quotidien et quel est son futur ?</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a v-for="article in articles" :key="article.title" :href="article.href" target="_blank"
            class="border border-zinc-800 rounded-lg p-6 bg-black hover:border-zinc-500 transition-all duration-300 block group">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded text-xs font-semibold text-zinc-300">
                {{ article.emoji }} {{ article.source }}
              </span>
              <span class="text-xs text-zinc-600">{{ article.date }}</span>
            </div>
            <h3 class="font-bold text-base mb-3 text-white group-hover:text-zinc-300 transition-colors leading-snug">
              {{ article.title }}
            </h3>
            <p class="text-zinc-500 text-sm mb-4 leading-relaxed">{{ article.description }}</p>
            <span class="text-zinc-400 text-xs uppercase tracking-widest group-hover:text-white transition-colors">Lire l'article →</span>
          </a>
        </div>

        <div class="mt-12 border border-zinc-800 rounded-lg p-8 bg-black">
          <h3 class="text-xs font-semibold mb-6 text-zinc-500 uppercase tracking-widest">Mes Outils de Veille 🔍</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="border border-zinc-800 rounded p-4 text-center hover:border-zinc-600 transition-colors">
              <div class="text-2xl mb-2">📰</div>
              <p class="font-semibold text-white text-sm">Feedly</p>
              <p class="text-xs text-zinc-500 mt-1">Agrégateur RSS</p>
            </div>
            <div class="border border-zinc-800 rounded p-4 text-center hover:border-zinc-600 transition-colors">
              <div class="text-2xl mb-2">🤖</div>
              <p class="font-semibold text-white text-sm">OpenAI</p>
              <p class="text-xs text-zinc-500 mt-1">Actualités IA</p>
            </div>
            <div class="border border-zinc-800 rounded p-4 text-center hover:border-zinc-600 transition-colors">
              <div class="text-2xl mb-2">💻</div>
              <p class="font-semibold text-white text-sm">Hardware.fr</p>
              <p class="text-xs text-zinc-500 mt-1">Tech & Hardware</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-zinc-900">
      <div class="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p class="text-zinc-600 text-xs uppercase tracking-widest">Abdou Isaac — Portfolio 2025</p>
        <p class="text-zinc-700 text-xs">BTS SIO Option SLAM</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navItems = ['Accueil', 'À Propos', 'Parcours', 'Projets', 'Veille'];

const menuItems = [
  { name: 'Accueil', icon: '🏠', href: '#accueil' },
  { name: 'À Propos', icon: '👤', href: '#a-propos' },
  { name: 'Parcours', icon: '🎓', href: '#parcours' },
  { name: 'Projets', icon: '🚀', href: '#projets' },
  { name: 'Veille', icon: '📔', href: '#veille' },
];

const projects = [
  {
    title: "Maison de ligue",
    category: "Application Web",
    tech: "Vue.js · Tailwind",
    image: "https://images.unsplash.com/photo-1551958219-acbc720bf6ed?w=500&h=300&fit=crop",
    description: "Plateforme de gestion de Match de Sport",
    href: '#accueil',
    buttonText: "Voir le projet →"
  },
  {
    title: "Blogue app",
    category: "Application Java",
    tech: "Java · MySQL",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    description: "Application de gestion avec base de données",
    href: '#accueil',
    buttonText: "Voir le projet →"
  }
];

const skills = [
  { name: "HTML", icon: "🌐", level: 50 },
  { name: "CSS", icon: "🎨", level: 50 },
  { name: "PHP", icon: "🐘", level: 50 },
  { name: "Python", icon: "🐍", level: 50 },
  { name: "SQL", icon: "🗄️", level: 50 },
  { name: "Vue.js", icon: "💚", level: 40 }
];

const tools = [
  { name: "Visual Studio Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎭" }
];

const articles = [
  {
    source: "IBM",
    emoji: "🖥️",
    date: "12 nov. 2025",
    title: "IBM dévoile le processeur Quantum Nighthawk",
    description: "IBM présente son processeur quantique le plus avancé : 120 qubits avec 218 coupleurs de nouvelle génération. L'entreprise vise un avantage quantique vérifié d'ici fin 2026.",
    href: "https://fr.newsroom.ibm.com/IBM-d-voile-de-nouveaux-processeurs-quantiques,-logiciels-et-algorithmes-r-volutionnaires-qui-ouvrent-la-voie-lavantage-quantique-et-des-syst-mes-tol-rants-aux-erreurs"
  },
  {
    source: "Nobel",
    emoji: "🏆",
    date: "18 déc. 2025",
    title: "Nobel de Physique 2025 : « On n'est qu'au début »",
    description: "Michel Devoret, prix Nobel de physique 2025, compare l'état actuel de l'ordinateur quantique à l'ère des tubes à vide. Il reste très optimiste malgré les obstacles techniques.",
    href: "https://www.futura-sciences.com/sciences/actualites/physique-prix-nobel-physique-2025-mecanique-quantique-honneur-nouveau-laureat-francais-126239/"
  },
  {
    source: "Cybersécurité",
    emoji: "🔐",
    date: "10 nov. 2025",
    title: "Quantique : la vraie menace pour la cryptographie",
    description: "Les algorithmes de Shor et Grover menacent concrètement la cryptographie actuelle. Un plan de migration vers des primitives post-quantiques (PQC) devient urgent.",
    href: "https://actufinance.fr/actu/crypto-menace-quantique-plan-pqc-2025/"
  },
  {
    source: "Recherche",
    emoji: "🧪",
    date: "nov. 2025",
    title: "Première preuve mathématique de la supériorité quantique",
    description: "Des chercheurs apportent pour la première fois la preuve mathématique que les ordinateurs quantiques peuvent résoudre certaines tâches bien plus vite que tout ordinateur classique.",
    href: "https://www.sciencepresse.qc.ca/actualites-scientifiques/2025/09/27/premier-succes-inconditionnel-ordinateur-quantique"
  },
  {
    source: "France",
    emoji: "🇫🇷",
    date: "10 nov. 2025",
    title: "LG investit dans Pasqal — 10 000 qubits en 2026",
    description: "LG Electronics prend une participation dans la start-up française Pasqal, qui vise une machine de 10 000 qubits d'ici été 2026. Une validation industrielle majeure pour le quantique français.",
    href: "https://www.ecinews.fr/fr/pasqal-vise-un-ordinateur-quantique-de-10-000-qbits-en-2026/"
  }
];

const handleScroll = () => { scrolled.value = window.scrollY > 50; };
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.8s ease-out; }
  .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
  .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
  .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s both; }
</style>