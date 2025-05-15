<?php
// Ensure this page can't be accessed directly
if (!defined('DB_HOST')) {
    header('Location: ../index.php');
    exit();
}
?>
<div class="page-transition">
    <!-- Hero Section -->
    <div class="bg-gradient-to-b from-purple-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Creative Solutions for <span class="text-primary-700">Modern Businesses</span>
                    </h1>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        IFA FOUNDATION delivers innovative creative services that help businesses stand out in today's competitive landscape. From design to development, we bring your vision to life.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="index.php?page=services" class="btn-primary text-base px-6 py-3">
                            Explore Services
                        </a>
                        <a href="index.php?page=about" class="btn-outline text-base px-6 py-3 flex items-center justify-center group">
                            Learn More 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <img 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Creative team working together" 
                        class="rounded-lg shadow-xl w-full object-cover"
                        style="max-height: 500px"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Services Overview -->
    <?php include 'components/services-overview.php'; ?>

    <!-- Testimonials -->
    <?php include 'components/testimonials.php'; ?>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-secondary-700 to-primary-700 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your creative vision to life. Our team is ready to help you stand out and succeed.
            </p>
            <a href="index.php?page=contact" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center mx-auto inline-flex">
                Get in Touch
                <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
            </a>
        </div>
    </section>
</div>