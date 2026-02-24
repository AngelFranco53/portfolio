<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// =====================================================
// PERSONALIZA TU INFORMACION AQUI
// =====================================================
const personal = {
  nombre: 'Tu Nombre',
  titulo: 'Full Stack Developer',
  ubicacion: 'Ciudad, País',
  email: 'tu@email.com',
  linkedin: 'linkedin.com/in/tu-perfil',
  github: 'github.com/tu-usuario',
  disponibilidad: 'Disponible para proyectos freelance y posiciones full-time',
  bio: `Soy un desarrollador apasionado con más de 2 años de experiencia construyendo aplicaciones web
  modernas. Me especializo en crear soluciones escalables y de alto rendimiento, con un fuerte enfoque
  en la experiencia del usuario y las mejores prácticas de desarrollo.`,
  bio2: `Mi objetivo es generar valor real para las empresas a través de la tecnología, combinando
  habilidades técnicas sólidas con comprensión del negocio. Siempre busco aprender y mantenerme
  actualizado con las últimas tendencias del sector.`,
}

const skills = [
  // PERSONALIZA TUS HABILIDADES Y PORCENTAJES
  { name: 'JavaScript / TypeScript', level: 88, color: '#f7df1e' },
  { name: 'Vue.js / React', level: 85, color: '#41b883' },
  { name: 'Node.js / Express', level: 80, color: '#68a063' },
  { name: 'Python / FastAPI', level: 75, color: '#3776ab' },
  { name: 'Bases de datos (SQL/NoSQL)', level: 78, color: '#00d4ff' },
  { name: 'DevOps / Docker / CI-CD', level: 65, color: '#4f7ef7' },
  { name: 'Diseño UI / Tailwind CSS', level: 82, color: '#7c3aed' },
]

const technologies = [
  { category: 'Frontend', items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Nuxt.js', 'Vite', 'Pinia'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { category: 'Bases de datos', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Vercel', 'Linux'] },
]

const experience = [
  // PERSONALIZA TU EXPERIENCIA
  {
    year: '2023 – Presente',
    role: 'Full Stack Developer',
    company: 'Empresa Actual',
    desc: 'Desarrollo de aplicaciones web con Vue.js y Node.js. Liderazgo técnico de un equipo de 3 personas.',
    type: 'work',
  },
  {
    year: '2022 – 2023',
    role: 'Frontend Developer',
    company: 'Empresa Anterior',
    desc: 'Construcción de interfaces de usuario responsivas y optimizadas. Integración con APIs REST.',
    type: 'work',
  },
  {
    year: '2018 – 2022',
    role: 'Ingeniería en Sistemas / Informática',
    company: 'Universidad',
    desc: 'Licenciatura en Ingeniería en Sistemas. Especialización en desarrollo de software y arquitectura.',
    type: 'education',
  },
]

// =====================================================
// SCROLL ANIMATIONS
// =====================================================
const skillsVisible = ref(false)
let observer = null

const setupObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          if (entry.target.dataset.skills) skillsVisible.value = true
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el)
  })
}

onMounted(() => setTimeout(setupObserver, 100))
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="min-h-screen bg-[#020918] pt-20">

    <!-- Fondo decorativo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #4f7ef7 0%, transparent 70%); filter: blur(80px);" />
      <div class="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #00d4ff 0%, transparent 70%); filter: blur(80px);" />
    </div>

    <!-- === HEADER === -->
    <section class="relative text-center px-6 py-20">
      <div class="max-w-4xl mx-auto">
        <p class="text-[#00d4ff] text-sm tracking-widest uppercase font-semibold mb-4 reveal">
          Conóceme mejor
        </p>
        <h1 class="text-4xl sm:text-6xl font-black mb-6 reveal">
          Sobre <span class="gradient-text">Mí</span>
        </h1>
        <p class="text-[#8099cc] text-lg max-w-2xl mx-auto reveal">
          Desarrollador comprometido con la excelencia técnica y la entrega de valor real.
        </p>
      </div>
    </section>

    <!-- === PERFIL PRINCIPAL === -->
    <section class="relative px-6 pb-20">
      <div class="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-start">

        <!-- Avatar + Info rápida -->
        <div class="reveal-left">
          <!-- Avatar -->
          <div class="glass-card rounded-2xl p-6 text-center mb-4">
            <!-- REEMPLAZA CON TU FOTO: <img src="/tu-foto.jpg" alt="Foto" class="w-32 h-32 rounded-2xl mx-auto object-cover mb-4" /> -->
            <div class="w-28 h-28 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl font-black text-[#020918]"
              style="background: linear-gradient(135deg, #00d4ff, #4f7ef7, #7c3aed);">
              TN
            </div>
            <h2 class="text-xl font-bold text-[#e8f0ff] mb-1">{{ personal.nombre }}</h2>
            <p class="text-[#00d4ff] text-sm font-medium mb-4">{{ personal.titulo }}</p>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] text-[#00d4ff] text-xs font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible
            </span>
          </div>

          <!-- Links sociales -->
          <div class="glass-card rounded-2xl p-4 space-y-3">
            <a href="#" class="flex items-center gap-3 text-sm text-[#8099cc] hover:text-[#00d4ff] transition-colors duration-200 group">
              <div class="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span class="truncate">{{ personal.email }}</span>
            </a>
            <a href="#" class="flex items-center gap-3 text-sm text-[#8099cc] hover:text-[#00d4ff] transition-colors duration-200 group">
              <div class="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <span class="truncate">LinkedIn</span>
            </a>
            <a href="#" class="flex items-center gap-3 text-sm text-[#8099cc] hover:text-[#00d4ff] transition-colors duration-200 group">
              <div class="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <span class="truncate">GitHub</span>
            </a>
            <div class="flex items-center gap-3 text-sm text-[#8099cc]">
              <div class="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.08)] flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span>{{ personal.ubicacion }}</span>
            </div>
          </div>
        </div>

        <!-- Bio + detalles -->
        <div class="space-y-6">
          <div class="glass-card rounded-2xl p-8 reveal-right">
            <h3 class="text-xl font-bold text-[#e8f0ff] mb-4 flex items-center gap-2">
              <span class="w-1 h-6 bg-gradient-to-b from-[#00d4ff] to-[#4f7ef7] rounded-full" />
              Mi Historia
            </h3>
            <p class="text-[#8099cc] leading-relaxed mb-4">{{ personal.bio }}</p>
            <p class="text-[#8099cc] leading-relaxed">{{ personal.bio2 }}</p>
          </div>

          <!-- Valores profesionales -->
          <div class="grid sm:grid-cols-3 gap-4 reveal">
            <div
              v-for="(item, i) in [
                { icon: '⚡', label: 'Rendimiento', desc: 'Código limpio y optimizado' },
                { icon: '🎯', label: 'Precisión', desc: 'Atención al detalle' },
                { icon: '🚀', label: 'Entrega', desc: 'Comprometido con plazos' },
              ]"
              :key="i"
              class="glass-card rounded-xl p-5 hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] group text-center"
            >
              <div class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{{ item.icon }}</div>
              <div class="text-sm font-bold text-[#e8f0ff] mb-1">{{ item.label }}</div>
              <div class="text-xs text-[#8099cc]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- === HABILIDADES === -->
    <section class="relative px-6 py-16 border-t border-[rgba(0,212,255,0.08)]" data-skills="true">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 reveal">
          <p class="text-[#00d4ff] text-sm tracking-widest uppercase font-semibold mb-3">Habilidades técnicas</p>
          <h2 class="text-3xl sm:text-4xl font-black text-[#e8f0ff]">
            Mi <span class="gradient-text">Stack</span> Profesional
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div
            v-for="(skill, i) in skills"
            :key="i"
            class="reveal"
            :style="{ transitionDelay: `${i * 0.08}s` }"
          >
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-[#e8f0ff]">{{ skill.name }}</span>
              <span class="text-sm font-bold" :style="{ color: skill.color }">{{ skill.level }}%</span>
            </div>
            <div class="h-2 bg-[#0d1b38] rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-1000 ease-out"
                :style="{
                  width: skillsVisible ? skill.level + '%' : '0%',
                  background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                  transitionDelay: `${i * 0.1 + 0.3}s`,
                  boxShadow: `0 0 10px ${skill.color}60`
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- === TECNOLOGIAS === -->
    <section class="relative px-6 py-16 border-t border-[rgba(0,212,255,0.08)]">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 reveal">
          <p class="text-[#00d4ff] text-sm tracking-widest uppercase font-semibold mb-3">Herramientas y tecnologías</p>
          <h2 class="text-3xl sm:text-4xl font-black text-[#e8f0ff]">
            Mi <span class="gradient-text">Toolkit</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(cat, i) in technologies"
            :key="i"
            class="glass-card rounded-2xl p-6 hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 reveal-scale"
            :style="{ transitionDelay: `${i * 0.1}s` }"
          >
            <h3 class="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-4">
              {{ cat.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in cat.items"
                :key="tech"
                class="px-2.5 py-1 rounded-md text-xs text-[#8099cc] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:text-[#e8f0ff] hover:border-[rgba(0,212,255,0.2)] transition-all duration-200 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- === EXPERIENCIA & EDUCACION === -->
    <section class="relative px-6 py-16 border-t border-[rgba(0,212,255,0.08)]">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12 reveal">
          <p class="text-[#00d4ff] text-sm tracking-widest uppercase font-semibold mb-3">Trayectoria</p>
          <h2 class="text-3xl sm:text-4xl font-black text-[#e8f0ff]">
            Experiencia & <span class="gradient-text">Educación</span>
          </h2>
        </div>

        <div class="relative">
          <!-- Linea vertical -->
          <div class="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#4f7ef7] to-transparent" />

          <div class="space-y-8">
            <div
              v-for="(item, i) in experience"
              :key="i"
              class="flex gap-6 reveal"
              :style="{ transitionDelay: `${i * 0.15}s` }"
            >
              <!-- Dot -->
              <div class="relative flex-shrink-0">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 relative"
                  :class="item.type === 'work'
                    ? 'bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.4)]'
                    : 'bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.4)]'"
                >
                  {{ item.type === 'work' ? '💼' : '🎓' }}
                </div>
              </div>

              <!-- Content -->
              <div class="glass-card rounded-xl p-5 flex-1 hover:border-[rgba(0,212,255,0.25)] transition-all duration-300">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 class="font-bold text-[#e8f0ff]">{{ item.role }}</h3>
                  <span class="text-xs text-[#00d4ff] font-medium bg-[rgba(0,212,255,0.08)] px-2 py-1 rounded-md">
                    {{ item.year }}
                  </span>
                </div>
                <p class="text-sm font-semibold text-[#4f7ef7] mb-2">{{ item.company }}</p>
                <p class="text-sm text-[#8099cc] leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- === CTA FINAL === -->
    <section class="relative px-6 py-20 border-t border-[rgba(0,212,255,0.08)]">
      <div class="max-w-2xl mx-auto text-center reveal">
        <h2 class="text-3xl sm:text-4xl font-black text-[#e8f0ff] mb-4">
          ¿Listo para <span class="gradient-text">trabajar juntos</span>?
        </h2>
        <p class="text-[#8099cc] mb-8 leading-relaxed">
          Estoy disponible para proyectos freelance y oportunidades a tiempo completo.
          Hablemos sobre cómo puedo aportar valor a tu equipo o proyecto.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="mailto:tu@email.com" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Email
          </a>
          <RouterLink to="/projects" class="btn-outline">
            Ver mis proyectos
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>
