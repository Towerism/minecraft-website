<template>
  <p>
    <span class="mr-2"> 🔗 Server IP (click to copy): </span>
    <code class="hover:underline cursor-pointer" @click="copyText">{{
      displayText
    }}</code>
  </p>
</template>

<script setup>
const props = defineProps({
  ip: {
    type: String,
    required: true,
  },
});

const displayText = ref(props.ip);

function copyText() {
  displayText.value = "Copied!";
  navigator.clipboard.writeText(props.ip);

  setTimeout(() => {
    displayText.value = props.ip;
  }, 2000);
}
</script>
