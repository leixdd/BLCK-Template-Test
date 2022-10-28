<script setup lang="ts">
import { ref } from 'vue';
import blck_logo from '../assets/lg1.png'
import blck_logo_white from '../assets/lg2_white.png'
import blck_logo_red from '../assets/lg3_red.png'

import mpls7 from '../assets/mpls7.jpg'
import mpls8 from '../assets/mpls8.jpg'
import m3 from '../assets/m3.jpg'
import seagames from '../assets/seagames.jpg'
import s10 from '../assets/s10.jpg'
import mplbonus from '../assets/mplbonus.jpg'

const primary_logo = ref(blck_logo_white);

function inImage() {
    primary_logo.value = blck_logo_red
}

function outImage() {
    primary_logo.value = blck_logo_white
}

const images = [
    { src: mpls7, alt: 'MPLS7', link: 'https://www.youtube.com/watch?v=Ej-CIWa1gyM&list=PLXiiZUZYAv6jwczCPy3ISdjqzFgVET1M6&index=20' },
    { src: mplbonus, alt: 'MPLS8', link: 'https://www.youtube.com/watch?v=u3Sv-xr3i7M&list=PLXiiZUZYAv6jwczCPy3ISdjqzFgVET1M6&index=24' },
    { src: mpls8, alt: 'MPLS8', link: 'https://www.youtube.com/watch?v=_IGAS-dL6Uk&t=322s' },
    { src: m3, alt: 'M3', link: 'https://www.youtube.com/watch?v=LaWl8oclxBw' },
    { src: seagames, alt: 'SEA Games', link: 'https://www.youtube.com/watch?v=SKo0HDIP4Qo' },
    { src: s10, alt: 'S10', link: 'https://www.youtube.com/watch?v=Cc7R3UUDjfk' },
]

</script>

<template>
    <header class="bg-transparent relative z-50 top-3">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a class="block text-white" href="/">
                <span class="sr-only">Home</span>
                <img :src="primary_logo" class="w-10" @mouseenter="inImage" @mouseleave="outImage" />
            </a>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-md">
                        <li>
                            <a class="text-gray-500 transition hover:text-red-500/75" href="/">
                                Home
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-red-500/75" href="/">
                                Events
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-red-500/75" href="/">
                                Game Matches
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-red-500/75" href="/">
                                BLCKBOX
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-red-500/75" href="https://discord.gg/blck" target="_blank">
                                Community
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <a class="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                            href="/">
                            Login
                        </a>
                    </div>

                    <button
                        class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>


    <section
        class="-mt-16 relative bg-[url(https://res.cloudinary.com/dyqcnnbee/image/upload/v1666949757/294382849_472933781500594_2210939489900388422_n_t2bc8e.jpg)] bg-black bg-right-top bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/50">
        </div>

        <div class="relative mx-10 max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-white text-center sm:text-left">
                <div class="flex justify-center sm:justify-start">
                    <img :src="blck_logo_red" class="w-10" />
                    <span class="pt-5 ml-3 text-lg"><b>S E R I E S</b></span>
                </div>
                <h1 class="text-6xl font-extrabold sm:text-8xl">
                    BREAK THE

                    <strong class="block font-extrabold text-rose-700">
                        CODE
                    </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                    Blacklist International is a Southeast Asian
                    E-Sports organization under Tier One Entertainment.
                    This group of MLBB Pro Players won multiple titles
                    such as MPL-PH back-to-back Champion Season 7 and 8
                    Won the M3 World Championship, SEA Games Gold Medal
                    and MPL-PH Season 10 Champion.
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="https://www.facebook.com/BlacklistINTL/videos/1044375709527013/" target="_blank"
                        class="block text-2xl w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                        Play
                    </a>

                    <a href="https://www.facebook.com/BlacklistINTL" target="_blank"
                        class="block w-full text-xl rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                        More Info
                    </a>
                </div>
            </div>
        </div>


    </section>

    <section>
        <div class="bg-black px-10 pb-32">
            <div class="text-white text-5xl pb-10">
                <h1>Top Picks For You</h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                <div v-for="(img, i) in images" :key="i" class="h-36">
                    <a :href="img.link" target="_blank">
                        <img :src="img.src" :alt="img.alt"
                            class="object-fill h-full w-full hover:border-4 hover:border-rose-600" />}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>