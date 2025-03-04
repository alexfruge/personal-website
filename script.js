document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    
    // Portfolio Filtering System
    const filterItems = document.querySelectorAll('.filter-item');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active filter
            filterItems.forEach(filterItem => {
                filterItem.classList.remove('active');
            });
            item.classList.add('active');
            
            // Get filter value
            const filterValue = item.getAttribute('data-filter');
            
            // Filter projects
            portfolioItems.forEach(project => {
                if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
    
    // Add animations to CSS for navigation only
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `, styleSheet.cssRules.length);
    
    // Toggle class for burger menu
    styleSheet.insertRule(`
        .toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
        .toggle .line2 {
            opacity: 0;
        }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
        .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `, styleSheet.cssRules.length);
});