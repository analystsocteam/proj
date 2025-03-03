import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import jQuery
import $ from 'jquery';
window.$ = window.jQuery = $;

// Initialize jQuery
$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset()?.top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Product card hover effect
  $('.product-card').hover(
    function() {
      $(this).addClass('shadow-lg').css('transform', 'translateY(-5px)');
    },
    function() {
      $(this).removeClass('shadow-lg').css('transform', 'translateY(0)');
    }
  );

  // Add to cart animation
  $('.add-to-cart-btn').on('click', function() {
    $(this).addClass('animate-pulse');
    setTimeout(() => {
      $(this).removeClass('animate-pulse');
    }, 1000);
  });

  // Mobile menu toggle
  $('.mobile-menu-toggle').on('click', function() {
    $('.mobile-menu').toggleClass('hidden visible');
  });

  // Quantity buttons
  $('.quantity-btn').on('click', function() {
    const input = $(this).siblings('input');
    const currentValue = parseInt(input.val() as string);
    
    if ($(this).hasClass('quantity-minus') && currentValue > 1) {
      input.val(currentValue - 1);
    } else if ($(this).hasClass('quantity-plus')) {
      input.val(currentValue + 1);
    }
  });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);