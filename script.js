        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Закрытие модального окна при клике вне его
        window.onclick = function(event) {
            if (event.target.className === 'modal') {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
        
        // Анимка для социальных иконок
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.animation = 'bounce 0.5s ease';
            });
            link.addEventListener('animationend', () => {
                link.style.animation = '';
            });
        });