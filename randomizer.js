// Function to redirect the user to a random page
function redirectToRandomPage() {
    // Array containing the URLs of different pages
    const pages = [
        'page1.html',  // Page 1
        'page2.html',  // Page 2
        'page3.html',  // Page 3
        'page4.html',  // Page 4
        'page5.html',  // Page 5
        'page6.html'   // Page 6
    ];

    // Generate a random index based on the number of pages
    const randomIndex = Math.floor(Math.random() * pages.length);

    // Redirect the user to a randomly selected page
    window.location.href = pages[randomIndex];
}

// Add a click event listener to the button with ID "randomButton"
// When the button is clicked, the redirectToRandomPage function will be called
document.getElementById("randomButton").onclick = redirectToRandomPage;
