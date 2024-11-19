// JavaScript to handle the logout functionality
document.addEventListener("DOMContentLoaded", () => {
    const logoutForm = document.querySelector("form");
    
    // Event listener for the form submission
    logoutForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
      
      // Simulate clearing session data (if any is stored in localStorage/sessionStorage)
      if (window.localStorage) {
        localStorage.clear();
      }
      if (window.sessionStorage) {
        sessionStorage.clear();
      }
      
      // Confirmation alert
      const confirmed = confirm("Are you sure you want to log out?");
      if (confirmed) {
        // Redirect to home page
        window.location.href = "index.html";
      }
    });
  });