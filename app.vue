<template>
    <NuxtPage />
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const route = useRoute();
let windowWidth = ref(process.client ? window.innerWidth : "");

onMounted(() => {
    userStore.isLoading = true;
    window.addEventListener("resize", function () {
        windowWidth.value = window.innerWidth;
    });
});

watch(
    () => windowWidth.value,
    () => {
        if (windowWidth.value >= 767) {
            userStore.isMenuOverlay = false;
        }
    }
);

watch(
    () => route.fullPath,
    () => {
        userStore.isLoading = true;
    }
);
</script>
