document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('#navbar ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hide/show navbar on scroll
    let prevScrollPos = window.pageYOffset;
    let visible = true; // flag to track navbar visibility
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos && !visible) {
            // User is scrolling up and navbar is not visible
            navbar.style.top = "0";
            visible = true;
        } else if (prevScrollPos < currentScrollPos && visible && currentScrollPos > navbarHeight) {
            // User is scrolling down and navbar is visible and not at the top of the page
            navbar.style.top = `-${navbarHeight}px`;
            visible = false;
        }

        prevScrollPos = currentScrollPos;
    });
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyO5jvg5uejttX0wlyDcXEeCXnC_XZL5v8lNm35d-1-W_dGyXYIITOYrz3hzLQfsyEe/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => [
        msg.innerHTML = "Message sent successfully!!"
       , setTimeout (function(){
            msg.innerHTML = ""
        },5000)
        ,form.reset()
      ])
      .catch(error => console.error('Error!', error.message))
  })
