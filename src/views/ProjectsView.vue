<script setup>
import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
    observer.observe(el)
  })
})

const activeFilter = ref('Todos')

const filters = ['Todos', 'Frontend', 'Full Stack', 'Backend', 'Mobile']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos en línea, panel de administración y gestión de inventario en tiempo real.',
    category: 'Full Stack',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/20 to-[#4f7ef7]/20',
    border: 'rgba(0,212,255,0.25)',
    icon: '🛒',
    status: 'Producción',
    statusColor: '#10b981',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de análisis de datos con visualizaciones interactivas, reportes en tiempo real y exportación a múltiples formatos para equipos corporativos.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    color: '#4f7ef7',
    gradient: 'from-[#4f7ef7]/20 to-[#7c3aed]/20',
    border: 'rgba(79,126,247,0.25)',
    icon: '📊',
    status: 'Producción',
    statusColor: '#10b981',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'API REST Microservices',
    description: 'Arquitectura de microservicios con autenticación JWT, rate limiting, documentación Swagger y orquestación con Docker Compose.',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
    color: '#7c3aed',
    gradient: 'from-[#7c3aed]/20 to-[#4f7ef7]/20',
    border: 'rgba(124,58,237,0.25)',
    icon: '⚙️',
    status: 'Producción',
    statusColor: '#10b981',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con drag & drop, colaboración en equipo, notificaciones push y sincronización en tiempo real.',
    category: 'Full Stack',
    tags: ['Nuxt.js', 'Python', 'FastAPI', 'Redis', 'WebSockets'],
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/15 to-[#7c3aed]/15',
    border: 'rgba(0,212,255,0.2)',
    icon: '✅',
    status: 'Beta',
    statusColor: '#f59e0b',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Template',
    description: 'Template de portafolio profesional con animaciones avanzadas, diseño responsivo y fácil personalización para desarrolladores.',
    category: 'Frontend',
    tags: ['Vue.js', 'Tailwind CSS', 'Vite', 'Animations'],
    color: '#4f7ef7',
    gradient: 'from-[#4f7ef7]/15 to-[#00d4ff]/15',
    border: 'rgba(79,126,247,0.2)',
    icon: '🎨',
    status: 'Open Source',
    statusColor: '#a78bfa',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    description: 'Aplicación móvil de banca digital con transferencias, pagos de servicios, historial de transacciones y autenticación biométrica.',
    category: 'Mobile',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
    color: '#7c3aed',
    gradient: 'from-[#7c3aed]/15 to-[#4f7ef7]/15',
    border: 'rgba(124,58,237,0.2)',
    icon: '📱',
    status: 'En desarrollo',
    statusColor: '#f59e0b',
    demo: '#',
    github: '#',
    featured: false,
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})

const featuredProjects = computed(() => projects.filter((p) => p.featured))
const otherProjects = computed(() => {
  const filtered = filteredProjects.value
  if (activeFilter.value === 'Todos') return filtered.filter((p) => !p.featured)
  return filtered
})
</script>

<template>
  <div class="relative min-h-screen bg-[#020918] overflow-hidden">

    <!-- Fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #4f7ef7 0%, transparent 70%); filter: blur(100px);" />
      <div class="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #7c3aed 0%, transparent 70%); filter: blur(90px);" />
      <div class="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full opacity-08"
        style="background: radial-gradient(circle, #00d4ff 0%, transparent 70%); filter: blur(70px);" />
    </div>
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]"
      style="background-image: linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px); background-size: 60px 60px;" />

    <div class="relative max-w-6xl mx-auto px-6 py-32">

      <!-- Header -->
      <div class="text-center mb-20 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.06)] text-[#00d4ff] text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Trabajo reciente
        </div>
        <h1 class="text-4xl sm:text-6xl font-black text-[#e8f0ff] mb-4">
          Mis <span class="gradient-text">Proyectos</span>
        </h1>
        <p class="text-[#8099cc] max-w-xl mx-auto text-lg">
          Soluciones reales que demuestran mi capacidad técnica y enfoque en resultados concretos.
        </p>
      </div>

      <!-- Proyectos destacados -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-8 reveal">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(0,212,255,0.2)]" />
          <span class="text-sm font-semibold text-[#00d4ff] uppercase tracking-widest px-4">Destacados</span>
          <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(0,212,255,0.2)]" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            class="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,212,255,0.12)] reveal-scale"
            :style="`--border-color: ${project.border}; border-color: ${project.border}; transition-delay: ${i * 100}ms`"
          >
            <!-- Banner del proyecto -->
            <div
              class="relative h-48 flex items-center justify-center overflow-hidden"
              :class="`bg-gradient-to-br ${project.gradient}`"
            >
              <!-- Decoración de fondo -->
              <div class="absolute inset-0 opacity-20"
                style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%);" />
              <div class="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10 animate-[float_6s_ease-in-out_infinite]" />
              <div class="absolute bottom-4 left-4 w-12 h-12 rounded-lg border border-white/5 rotate-12 animate-[float_8s_ease-in-out_1s_infinite]" />

              <span class="relative text-7xl filter drop-shadow-lg">{{ project.icon }}</span>

              <!-- Status badge -->
              <div
                class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                :style="`background: ${project.statusColor}25; border: 1px solid ${project.statusColor}60; color: ${project.statusColor}`"
              >
                {{ project.status }}
              </div>

              <!-- Category badge -->
              <div
                class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                :style="`background: rgba(0,0,0,0.4); color: ${project.color}; border: 1px solid ${project.border}`"
              >
                {{ project.category }}
              </div>
            </div>

            <!-- Contenido -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#e8f0ff] mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-[#8099cc] text-sm leading-relaxed mb-5">{{ project.description }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="tag in project.tags" :key="tag"
                  class="px-2.5 py-1 rounded-md text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] hover:text-[#e8f0ff] hover:border-[rgba(0,212,255,0.2)] transition-colors duration-200 cursor-default"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-3">
                <a
                  :href="project.demo"
                  class="btn-primary flex-1 justify-center text-sm py-2.5 px-4"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Demo
                </a>
                <a
                  :href="project.github"
                  class="btn-outline flex-1 justify-center text-sm py-2.5 px-4"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="flex flex-wrap justify-center gap-3 mb-10 reveal">
        <button
          v-for="filter in filters"
          :key="filter"
          class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
          :class="activeFilter === filter
            ? 'bg-[rgba(0,212,255,0.12)] text-[#00d4ff] border-[rgba(0,212,255,0.4)] shadow-[0_0_20px_rgba(0,212,255,0.15)]'
            : 'text-[#8099cc] border-[rgba(255,255,255,0.08)] bg-transparent hover:text-[#e8f0ff] hover:border-[rgba(0,212,255,0.2)] hover:bg-[rgba(255,255,255,0.03)]'"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid proyectos -->
      <Transition name="fade" mode="out-in">
        <div :key="activeFilter" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          <div
            v-for="(project, i) in (activeFilter === 'Todos' ? otherProjects : filteredProjects)"
            :key="project.id"
            class="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)] reveal-scale"
            :style="`border-color: ${project.border}; transition-delay: ${i * 70}ms`"
          >
            <!-- Mini banner -->
            <div
              class="relative h-32 flex items-center justify-center overflow-hidden"
              :class="`bg-gradient-to-br ${project.gradient}`"
            >
              <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-xl"
                :style="`background: ${project.color}`" />
              <span class="relative text-5xl">{{ project.icon }}</span>

              <div
                class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                :style="`background: ${project.statusColor}20; color: ${project.statusColor}; border: 1px solid ${project.statusColor}50`"
              >
                {{ project.status }}
              </div>

              <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
                :style="`background: rgba(0,0,0,0.4); color: ${project.color}; border: 1px solid ${project.border}`">
                {{ project.category }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="font-bold text-[#e8f0ff] text-base mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-[#8099cc] text-xs leading-relaxed mb-4 line-clamp-3">{{ project.description }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag"
                  class="px-2 py-0.5 rounded text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]">
                  {{ tag }}
                </span>
                <span v-if="project.tags.length > 3"
                  class="px-2 py-0.5 rounded text-xs font-medium text-[#8099cc] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]">
                  +{{ project.tags.length - 3 }}
                </span>
              </div>

              <div class="flex gap-2">
                <a :href="project.demo" class="btn-primary flex-1 justify-center text-xs py-2">Demo</a>
                <a :href="project.github" class="btn-outline flex-1 justify-center text-xs py-2">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- CTA -->
      <div class="glass-card rounded-3xl p-10 text-center reveal"
        style="background: linear-gradient(135deg, rgba(0,212,255,0.04), rgba(79,126,247,0.04)); border-color: rgba(0,212,255,0.15);">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
          ¿Tienes un proyecto en mente?
        </h2>
        <p class="text-[#8099cc] mb-8 max-w-xl mx-auto">
          Construyamos algo increíble juntos. Contáctame y cuéntame sobre tu idea.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="mailto:tu@email.com" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Hablemos
          </a>
          <a href="https://linkedin.com" target="_blank" class="btn-outline">
            LinkedIn
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
