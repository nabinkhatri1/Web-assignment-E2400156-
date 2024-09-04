document.addEventListener('DOMContentLoaded', function() {
    // Hover Effect on Navigation Bar
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#004d00';  // Darker green on hover
            this.style.color = '#b3ffb3';  // Light green text on hover
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';  // Reset background color
            this.style.color = '';  // Reset text color
        });
    });




    
    // Search Bar Functionality
    const searchBar = document.querySelector('.search-bar input[type="text"]');

    searchBar.addEventListener('focus', function() {
        this.style.borderColor = '#009900';  // Brighter green border on focus
    });

    searchBar.addEventListener('blur', function() {
        this.style.borderColor = '#004d00';  // Reset border color on blur
    });

    // Social Media Icon Hover Effect
    const socialMediaIcons = document.querySelectorAll('.header-right img');

    socialMediaIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';  // Slightly enlarge the icon on hover
        });

        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';  // Reset the icon size
        });
    });

    // Toggle Navigation Bar on Mobile View 
    const nav = document.querySelector('nav ul');
    const toggleNav = document.createElement('button');
    toggleNav.textContent = '☰';  // Hamburger menu icon
    toggleNav.className = 'nav-toggle';
    document.querySelector('nav').prepend(toggleNav);

    toggleNav.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');  
        }
    });

    // Scroll Effect for Sticky Header Resize
    const header = document.querySelector('header'); // Target header element
    const shrinkOn = 100; // Scroll position where header should shrink

    window.addEventListener('scroll', function() {
        if (window.scrollY > shrinkOn) {
            header.classList.add('shrink'); // Add class to shrink header
        } else {
            header.classList.remove('shrink'); // Remove class if scrolled back up
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {


    // Slideshow Background Image 
    const images = [
        'bgimage1.jpg',
        'purple-crocus.webp',
        'bgimage2.jpg',
        'habiscus-yellow.webp',
        'aster.webp',
        '10000.webp',
        'parijat.webp',
    ];
    let currentImageIndex = 0;
    const slideshowImage = document.querySelector('.slideshow-image');

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    // Initial image load
    slideshowImage.style.backgroundImage = `url(${images[0]})`;

    // Change image every 4 seconds
    setInterval(changeImage, 4000);
});

// .....................................................................

document.addEventListener('DOMContentLoaded', function() {
    //  effect on the "Buy Now" button
    const buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            //  animation on click
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);

            //  direct to a cart page
            alert('Product added to cart!');
        });
    });
});
// ........................................................................



// new arrivals section script

document.addEventListener('DOMContentLoaded', function() {
    // Hover effect on "Buy Now" button
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#009900';  // Lighter green on hover
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#004d00';  // Reset to dark green
        });
    });
});



// about section script

document.addEventListener('DOMContentLoaded', function() {
    // Hover Effect for Team Member Photos
    const teamMembers = document.querySelectorAll('.team-member img');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        member.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Hover Effect for Submit Button in Feedback Section
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#006600';  // Brighter green on hover
    });

    submitBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#004d00';  // Reset to dark green
    });

    // Hover Effect for Social Icons
    const socialIcons = document.querySelectorAll('.social-icons img, .company-contact img');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
