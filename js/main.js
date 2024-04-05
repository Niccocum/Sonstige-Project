(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
   
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    //DataLayer
    window.dataLayer = window.dataLayer || [];

    const ClickCandidateButtons = document.querySelectorAll(".blog-item .btn");

    // Function to handle button click event
    const viewCandidate = (event) => {
        // Get the candidate name from the nearest h3 element
        const candidateName = event.target.parentNode.querySelector("h3").textContent;
    
        // Push candidate name to the dataLayer
        dataLayer.push({
            event:"view candidate",
            name: candidateName
        });
    
        // Log the updated dataLayer
        console.log(dataLayer);

    };
    
    // Attach click event listener to all selected buttons
    ClickCandidateButtons.forEach((link) => {
        link.addEventListener("click", viewCandidate);
    });
    

    // Newsletter Subscription JS
    document.addEventListener("DOMContentLoaded", function() {
        const emailForm = document.getElementById("emailForm");
        const emailInput = document.getElementById("mail");
    
        emailForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
    
            // Do something with the email address, such as sending it to a server
            const emailAddress = emailInput.value;
            console.log("Submitted email address:", emailAddress);
    
            // Clear the input field
            emailInput.value = "";
        });
    });
    

})(jQuery);


