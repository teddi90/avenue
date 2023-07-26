<template>
    <Header />
    <Loading v-if="userStore.isLoading" />
    <slot />
    <Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
</script>
