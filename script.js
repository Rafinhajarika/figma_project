document.querySelectorAll('.menu_item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.menu_item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
document.querySelector('.menu_item.active').classList.add('active');





const cartButtons = document.querySelectorAll('.cart_btn');
cartButtons[0].classList.add('active');

cartButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        cartButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});


 const tabs = document.querySelectorAll('.tab');
      const images = document.querySelectorAll('.images');
      tabs.forEach(tab => {
         tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            
            tab.classList.add('active');
  
            images.forEach(image => image.classList.remove('active'));
  
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
         });
      });


      var swiper = new Swiper(".mySwiper", {

        spaceBetween: 30,
        loop: true,
        pagination: {
          
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1367: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
      });


document.addEventListener("DOMContentLoaded", function () {
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
  const accordionItemBodies = document.querySelectorAll(".accordion-item-body");

  function toggleAccordion(header) {
      const accordionItemBody = header.nextElementSibling;
      const isActive = accordionItemBody.classList.contains("active");

      accordionItemHeaders.forEach(h => {
          if (h !== header) {
              h.classList.remove("active");
              h.nextElementSibling.classList.remove("active");
              h.nextElementSibling.style.maxHeight = 0;
          }
      });

      header.classList.toggle("active");
      accordionItemBody.classList.toggle("active");

      // Toggle display of accordion item body content
      if (accordionItemBody.classList.contains("active")) {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
          accordionItemBody.style.maxHeight = 0;
      }
  }
  accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener("click", event => {
          toggleAccordion(accordionItemHeader);
      });
  });

  accordionItemBodies.forEach(accordionItemBody => {
      accordionItemBody.addEventListener("click", event => {
          const header = accordionItemBody.previousElementSibling;
          toggleAccordion(header);
      });
  });
});

// blog_swiper
var swiper = new Swiper(".mySwiper_two", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
          
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1367: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });