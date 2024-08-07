<script setup></script>

<template>
    <!-- Go Back -->
    <section>
        <div class="py-6 px-28 w-full bg-purple-100">
            <RouterLink to="/" class="text-purple-500 hover:text-purple-600 flex items-center">
                <i class="pi pi-angle-left mr-2"></i> Back to Job Listings
            </RouterLink>
        </div>
    </section>

    <section class="bg-purple-50">
        <div class="container m-auto py-10 px-6">
            <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                    <div
                        class="bg-white p-6 rounded-lg shadow-md text-center md:text-left border-l-4 border-purple-500">
                        <div class="text-gray-500 mb-4">Full-Time</div>
                        <h1 class="text-3xl font-bold mb-4">Senior Vue Developer</h1>
                        <div
                            class="text-gray-500 mb-4 flex flex-row items-center justify-center gap-1 md:justify-start">
                            <i class="pi pi-map-marker text-orange-700"></i>
                            <p class="text-orange-700">Boston, MA</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-purple-800 text-lg font-bold mb-6">
                            Job Description
                        </h3>

                        <div class="flex flex-col mb-4 gap-2">
                            <span class="font-bold text-sm ">About the role:</span>
                            <span>
                                UX writers play a critical role at CleverTap and work with designers, product
                                managers, engineers, and others to craft the messaging that guides users through the
                                CleverTap dashboard. But it’s not just the words — as a UX writer, you must think about
                                the entire user experience and how it can be made more intuitive and enjoyable.
                            </span>
                        </div>
                        <div class="flex flex-col mb-4 gap-2">
                            <span class="font-bold text-sm ">What will you do?:</span>
                            <ul>
                                <li>

                                    - Understand functionality and user interaction in various product modules to craft
                                    accurate, intuitive, and helpful copy.
                                </li>
                                <li>

                                    - Collaborate with product managers, designers, engineers, and other stakeholders to
                                    understand user and business needs.
                                </li>
                                <li>

                                    - Create copy for various UI and UX components, including system-generated updates,
                                    error messages, tooltips, modal windows, descriptions, etc.
                                </li>
                                <li>

                                    - Ensure that copy across the product is clear, concise, and adheres to our
                                    guidelines.
                                </li>
                                <li>

                                    - Conduct copy audits, market research, readability tests, etc., to improve copy
                                    across
                                    the product.
                                </li>
                                <li>

                                    - Collaborate with other UX writers to refine existing UX copy guidelines and
                                    streamline
                                    processes.
                                </li>
                                <li>

                                    - Actively participate in standups, grooming calls, and solutions discussions.
                                </li>
                            </ul>
                        </div>

                        <h3 class="text-purple-800 text-lg font-bold mb-2">Salary</h3>

                        <p class="mb-4">$70k - $80K / Year</p>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside>
                    <!-- Company Info -->
                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-start sticky top-28">
                        <h3 class="text-sm font-bold bg-purple-100 text-purple-600 px-2 py-0.5 rounded-md mb-2">
                            Company Info
                        </h3>

                        <h2 class="text-xl">NewTek Solutions</h2>

                        <p class="my-2 text-sm">
                            NewTek Solutions is a leading technology company specializing in
                            web development and digital solutions. We pride ourselves on
                            delivering high-quality products and services to our clients while
                            fostering a collaborative and innovative work environment.
                        </p>

                        <hr class="my-4" />

                        <div class="flex flex-col gap-1">
                            <h3 class="text-base">Contact Email:</h3>

                            <p class="bg-purple-100 p-2 font-bold border-l-2 border-purple-500 text-sm">
                                contact@newteksolutions.com
                            </p>
                            <div class="my-1"></div>

                            <h3 class="text-base">Contact Phone:</h3>

                            <p class="bg-purple-100 border-l-2 border-purple-500 p-2 font-bold text-sm">
                                555-555-555
                            </p>
                        </div>

                        <div class="my-1"></div>

                        <button class="bg-purple-600 w-full mt-2 p-2 rounded-md font-bold text-white">Apply Now</button>
                    </div>

                    <!-- Manage -->
                    <div v-show="false" class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                        <a href="add-job.html"
                            class="bg-purple-500 hover:bg-purple-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Edit
                            Job</a>
                        <button
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                            Delete Job
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>
