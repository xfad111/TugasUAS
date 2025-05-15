// Initialize Lucide icons
lucide.createIcons();

// Form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
                
                const errorDiv = field.nextElementSibling;
                if (!errorDiv || !errorDiv.classList.contains('form-error')) {
                    const error = document.createElement('p');
                    error.className = 'form-error';
                    error.textContent = 'This field is required';
                    field.parentNode.insertBefore(error, field.nextSibling);
                }
            }
        });
        
        if (!isValid) {
            e.preventDefault();
        }
    });
});

// Clear form errors on input
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('border-red-500');
        const errorDiv = this.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('form-error')) {
            errorDiv.remove();
        }
    });
});