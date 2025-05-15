<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            <a href="index.php" class="flex items-center gap-2">
                <i data-lucide="lightbulb" class="h-8 w-8 text-purple-700"></i>
                <span class="font-bold text-xl text-gray-900">IFA FOUNDATION</span>
            </a>
            
            <nav class="hidden md:flex items-center space-x-6">
                <a href="index.php" class="nav-link">Home</a>
                <a href="index.php?page=about" class="nav-link">About</a>
                <a href="index.php?page=services" class="nav-link">Services</a>
                <a href="index.php?page=contact" class="nav-link">Contact</a>
                
                <?php if (isLoggedIn()): ?>
                    <a href="index.php?page=dashboard" class="nav-link">Dashboard</a>
                    <form action="actions/logout.php" method="post" class="inline">
                        <button type="submit" class="nav-link">Logout</button>
                    </form>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        <?php echo htmlspecialchars($_SESSION['user_name']); ?>
                    </span>
                <?php else: ?>
                    <a href="index.php?page=login" class="nav-link">Login</a>
                    <a href="index.php?page=signup" class="btn-primary">Sign Up</a>
                <?php endif; ?>
            </nav>
            
            <button id="mobile-menu-button" class="md:hidden">
                <i data-lucide="menu" class="h-6 w-6"></i>
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden mt-4">
            <nav class="flex flex-col space-y-4">
                <a href="index.php" class="nav-link">Home</a>
                <a href="index.php?page=about" class="nav-link">About</a>
                <a href="index.php?page=services" class="nav-link">Services</a>
                <a href="index.php?page=contact" class="nav-link">Contact</a>
                
                <?php if (isLoggedIn()): ?>
                    <a href="index.php?page=dashboard" class="nav-link">Dashboard</a>
                    <form action="actions/logout.php" method="post">
                        <button type="submit" class="nav-link w-full text-left">Logout</button>
                    </form>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm inline-block">
                        <?php echo htmlspecialchars($_SESSION['user_name']); ?>
                    </span>
                <?php else: ?>
                    <a href="index.php?page=login" class="nav-link">Login</a>
                    <a href="index.php?page=signup" class="btn-primary text-center">Sign Up</a>
                <?php endif; ?>
            </nav>
        </div>
    </div>
</header>