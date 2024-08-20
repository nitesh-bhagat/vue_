<script setup>

const footerLinks = [
    { href: "/", title: "Home"},
    { href: '/about', title: 'About Us' },
    { href: '/contact', title: 'Contact Us' },
    { href: '/privacy-policy', title: 'Privacy Policy' },
    { href: '/terms-of-service', title: 'Terms of Service' },
    { href: '/careers', title: 'Careers' },
    { href: '/faq', title: 'FAQ' },
    { href: '/blog', title: 'Blog' },
    { href: '/support', title: 'Support' },
    { href: '/newsletter', title: 'Newsletter' },
    { href: '/sitemap', title: 'Sitemap' },
    { href: '/press', title: 'Press' },
    { href: '/events', title: 'Events' },
    { href: '/testimonials', title: 'Testimonials' },
    { href: '/partners', title: 'Partners' },
    { href: '/media-kit', title: 'Media Kit' }
]


</script>

<template>
    <footer class="flex flex-col items-center w-full text-white">
        <div class="bg-purple-600 w-full px-32 py-2">
            <span>Follow us on socialqwd3d media</span>
        </div>
        <div class="flex flex-row w-full bg-purple-700 px-3 py-10 ">

            <div class="mr-32 "></div>

            <div class="grid grid-rows-4 grid-flow-col gap-3 flex-1 place-items-start  ">
          
                <RouterLink v-for="menu in footerLinks"  :to="menu.href" :key="menu.href">
                    <span>
                        {{ menu.title }}
                    </span>
                </RouterLink>
               
            </div>

            <div class="flex flex-col w-1/5 ">
                <h1 class="font-bold text-3xl">Zobs.com</h1>
                <address class="text-sm">
                    John Doe
                    1234 Elm Street
                    Apt 567
                    Springfield, IL 62704
                    USA
                </address>
            </div>
        </div>


        <div class="bg-purple-700 w-full px-20 py-2 text-center text-purple-400">
            <span>Site by Nitesh Bhagat</span>
        </div>


    </footer>
</template>