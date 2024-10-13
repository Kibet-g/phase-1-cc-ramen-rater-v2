// Base URL for the API
const baseUrl = "http://localhost:3000/ramens";

// Function to fetch and display all ramen images
const displayRamens = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach(ramen => {
        const ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenImg.alt = ramen.name;
        ramenImg.addEventListener('click', () => handleClick(ramen));
        document.getElementById('ramen-menu').appendChild(ramenImg);
      });
    });
};

// Function to handle clicking on a ramen image and displaying its details
const handleClick = (ramen) => {
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
};

// Function to add a listener to the form and create a new ramen entry
const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const newRamen = {
      name: event.target['new-name'].value,
      restaurant: event.target['new-restaurant'].value,
      image: event.target['new-image'].value,
      rating: event.target['new-rating'].value,
      comment: event.target['new-comment'].value
    };

    // Add the new ramen to the ramen-menu div
    const ramenImg = document.createElement('img');
    ramenImg.src = newRamen.image;
    ramenImg.alt = newRamen.name;
    ramenImg.addEventListener('click', () => handleClick(newRamen));
    document.getElementById('ramen-menu').appendChild(ramenImg);

    // Display the new ramen's details after adding it
    handleClick(newRamen);

    // Reset the form after submission
    form.reset();
  });
};

// Main function to initialize the app logic
const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();  // Load all ramen images
    addSubmitListener();  // Attach form submission event
  });
};

// Initialize the application
main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
