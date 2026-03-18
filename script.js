
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
            console.log(buttons);

   buttons.forEach(button => {
    button.addEventListener("click",()=>{
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const tabId=button.dataset.tab;

    contents.forEach(content=> content.style.display="none");

    document.getElementById(tabId).style.display="block";
});
    });

    // ...existing code...

// Cookie consent logic
document.addEventListener('DOMContentLoaded', function() {
    const consentBanner = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');

    // Function to get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to set cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

    // Check if consent cookie exists
    if (!getCookie('cookieConsent')) {
        consentBanner.style.display = 'block';
    }

    // Handle accept button click
    acceptButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365); // Expires in 1 year
        consentBanner.style.display = 'none';
    });
});