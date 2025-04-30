
const togglebtn = document.querySelector('.toggle_btn');
        const togglebtnicon = document.querySelector('.toggle_btn i');
        const dropdownmenu = document.querySelector('.dropdown_menu');

        togglebtn.onclick = function () { // Corrected 'onclik' to 'onclick'
            dropdownmenu.classList.toggle('open');
            const isopen = dropdownmenu.classList.contains('open');

            togglebtnicon.classList = isopen
                ? 'fa-solid fa-xmark' // Changed to 'fa-xmark' for the close icon
                : 'fa-solid fa-bars'; // Default icon for the hamburger menu
        };


// home scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-home').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#section-child').offset().top
        }, 1000); // 2000 ms = 2 second
    });
});

// about scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-about').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#about-header').offset().top
        }, 1000); // 2000 ms = 2 second
    });
});

// project scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-project').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#projects').offset().top
        }, 1000); // 2000 ms = 2 second
    });
});

// skills scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-skill').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 1000); // 2000 ms = 2 second
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills-section');
    let animationTriggered = false;
    
    // Set target offsets for circular progress
    document.querySelectorAll('.radial-progress').forEach(circle => {
        const percent = parseInt(circle.querySelector('.percentage').textContent);
        const offset = 440 - (440 * percent / 100);
        circle.querySelector('.circle-fill').style.setProperty('--target-offset', offset);
    });
    
    function checkVisibility() {
        const rect = skillsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Check if at least 50% of the element is visible
        const isVisible = (
            rect.top <= windowHeight * 0.75 &&
            rect.bottom >= windowHeight * 0.25
        );
        
        if (isVisible && !animationTriggered) {
            skillsSection.classList.add('in-view');
            animationTriggered = true;
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    function handleScroll() {
        if (!animationTriggered) {
            requestAnimationFrame(checkVisibility);
        }
    }
    
    // Initial check
    checkVisibility();
    
    // Listen for scroll events with debounce
    window.addEventListener('scroll', handleScroll);
    
    // Also check on resize
    window.addEventListener('resize', handleScroll);
});