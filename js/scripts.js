// let acc = document.getElementsByClassName("accordion");
// let openAccordion = null;
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active")
    
   

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;

//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//       this.querySelector(".ps").src = "/assets/icons8-plus-50.png";
//       openAccordion = null;
  
//     } else {
//       // Close any open accordion
//       if (openAccordion !== null) {
//         openAccordion.nextElementSibling.style.display = "none";
//         openAccordion.querySelector(".ps").src = "/assets/icons8-plus-50.png";
//       }

//       panel.style.display = "block";
//       this.querySelector(".ps").src = "/assets/icons8-cross-50.png";
//       openAccordion = this;
//     }
//   });
// }






// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll(".accordion");
  let openAccordion = null;

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionContent = this.nextElementSibling;

      if (accordionContent.style.display === 'block') {
        accordionContent.style.display = 'none';
        this.querySelector(".ps").src = "/assets/icons8-plus-50.png";
        openAccordion = null;
      } else {
        // Close any open accordion
        if (openAccordion !== null) {
          openAccordion.nextElementSibling.style.display = 'none';
          openAccordion.querySelector(".ps").src = "/assets/icons8-plus-50.png";
        }

        accordionContent.style.display = 'block';
        this.querySelector(".ps").src = "/assets/icons8-cross-50.png";
        openAccordion = this;
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const redirectButton = document.getElementById("redirectButton");

  redirectButton.addEventListener("click", function () {
    // netflix-login-page
    window.location.href = "https://www.netflix.com/login";
  });
});


 // Get the SVG element
  const svgElement = document.querySelector("svg");

  // Get the select box
  const selectBox = document.getElementById("select-top");

  // Add click event listener to the SVG element
  svgElement.addEventListener('click', function() {
    // Simulate click event on the select box
    selectBox.click();
  });














