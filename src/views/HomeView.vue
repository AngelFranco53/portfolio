<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// Typewriter effect
const roles = [
  'Desarrollador Full Stack',
  'Arquitecto de Software',
  'Desarrollador Frontend',
  'Desarrollador Backend',
]
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let typeInterval = null

const typeWriter = () => {
  const targetRole = roles[roleIndex.value]
  if (!isDeleting.value) {
    currentRole.value = targetRole.substring(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === targetRole.length) {
      isDeleting.value = true
      clearInterval(typeInterval)
      setTimeout(() => {
        typeInterval = setInterval(typeWriter, 80)
      }, 1800)
    }
  } else {
    currentRole.value = targetRole.substring(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
      clearInterval(typeInterval)
      setTimeout(() => {
        typeInterval = setInterval(typeWriter, 100)
      }, 300)
    }
  }
}

// Particles
const particles = ref([])
const generateParticles = () => {
  particles.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
  }))
}

onMounted(() => {
  generateParticles()
  setTimeout(() => {
    typeInterval = setInterval(typeWriter, 100)
  }, 800)
})

onUnmounted(() => {
  if (typeInterval) clearInterval(typeInterval)
})

const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '15+', label: 'Proyectos completados' },
  { value: '10+', label: 'Tecnologías' },
  { value: '100%', label: 'Compromiso' },
]
</script>

<template>
  <div class="relative min-h-screen bg-[#020918] overflow-hidden flex flex-col">

    <!-- === FONDO ANIMADO === -->
    <!-- Gradiente radial de fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style="background: radial-gradient(circle, #00d4ff 0%, transparent 70%); filter: blur(80px);"
      />
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style="background: radial-gradient(circle, #7c3aed 0%, transparent 70%); filter: blur(80px);"
      />
      <div
        class="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #4f7ef7 0%, transparent 70%); filter: blur(60px);"
      />
    </div>

    <!-- Grid de fondo -->
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.03]"
      style="background-image: linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px); background-size: 60px 60px;"
    />

    <!-- Partículas flotantes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="p in particles"
        :key="p.id"
        class="absolute rounded-full bg-[#00d4ff]"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          opacity: p.opacity,
          animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
        }"
      />
    </div>

    <!-- Formas geométricas -->
    <div class="absolute top-[15%] right-[8%] w-32 h-32 border border-[rgba(0,212,255,0.15)] rounded-2xl rotate-12 animate-[float_7s_ease-in-out_0s_infinite] pointer-events-none" />
    <div class="absolute top-[60%] left-[5%] w-20 h-20 border border-[rgba(79,126,247,0.2)] rounded-xl -rotate-12 animate-[float_9s_ease-in-out_1s_infinite] pointer-events-none" />
    <div class="absolute bottom-[25%] right-[15%] w-16 h-16 border border-[rgba(124,58,237,0.2)] rounded-lg rotate-45 animate-[float_6s_ease-in-out_2s_infinite] pointer-events-none" />
    <div class="absolute top-[30%] left-[10%] w-4 h-4 bg-[rgba(0,212,255,0.3)] rounded-full animate-[float_5s_ease-in-out_0.5s_infinite] pointer-events-none" />
    <div class="absolute bottom-[35%] right-[30%] w-3 h-3 bg-[rgba(79,126,247,0.4)] rounded-full animate-[float_8s_ease-in-out_3s_infinite] pointer-events-none" />

    <!-- === HERO CONTENT === -->
    <div class="relative flex-1 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div class="max-w-4xl w-full mx-auto text-center">

        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.06)] text-[#00d4ff] text-sm font-medium mb-8 opacity-0"
          style="animation: slide-up 0.6s ease-out 0.3s forwards;"
        >
          <span class="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Disponible para nuevos proyectos
        </div>

        <!-- Nombre -->
        <h1
          class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4 opacity-0"
          style="animation: slide-up 0.7s ease-out 0.5s forwards;"
        >
          <!-- PERSONALIZA TU NOMBRE AQUI -->
          <span class="text-[#e8f0ff]">Ángel David</span>
          <span class="gradient-text"> Franco Villaseñor</span>
        </h1>

        <!-- Rol con typewriter -->
        <div
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#8099cc] mb-6 h-10 opacity-0"
          style="animation: slide-up 0.7s ease-out 0.7s forwards;"
        >
          <span>{{ currentRole }}</span>
          <span class="inline-block w-0.5 h-7 bg-[#00d4ff] ml-1 animate-[typewriter-cursor_1s_step-end_infinite]" />
        </div>

        <!-- Descripción -->
        <p
          class="text-base sm:text-lg text-[#8099cc] max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          style="animation: slide-up 0.7s ease-out 0.9s forwards;"
        >
          <!-- PERSONALIZA TU BIO AQUÍ -->
          Apasionado por construir soluciones digitales que generan impacto real.
          Especializado en desarrollo web moderno con enfoque en rendimiento, escalabilidad y experiencia de usuario.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0"
          style="animation: slide-up 0.7s ease-out 1.1s forwards;"
        >
          <RouterLink to="/proyectos" class="btn-primary text-base">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Ver Proyectos
          </RouterLink>
          <RouterLink to="/personal" class="btn-outline text-base">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sobre Mí
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style="animation: fade-in 1s ease-out 2s forwards;"
      >
        <span class="text-xs text-[#8099cc] tracking-widest uppercase">Scroll</span>
        <div class="w-5 h-8 border border-[rgba(0,212,255,0.3)] rounded-full flex justify-center pt-1.5">
          <div class="w-1 h-2 bg-[#00d4ff] rounded-full animate-bounce" />
        </div>
      </div>
    </div>

    <!-- === STATS STRIP === -->
    <section class="relative border-t border-[rgba(0,212,255,0.1)] bg-[rgba(13,27,56,0.4)] backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center group"
        >
          <div
            class="text-3xl sm:text-4xl font-black gradient-text mb-1 transition-transform duration-300 group-hover:scale-110"
          >
            {{ stat.value }}
          </div>
          <div class="text-sm text-[#8099cc] font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- === FEATURED TECHNOLOGIES === -->
    <section class="relative py-16 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-sm text-[#8099cc] uppercase tracking-widest mb-8 font-medium">Tecnologías que domino</p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <!-- PERSONALIZA TUS TECNOLOGÍAS AQUÍ -->
          <span v-for="tech in ['Vue.js', 'React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'PostgreSQL', 'Tailwind CSS', 'Git', 'AWS']"
            :key="tech"
            class="glass-card px-4 py-2 rounded-lg text-sm font-medium text-[#8099cc]
                   hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.4)]
                   transition-all duration-300 hover:bg-[rgba(0,212,255,0.05)]
                   hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>
