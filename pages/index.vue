<template>
    <MainLayout>
        <div class="products" v-if="products">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-3 col-md-4"
                        v-for="product in products.data"
                        :key="product.id"
                    >
                        <ProductCard :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let products = ref(null);
onBeforeMount(async () => {
    products.value = await useFetch("/api/prisma/get-all-products");
    userStore.isLoading = false;
    // setTimeout(() => (userStore.isLoading = false), 1000);
});
</script>
