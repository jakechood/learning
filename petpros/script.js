document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pageForm").addEventListener("submit", function (event) {
        var email = document.getElementById("emailIn").value;
        var confEmail = document.getElementById("confEmail").value;

        // Check if email fields match
        if (email !== confEmail) {
            document.getElementById("emailError").classList.remove("hidden");
            event.preventDefault(); // Prevent form submission
        } else {
            document.getElementById("emailError").classList.add("hidden");
        }

        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email address");
            event.preventDefault(); // Prevent form submission
        }
    });
});
/* Toggle between showing and hiding the original navigation menu links when the user clicks on the hamburger menu / bar icon */
// function openMenu() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   };

// const popover = document.getElementById("myLinks");
// const toggleBtn = document.getElementById("navButton");

// // Check for popover API support.
// function supportsPopover() {
//   return HTMLElement.prototype.hasOwnProperty("popover");
// }

// if (supportsPopover()) {
//   // Set the <div> element to be an auto popover
//   popover.popover = "auto";
//   // Set the button popover target to be the popover
//   toggleBtn.popoverTargetElement = popover;

//   // Set that the button toggles popover visibility
//   toggleBtn.popoverTargetAction = "toggle";
// } else {
//   popover.textContent = "Popover API not supported.";
//   toggleBtn.hidden = true;
// }

// Contact form validation & display
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("pageForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

// New navbar functions
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}