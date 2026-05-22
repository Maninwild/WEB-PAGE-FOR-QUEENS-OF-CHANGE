document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateButtonText(currentTheme);

        themeToggleBtn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
    }

    function updateButtonText(theme) {
        themeToggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    const volunteerForm = document.getElementById('volunteerForm');
    const messageTextarea = document.getElementById('message');
    const charCountSpan = document.getElementById('charCount');
    const formContainer = document.getElementById('formContainer');

    if (messageTextarea && charCountSpan) {
        messageTextarea.addEventListener('input', (e) => {
            const length = e.target.value.length;
            charCountSpan.textContent = `${length} / 500 characters`;
            
            if (length >= 480) {
                charCountSpan.style.color = '#ef4444'; 
            } else {
                charCountSpan.style.color = '';
            }
        });
    }
    if (volunteerForm && formContainer) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const submitBtn = document.getElementById('submitBtn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            setTimeout(() => {
                formContainer.innerHTML = `
                    <div class="success-state">
                        <span class="success-icon">✓</span>
                        <h3>Application Submitted!</h3>
                        <p>Thank you for stepping up to lead change. Our onboarding team will review your answers and email you within 2 to 3 business days.</p>
                        <p style="margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.5;">Redirecting you back to home page...</p>
                    </div>
                `;
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 4500);
                
            }, 1200);
        });
    }
});