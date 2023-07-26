<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__logo">
                <NuxtLink to="/">Avenue 8</NuxtLink>
            </div>
            <div class="row">
                <div class="col-md-3 offset-md-2">
                    <h3 class="footer__title">Купити</h3>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <NuxtLink to="/">Розпродаж</NuxtLink>
                        </li>
                        <li class="footer__item">
                            <NuxtLink to="/">Новинки</NuxtLink>
                        </li>
                        <li class="footer__item">
                            <NuxtLink to="/">Жінкам</NuxtLink>
                        </li>
                        <li class="footer__item">
                            <NuxtLink to="/">Чоловікам</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3 class="footer__title">Інформація</h3>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <NuxtLink to="/">Розмірна сітка</NuxtLink>
                        </li>
                        <li class="footer__item">
                            <NuxtLink to="/">Умови поверненя</NuxtLink>
                        </li>
                        <li class="footer__item">
                            <NuxtLink to="/">Способи оплати</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3 class="footer__title">Контакти</h3>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <Icon name="basil:location-outline" size="30" />
                            м.Івано-Франківськ вул.Українська 24
                        </li>
                        <li class="footer__item">
                            <a href="tel:+380991369999"
                                ><Icon name="bi:phone" size="23" />
                                0991369999</a
                            >
                        </li>
                        <li class="footer__item">
                            <a href="#"
                                ><Icon name="fa6-brands:instagram" size="30"
                            /></a>
                            <a href="#"
                                ><Icon
                                    name="ant-design:facebook-filled"
                                    size="30"
                            /></a>
                            <a href="#"
                                ><Icon name="basil:telegram-outline" size="30"
                            /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__right">
                © Avenue 8, 2023. Усі права захищено
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>
