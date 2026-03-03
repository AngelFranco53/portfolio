<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { contactInfo } from '../data/contactInfo'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el)
  })
})

const interests = [
  { icon: '💻', label: 'Programación', desc: 'Siempre aprendiendo nuevas tecnologías' },
  { icon: '🎯', label: 'Resolución de problemas', desc: 'Me apasiona encontrar soluciones creativas' },
  { icon: '📚', label: 'Aprendizaje continuo', desc: 'Cursos, libros y comunidades tech' },
  { icon: '🌐', label: 'Open Source', desc: 'Contribuir y colaborar con la comunidad' },
  { icon: '🏃', label: 'Deporte', desc: 'Mantener cuerpo y mente activos' },
  { icon: '🎮', label: 'Gaming', desc: 'Estrategia y resolución de puzzles' },
]

const softSkills = [
  { label: 'Comunicación', level: 90 },
  { label: 'Trabajo en equipo', level: 95 },
  { label: 'Adaptabilidad', level: 88 },
  { label: 'Liderazgo', level: 82 },
  { label: 'Pensamiento crítico', level: 92 },
  { label: 'Gestión del tiempo', level: 85 },
  { label: 'Gestión de personal', level: 80 },
  
]

const values = [
  { icon: '🎯', title: 'Honestidad', desc: 'Comunicación clara y transparente en cada proyecto' },
  { icon: '🤝', title: 'Colaboración', desc: 'El mejor trabajo nace del equipo y la comunicación' },
  { icon: '🚀', title: 'Ambición', desc: 'Siempre buscando superar expectativas y crecer' },
  { icon: '💡', title: 'Creatividad', desc: 'Soluciones innovadoras para desafíos complejos' },
]

const contactCards = [
  { icon: '📍', label: 'Ubicación', value: 'Lázaro Cárdenas, México' },
  { icon: '📧', label: 'Email', value: contactInfo.email },
  { icon: '📱', label: 'Celular', value: contactInfo.phone },
  { icon: '🌐', label: 'Idiomas', value: 'Español, Inglés' },
]

const socialLinks = [
  { label: 'Contáctame', href: `mailto:${contactInfo.email}`, style: 'btn-primary py-2.5 px-5 text-sm' },
  { label: 'LinkedIn', href: contactInfo.linkedin, style: 'btn-outline py-2.5 px-5 text-sm' },
  { label: 'GitHub', href: contactInfo.github, style: 'btn-outline py-2.5 px-5 text-sm' },
  { label: 'Platzi', href: contactInfo.platzi, style: 'btn-outline py-2.5 px-5 text-sm' },
]
</script>

<template>
  <div class="relative min-h-screen bg-[#020918] overflow-hidden">

    <!-- Fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
        style="background: radial-gradient(circle, #7c3aed 0%, transparent 70%); filter: blur(90px);" />
      <div class="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #00d4ff 0%, transparent 70%); filter: blur(80px);" />
    </div>
    <div class="absolute inset-0 pointer-events-none opacity-[0.025]"
      style="background-image: linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px); background-size: 60px 60px;" />

    <div class="relative max-w-6xl mx-auto px-6 py-32">

      <!-- Header section -->
      <div class="text-center mb-20 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.06)] text-[#a78bfa] text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
          Conóceme
        </div>
        <h1 class="text-4xl sm:text-6xl font-black text-[#e8f0ff] mb-4">
          Información <span class="gradient-text">Personal</span>
        </h1>
        <p class="text-[#8099cc] max-w-xl mx-auto text-lg">
          Más allá del código — quién soy, qué me mueve y lo que me hace único.
        </p>
      </div>

      <!-- Profile card + Bio -->
      <div class="grid lg:grid-cols-2 gap-10 mb-20 items-center">

        <!-- Foto / Avatar -->
        <div class="flex justify-center reveal-left">
          <div class="relative">
            <!-- Anillo animado externo -->
            <div class="absolute inset-[-16px] rounded-full border-2 border-dashed border-[rgba(0,212,255,0.2)] animate-[spin_20s_linear_infinite]" />
            <div class="absolute inset-[-8px] rounded-full border border-[rgba(124,58,237,0.3)] animate-[spin_15s_linear_reverse_infinite]" />

            <!-- Avatar container -->
            <div class="relative w-56 h-56 rounded-full overflow-hidden border-4 border-[rgba(0,212,255,0.3)]"
              style="box-shadow: 0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(124,58,237,0.1);">
              <!-- Placeholder avatar -->
              <div class="w-full h-full bg-gradient-to-br from-[#0d1b38] to-[#162040] flex items-center justify-center">
                <span class="text-7xl font-black gradient-text">AF</span>
              </div>
            </div>

            <!-- Badge disponible -->
            <div class="absolute bottom-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060f24] border border-[rgba(0,212,255,0.25)] text-xs font-semibold text-[#00d4ff]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              Disponible
            </div>
          </div>
        </div>

        <!-- Info personal -->
        <div class="reveal-right">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#e8f0ff] mb-2">
            <!-- PERSONALIZA TU NOMBRE -->
            Ángel David Franco Villaseñor
          </h2>
          <p class="gradient-text text-lg font-semibold mb-5">Desarrollador Full Stack</p>

          <p class="text-[#8099cc] leading-relaxed mb-6">
            <!-- PERSONALIZA TU BIO -->
            Soy un desarrollador apasionado por crear experiencias digitales que generen impacto real.
            Me impulsa la curiosidad y el deseo de resolver problemas complejos con soluciones elegantes.
            Creo firmemente que la tecnología bien aplicada puede transformar negocios y mejorar vidas.
          </p>
          <p class="text-[#8099cc] leading-relaxed mb-8">
            Cuando no estoy escribiendo código, me encuentro aprendiendo nuevas tecnologías, colaborando
            en proyectos open source o explorando tendencias del mundo tech.
          </p>

          <!-- Datos de contacto -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <div v-for="(item, i) in contactCards" :key="i"
              class="glass-card rounded-xl p-3 flex items-center gap-3">
              <span class="text-xl">{{ item.icon }}</span>
              <div>
                <p class="text-xs text-[#8099cc] font-medium">{{ item.label }}</p>
                <p class="text-sm text-[#e8f0ff] font-semibold">{{ item.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex gap-3">
            <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer"
              :class="link.style">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Mis valores -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Mis <span class="gradient-text">Valores</span>
          </h2>
          <p class="text-[#8099cc]">Los principios que guían mi trabajo y relaciones profesionales</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(val, i) in values"
            :key="i"
            class="glass-card rounded-2xl p-6 text-center reveal-scale group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)]"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div class="text-4xl mb-4">{{ val.icon }}</div>
            <h3 class="font-bold text-[#e8f0ff] text-lg mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">{{ val.title }}</h3>
            <p class="text-[#8099cc] text-sm leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Soft skills -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Habilidades <span class="gradient-text">Blandas</span>
          </h2>
          <p class="text-[#8099cc]">Capacidades interpersonales que potencian mi trabajo técnico</p>
        </div>

        <div class="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <div
            v-for="(skill, i) in softSkills"
            :key="i"
            class="glass-card rounded-xl p-5 reveal"
            :style="`transition-delay: ${i * 70}ms`"
          >
            <div class="flex justify-between items-center mb-3">
              <span class="font-semibold text-[#e8f0ff]">{{ skill.label }}</span>
              <span class="text-sm font-bold text-[#00d4ff]">{{ skill.level }}%</span>
            </div>
            <div class="h-2 rounded-full bg-[rgba(255,255,255,0.06)]">
              <div
                class="h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{
                  width: skill.level + '%',
                  background: 'linear-gradient(90deg, #00d4ff, #4f7ef7)',
                  boxShadow: '0 0 10px rgba(0,212,255,0.4)',
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Intereses -->
      <div class="mb-20">
        <div class="text-center mb-12 reveal">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
            Intereses &amp; <span class="gradient-text">Hobbies</span>
          </h2>
          <p class="text-[#8099cc]">Lo que me apasiona más allá del trabajo</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(item, i) in interests"
            :key="i"
            class="glass-card rounded-2xl p-6 flex items-start gap-4 reveal group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            :style="`transition-delay: ${i * 60}ms`"
          >
            <span class="text-3xl flex-shrink-0">{{ item.icon }}</span>
            <div>
              <h3 class="font-bold text-[#e8f0ff] mb-1 group-hover:text-[#00d4ff] transition-colors duration-300">{{ item.label }}</h3>
              <p class="text-sm text-[#8099cc]">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="glass-card rounded-3xl p-10 text-center reveal"
        style="background: linear-gradient(135deg, rgba(0,212,255,0.04), rgba(124,58,237,0.04)); border-color: rgba(0,212,255,0.15);">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#e8f0ff] mb-3">
          ¿Interesado en trabajar juntos?
        </h2>
        <p class="text-[#8099cc] mb-8 max-w-xl mx-auto">
          Conoce mi perfil profesional o explora mis proyectos para saber cómo puedo agregar valor a tu equipo.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/profesional" class="btn-primary">
            Ver perfil profesional
          </RouterLink>
          <RouterLink to="/proyectos" class="btn-outline">
            Ver proyectos
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>
