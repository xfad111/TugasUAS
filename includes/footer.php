<footer class="bg-gray-900 text-gray-300 mt-auto">
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <a href="index.php" class="flex items-center gap-2 mb-4">
                    <i data-lucide="lightbulb" class="h-6 w-6 text-purple-400"></i>
                    <span class="font-bold text-lg text-white">IFA FOUNDATION</span>
                </a>
                <p class="mb-4 text-sm leading-relaxed">
                    Providing innovative creative solutions to help businesses grow and thrive in today's competitive market.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i data-lucide="facebook" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i data-lucide="instagram" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i data-lucide="twitter" class="h-5 w-5"></i>
                    </a>
                </div>
            </div>
            
            <!-- Quick Links -->
            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="index.php" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="index.php?page=about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
                    <li><a href="index.php?page=contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            
            <!-- Services -->
            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Our Services</h3>
                <ul class="space-y-2">
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Content Creation</a></li>
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Video Production</a></li>
                    <li><a href="index.php?page=services" class="text-gray-400 hover:text-white transition-colors">Social Media Management</a></li>
                </ul>
            </div>
            
            <!-- Contact Information -->
            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Contact Us</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <i data-lucide="map-pin" class="h-5 w-5 text-purple-400 mr-2 mt-0.5"></i>
                        <span>123 Creative Street, Design District, 10001</span>
                    </li>
                    <li class="flex items-center">
                        <i data-lucide="phone" class="h-5 w-5 text-purple-400 mr-2"></i>
                        <span>+1 (555) 123-4567</span>
                    </li>
                    <li class="flex items-center">
                        <i data-lucide="mail" class="h-5 w-5 text-purple-400 mr-2"></i>
                        <span>info@ifafoundation.com</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">
                &copy; <?php echo date('Y'); ?> IFA Foundation. All rights reserved.
            </p>
            <div class="mt-4 md:mt-0">
                <ul class="flex space-x-6 text-sm">
                    <li>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
</script>