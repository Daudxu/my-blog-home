<template>
    <div class="text-white w-full h-full container m-auto">
        <div class="flex justify-center"> 
        </div>
        <!-- <button class="bg-slate-400 " @click="handleIClickFullScreen">Full Screen</button> -->
    </div>

</template>

<script setup>
 import { ref } from "vue"
const myIframe = ref(null);
const handleIframeLoad = () => {
    window.addEventListener("message", function(event) {
       console.log("event", event.data)
    })
}
const handleIClickFullScreen = () => {

    const iframe = myIframe.value;
    // iframe.contentWindow.focus()
    iframe.click();

    const message = {
        "FullScreen" : true
    };
    iframe.contentWindow.postMessage(JSON.stringify(message), '*')
}
function requestFullscreen(element) {
  if (element.value.requestFullscreen) {
    element.value.requestFullscreen();
  } else if (element.value.mozRequestFullScreen) {
    element.value.mozRequestFullScreen();
  } else if (element.value.webkitRequestFullscreen) {
    element.value.webkitRequestFullscreen();
  } else if (element.value.msRequestFullscreen) {
    element.value.msRequestFullscreen();
  }
}

// Function to exit full-screen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// Function to toggle full-screen and click inside the iframe
function toggleFullscreenAndClick() {
  if (document.fullscreenElement) {
    exitFullscreen();
  } else {
    requestFullscreen(myIframe);
    focusIframeAndTriggerClick();
  }
}

// Function to focus on the iframe and trigger a click event inside it
function focusIframeAndTriggerClick() {
    myIframe.value.contentWindow.focus();
    // myIframe.value.contentWindow.postMessage({ action: 'clickInsideIframe' }, '*');
    const message = {
        "FullScreen" : true
    };
    myIframe.value.contentWindow.postMessage(JSON.stringify(message), '*')
}
</script>
