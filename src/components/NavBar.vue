<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { name: 'Inicio', path: '/', label: 'home' },
  { name: 'Personal', path: '/personal', label: 'personal' },
  { name: 'Profesional', path: '/profesional', label: 'profesional' },
  { name: 'Proyectos', path: '/proyectos', label: 'proyectos' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const isActive = (path) => route.path === path
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-[#060f24]/90 backdrop-blur-xl border-b border-[rgba(0,212,255,0.12)] py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="group flex items-center gap-2 text-xl font-bold no-underline"
      >
        <div
          class="w-9 h-9 rounded-lg flex items-center justify-center text-[#020918] font-black text-sm
                 bg-gradient-to-br from-[#00d4ff] to-[#4f7ef7]
                 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300"
        >
          <!-- Personaliza tus iniciales aquí -->
          AF
        </div>
        <span class="gradient-text tracking-tight hidden sm:block">Angel Franco</span>
      </RouterLink>

      <!-- Links desktop -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="relative px-4 py-2 text-sm font-medium transition-all duration-300 no-underline rounded-lg group"
          :class="isActive(link.path) ? 'text-[#00d4ff]' : 'text-[#8099cc] hover:text-[#e8f0ff]'"
        >
          <span class="relative z-10">{{ link.name }}</span>
          <!-- Indicator activo -->
          <span
            v-if="isActive(link.path)"
            class="absolute inset-0 rounded-lg bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)]"
          />
          <!-- Hover background -->
          <span
            v-else
            class="absolute inset-0 rounded-lg bg-transparent group-hover:bg-white/5 transition-all duration-300"
          />
        </RouterLink>
      </div>

      <!-- CTA + burger -->
      <div class="flex items-center gap-3">
        <a
          href="mailto:angelfranko117@gmail.com"
          class="hidden md:block btn-primary text-sm py-2 px-5"
        >
          Contáctame
        </a>

        <!-- Hamburger -->
        <button
          class="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span
            class="block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300"
            :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
          />
          <span
            class="block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300"
            :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#060f24]/95 backdrop-blur-xl border-b border-[rgba(0,212,255,0.12)]"
      >
        <div class="flex flex-col p-4 gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-200"
            :class="isActive(link.path) ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.08)]' : 'text-[#8099cc] hover:text-[#e8f0ff] hover:bg-white/5'"
            @click="menuOpen = false"
          >
            {{ link.name }}
          </RouterLink>
          <a
            href="mailto:angelfranko117@gmail.com"
            class="btn-primary mt-2 justify-center text-sm py-2"
          >
            Contáctame
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
