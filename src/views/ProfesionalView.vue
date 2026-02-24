<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el)
  })
})

const techSkills = [
  { label: 'Vue.js / Nuxt', level: 90, color: '#41b883' },
  { label: 'React / Next.js', level: 82, color: '#61dafb' },
  { label: 'TypeScript', level: 78, color: '#3178c6' },
  { label: 'Node.js / Express', level: 85, color: '#68a063' },
  { label: 'Python / FastAPI', level: 75, color: '#f7ca3b' },
  { label: 'PostgreSQL / MySQL', level: 80, color: '#336791' },
  { label: 'Docker / DevOps', level: 70, color: '#2496ed' },
  { label: 'Tailwind CSS', level: 93, color: '#38bdf8' },
]

const techCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    color: '#00d4ff',
    items: ['Vue.js', 'React', 'Nuxt', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#4f7ef7',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'JWT', 'WebSockets', 'Laravel'],
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    color: '#7c3aed',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: '#00d4ff',
    items: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Vercel', 'Linux', 'Nginx'],
  },
]

const experience = [
  {
    type: 'work',
    role: 'Desarrollador Full Stack Senior',
    company: 'Telecomunicaciones Modernas S.A. - ASIPONA LÁZARO CÁRDENAS',
    period: '2023 — Presente',
    desc: 'Desarrollo de aplicaciones web complejas con Vue.js y Node.js. Arquitectura de microservicios y optimización de rendimiento.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'CI/CD', 'Microservicios', 'GraphQL', 'WebSockets', 'LARAVEL', 'MySQL'],
  },
  {
    type: 'work',
    role: 'Desarrollador Full Stack',
    company: 'Freelance / Proyectos personales',
    period: '2022 — 2023',
    desc: 'Construcción de interfaces modernas y responsivas para clientes corporativos. Integración de APIs y gestión de estado.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    type: 'work',
    role: 'Desarrollador Web Jr.',
    company: 'Carnicería Franko - Lázaro Cárdenas',
    period: '2021 — 2022',
    desc: 'Desarrollo de landing pages, dashboards y funcionalidades básicas para mejorar la presencia online y la gestión interna.',
    tags: ['HTML', 'CSS', 'JavaScript', 'LARAVEL', 'MySQL', 'VUE.JS'],
  },
]

const education = [
  {
    type: 'edu',
    title: 'Ingeniería en Sistemas',
    institution: 'Tecnologico Nacional de Mexico campus Lazaro Cardenas',
    period: '2019 — 2023',
    desc: 'Especialización en desarrollo de software, bases de datos y arquitectura de sistemas.',
  },
  {
    type: 'edu',
    title: 'AWS Cloud Practitioner',
    institution: 'Amazon Web Services',
    period: '2023',
    desc: 'Certificación oficial en computación en la nube con AWS.',
  },
  {
    type: 'edu',
    title: 'Meta Frontend Developer',
    institution: 'Meta / Coursera',
    period: '2022',
    desc: 'Certificado profesional en desarrollo frontend con React.',
  },
]

const stats = [
  { value: '2+', label: 'Años de experiencia', icon: '⏱️' },
  { value: '15+', label: 'Proyectos entregados', icon: '🚀' },
  { value: '10+', label: 'Tecnologías dominadas', icon: '💻' },
  { value: '3', label: 'Certificaciones', icon: '🏆' },
]
</script>

<template>
  <div class="relative min-h-screen bg-[#020918] overflow-hidden">

    <!-- Fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
        style="background: radial-gradient(circle, #4f7ef7 0%, transparent 70%); filter: blur(90px);" />
      <div class="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #00d4ff 0%, transparent 70%); filter: blur(80px);" />
    </div>
    <div class="absolute inset-0 pointer-events-none opacity-[0.025]"
      style="background-image: linear-gradient(rgba(79,126,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,126,247,1) 1px, transparent 1px); background-size: 60px 60px;" />

    <div class="relative max-w-6xl mx-auto px-6 py-32">

      <!-- Header -->
      <div class="text-center mb-20 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,126,247,0.3)] bg-[rgba(79,126,247,0.06)] text-[#7aa2f7] text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-[#7aa2f7] animate-pulse" />
          Mi trayectoria
        </div>
        <h1 class="text-4xl sm:text-6xl font-black text-[#e8f0ff] mb-4">
          Perfil <span class="gradient-text">Profesional</span>
        </h1>
        <p class="text-[#8099cc] max-w-xl mx-auto text-lg">
          Habilidades técnicas, experiencia laboral y formación académica que definen mi capacidad.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="glass-card rounded-2xl p-6 text-center reveal-scale group hover:-translate-y-2 hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)]"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-3xl font-black gradient-text mb-1">{{ stat.value }}</div>
          <div class="text-xs text-[#8099cc] font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Habilidades técnicas -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Habilidades <span class="gradient-text">Técnicas</span>
          </h2>
          <p class="text-[#8099cc]">Nivel de dominio en las principales tecnologías</p>
        </div>

        <div class="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div
            v-for="(skill, i) in techSkills"
            :key="i"
            class="glass-card rounded-xl p-5 reveal"
            :style="`transition-delay: ${i * 60}ms`"
          >
            <div class="flex justify-between items-center mb-3">
              <span class="font-semibold text-[#e8f0ff]">{{ skill.label }}</span>
              <span class="text-sm font-bold" :style="{ color: skill.color }">{{ skill.level }}%</span>
            </div>
            <div class="h-2 rounded-full bg-[rgba(255,255,255,0.06)]">
              <div
                class="h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{
                  width: skill.level + '%',
                  background: `linear-gradient(90deg, ${skill.color}, #4f7ef7)`,
                  boxShadow: `0 0 10px ${skill.color}60`,
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Stack tecnológico -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Stack <span class="gradient-text">Tecnológico</span>
          </h2>
          <p class="text-[#8099cc]">Herramientas y frameworks que domino en producción</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(cat, i) in techCategories"
            :key="i"
            class="glass-card rounded-2xl p-6 reveal-scale group hover:-translate-y-1 transition-all duration-300"
            :style="`transition-delay: ${i * 80}ms; --hover-color: ${cat.color}`"
          >
            <div class="flex items-center gap-3 mb-5">
              <span class="text-2xl">{{ cat.icon }}</span>
              <h3 class="font-bold text-[#e8f0ff] text-lg">{{ cat.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in cat.items"
                :key="item"
                class="px-2.5 py-1 rounded-md text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] hover:text-[#e8f0ff] hover:border-[rgba(0,212,255,0.2)] transition-all duration-200 cursor-default"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiencia -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Experiencia <span class="gradient-text">Laboral</span>
          </h2>
          <p class="text-[#8099cc]">Mi trayectoria profesional en el mundo del desarrollo</p>
        </div>

        <div class="relative max-w-3xl mx-auto">
          <!-- Línea vertical -->
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#4f7ef7] to-transparent opacity-30" />

          <div v-for="(item, i) in experience" :key="i"
            class="relative pl-16 mb-10 last:mb-0 reveal"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <!-- Dot -->
            <div class="absolute left-3.5 top-5 w-3 h-3 rounded-full bg-[#00d4ff] -translate-x-1/2"
              style="box-shadow: 0 0 12px rgba(0,212,255,0.6);" />

            <div class="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,212,255,0.08)]">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="font-bold text-[#e8f0ff] text-lg">{{ item.role }}</h3>
                  <p class="text-[#00d4ff] font-semibold text-sm">{{ item.company }}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] whitespace-nowrap">
                  {{ item.period }}
                </span>
              </div>
              <p class="text-[#8099cc] text-sm leading-relaxed mb-4">{{ item.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in item.tags" :key="tag"
                  class="px-2.5 py-1 rounded-md text-xs font-medium text-[#00d4ff] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)]">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Educación y certificaciones -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Educación &amp; <span class="gradient-text">Certificaciones</span>
          </h2>
          <p class="text-[#8099cc]">Formación académica y acreditaciones profesionales</p>
        </div>

        <div class="relative max-w-3xl mx-auto">
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[#4f7ef7] to-transparent opacity-30" />

          <div v-for="(item, i) in education" :key="i"
            class="relative pl-16 mb-8 last:mb-0 reveal"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <div class="absolute left-3.5 top-5 w-3 h-3 rounded-full bg-[#7c3aed] -translate-x-1/2"
              style="box-shadow: 0 0 12px rgba(124,58,237,0.6);" />

            <div class="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-[rgba(124,58,237,0.3)] transition-all duration-300">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 class="font-bold text-[#e8f0ff] text-lg">{{ item.title }}</h3>
                  <p class="text-[#a78bfa] font-semibold text-sm">{{ item.institution }}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] whitespace-nowrap">
                  {{ item.period }}
                </span>
              </div>
              <p class="text-[#8099cc] text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="glass-card rounded-3xl p-10 text-center reveal"
        style="background: linear-gradient(135deg, rgba(79,126,247,0.04), rgba(0,212,255,0.04)); border-color: rgba(79,126,247,0.2);">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
          ¿Listo para colaborar?
        </h2>
        <p class="text-[#8099cc] mb-8 max-w-xl mx-auto">
          Mi perfil está listo. Explora mis proyectos o contáctame directamente para discutir oportunidades.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/proyectos" class="btn-primary">
            Ver mis proyectos
          </RouterLink>
          <a href="mailto:tu@email.com" class="btn-outline">
            Enviar mensaje
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
