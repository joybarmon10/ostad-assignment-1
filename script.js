// Navbar
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  if (window.innerWidth > 599) {
    document.querySelector(".main").style.marginLeft = "250px";
  }
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
}

// Function to adjust layout based on screen size
function adjustLayout() {
  if (window.innerWidth >= 600) {
    document.getElementById("sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px";
  } else {
    document.getElementById("sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
  }
}

// Call adjustLayout on page load and window resize
window.onload = adjustLayout;
window.onresize = adjustLayout;

// this all off part for price + & -

document.addEventListener("DOMContentLoaded", function () {
  const packages = [
    {
      minusButton: document.querySelector(".package #minus"),
      plusButton: document.querySelector(".package #plus"),
      roomCount: document.querySelector(".package #room-count"),
      price: document.querySelector(".package #price"),
      signUpButton: document.querySelector(".package .signup"),
    },
    {
      minusButton: document.querySelector(".package-pro #minus"),
      plusButton: document.querySelector(".package-pro #plus"),
      roomCount: document.querySelector(".package-pro #room-count"),
      price: document.querySelector(".package-pro #price"),
      signUpButton: document.querySelector(".package-pro .signup2"),
      thankYouMessage: document.getElementById("thank-you"),
    },
  ];

  packages.forEach((pkg) => {
    let rooms = 1;
    const basePrice = parseFloat(pkg.price.textContent.replace("$", "").trim());

    pkg.plusButton.addEventListener("click", function () {
      rooms++;
      updateDisplay(pkg, rooms, basePrice);
    });

    pkg.minusButton.addEventListener("click", function () {
      if (rooms > 1) {
        rooms--;
        updateDisplay(pkg, rooms, basePrice);
      }
    });

    if (pkg.signUpButton) {
      pkg.signUpButton.addEventListener("click", function () {
        if (pkg.thankYouMessage) {
          pkg.thankYouMessage.textContent = `Thank you for choosing ${rooms} room${
            rooms > 1 ? "s" : ""
          }`;
          pkg.thankYouMessage.style.display = "block";
        } else {
          alert(`Thank you for choosing ${rooms} room${rooms > 1 ? "s" : ""}`);
        }
      });
    }
  });

  function updateDisplay(pkg, rooms, basePrice) {
    pkg.roomCount.textContent = `${rooms} room${rooms > 1 ? "s" : ""}`;
    pkg.price.textContent = `$${rooms * basePrice}`;
  }

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        event.preventDefault();
        alert("All fields are required!");
      }
    });
});
