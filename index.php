<?php
session_start();
require_once 'config/database.php';
require_once 'includes/auth.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IFA FOUNDATION | Creative Services</title>
    <meta name="description" content="IFA FOUNDATION offers premium creative services to help businesses thrive in today's competitive market.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="font-sans antialiased bg-gray-50 text-gray-900">
    <?php include 'includes/header.php'; ?>
    
    <main>
        <?php
        $page = isset($_GET['page']) ? $_GET['page'] : 'home';
        $file = "pages/$page.php";
        
        if (file_exists($file)) {
            include $file;
        } else {
            include 'pages/home.php';
        }
        ?>
    </main>

    <?php include 'includes/footer.php'; ?>
    
    <script src="assets/js/main.js"></script>
</body>
</html>