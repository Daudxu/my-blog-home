<template>
    <div class="fullpage-container">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="section"
        :style="{ transform: `translateY(-${index * 100}%)` }"
      >
        <!-- 每个 section 的内容 -->
        <slot :sectionIndex="index" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const sections = ref([]);
  const scrollHandler = () => {
    const scrollY = window.scrollY;
    const activeSectionIndex = Math.floor(scrollY / window.innerHeight);
    sections.value.forEach((section, index) => {
      if (index === activeSectionIndex) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  };
  
  onMounted(() => {
    sections.value = document.querySelectorAll('.section');
    window.addEventListener('scroll', scrollHandler);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollHandler);
  });
  </script>
  
  <style scoped>
  .fullpage-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  
  .section {
    width: 100%;
    height: 100vh;
    transition: transform 0.5s;
    will-change: transform;
  }
  
  .section.active {
    transform: translateY(0);
  }
  </style>
  