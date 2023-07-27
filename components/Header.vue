<template>
    <header class="header">
        <div class="container">
            <div class="header__top">
                <div class="header__top-search">
                    <Icon
                        class="header-search__icon"
                        name="ph:magnifying-glass"
                        size="18"
                    />
                    <input
                        class="header__input"
                        type="text"
                        placeholder="Шукати"
                        v-model="searchItem"
                        @blur="isInputOnFocus = false"
                        @focus="isInputOnFocus = true"
                    />
                    <Icon
                        v-if="isSearching"
                        name="eos-icons:loading"
                        size="18"
                        class="header-loading__icon"
                    />
                    <div
                        class="header__top-result"
                        v-if="items && items.data && isInputOnFocus"
                    >
                        <h6
                            class="result-item__title"
                            v-if="!items.data.length"
                        >
                            Немає жодних співпадінь
                        </h6>
                        <div
                            v-for="item in items.data"
                            :key="item.id"
                            class="result-item"
                        >
                            <NuxtLink
                                :to="`/item/${item.id}`"
                                class="result-item__link"
                            >
                                <img class="result-item__img" :src="item.url" />
                                <div class="result-item__title">
                                    {{ item.title }}
                                </div>
                                <div class="result-item__price">
                                    ${{ item.price / 100 }}
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="header__top-logo">
                    <NuxtLink to="/">Avenue 8</NuxtLink>
                </div>
                <div class="header__top-items">
                    <div v-if="!user" class="header__top-item">
                        <Icon name="ph:user" size="20" />
                        Акаунт
                        <div class="account-menu">
                            <span> Увійдіть у Ваш акаунт </span>
                            <NuxtLink class="btn" to="/auth">Увійти</NuxtLink>
                        </div>
                    </div>
                    <div v-else class="header__top-item">
                        <Icon name="ph:user" size="20" />
                        {{ user.email }}
                        <div class="account-menu">
                            <NuxtLink to="/orders">Мої замовлення</NuxtLink>
                            <button class="btn" @click="client.auth.signOut()">
                                Вийти
                            </button>
                        </div>
                    </div>
                    <NuxtLink class="header__top-item" to="/shoppingcart">
                        <Icon name="solar:cart-outline" size="20" />
                        Кошик
                        <span
                            v-if="userStore.cart.length"
                            class="header__top-indicator"
                            >{{ userStore.cart.length }}</span
                        >
                    </NuxtLink>
                </div>
            </div>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <NuxtLink to="/">Розпродаж</NuxtLink>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="/">Новинки</NuxtLink>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="/">Жінкам</NuxtLink>
                        <div class="sub-menu">
                            <div class="row">
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Одяг</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Сукні</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/"
                                                >Сорочки, блузки</NuxtLink
                                            >
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/"
                                                >Футболки, топи</NuxtLink
                                            >
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Топи</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Спідниці</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Джинси</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Штани</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Аксесуари</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Сумки</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/"
                                                >Сонцезахисні окуляри</NuxtLink
                                            >
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Пояси</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Гаманець</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Портфелі</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Взуття</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Кросівки</NuxtLink>
                                        </li>

                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Пояси</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Гаманець</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Портфелі</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="/">Чоловікам</NuxtLink>
                        <div class="sub-menu">
                            <div class="row">
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Одяг</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Сорочки</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Футболки</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Куртки</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Поло</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Джинси</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Штани</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Аксесуари</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Сумки</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/"
                                                >Сонцезахисні окуляри</NuxtLink
                                            >
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Пояси</NuxtLink>
                                        </li>
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Гаманець</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h3 class="sub-menu__title">Взуття</h3>
                                    <ul class="sub-menu__list">
                                        <li class="sub-menu__item">
                                            <NuxtLink to="/">Кросівки</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const client = useSupabaseClient();
const user = useSupabaseUser();
const isInputOnFocus = ref(false);

let isSearching = ref(false);
const searchItem = ref("");
let items = ref(null);

const searchByName = useDebounce(async () => {
    isSearching.value = true;
    items.value = await useFetch(
        `/api/prisma/search-by-name/${searchItem.value}`
    );
    isSearching.value = false;
}, 100);

watch(
    () => searchItem.value,
    async () => {
        if (!searchItem.value) {
            setTimeout(() => {
                items.value = "";
                isSearching.value = false;
                return;
            }, 500);
        }
        searchByName();
    }
);
</script>

