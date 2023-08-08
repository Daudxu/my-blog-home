<script setup>
import "vue3-fullpage/styles";
import { Vue3Fullpage } from "vue3-fullpage";
import { onMounted } from "vue";

let scene, camera, renderer;
onMounted(() => {
    // 创建场景
		scene = new THREE.Scene();
    // 相机
		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(1000,500, 5560);
    // 渲染器
		renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,//是否执行抗锯齿。默认为false.
    });
    renderer.compile(scene, camera)
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
})
</script>

<template>
<vue3-fullpage 
		disable-classes 
		class="w-full h-screen overflow-y-auto relative m-0 p-0 snap-y snap-mandatory" 
		page-class="w-full h-full snap-start" 
		navigation-class="fixed top-1/2 -translate-y-1/2 right-3 p-4 flex flex-col gap-y-5" 
		navigation-dot-class="relative flex justify-center items-center p-1.5 overflow-hidden rounded-full cursor-pointer" 
		navigation-dot-inner-class="bg-blue-100 w-2 h-2  rounded-full"
	>
      <section id="introduction">Intro</section>
      <section id="about-us">About Us</section>
      <section id="our-clients">Our Clients</section>
      <section id="contact-us">Contact Us</section>
	</vue3-fullpage>
</template>