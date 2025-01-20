// index.js
// Mock data for ramen images and details
const ramenData = [
  { name: 'Ramen Nirvana', restaurant: 'Nirvana', image: './assets/ramen/nirvana.jpg', rating: 10, comment: 'Best ramen ever!' },
  { name: 'Ramen 2', restaurant: 'Restaurant 2', image: './assets/ramen/ramen2.jpg', rating: 8, comment: 'Delicious and hearty.' }
];

const handleClick = (ramen, event) => {
  const ramenDetail = document.querySelector('#ramen-detail');
  ramenDetail.querySelector('.detail-image').src = ramen.image;
  ramenDetail.querySelector('.name').textContent = ramen.name;
  ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
  document.querySelector('#rating-display').textContent = ramen.rating;
  document.querySelector('#comment-display').textContent = ramen.comment;
};

// This will populate the ramen menu with images
const displayRamens = () => {
  const ramenMenu = document.querySelector('#ramen-menu');
  ramenMenu.innerHTML = ''; // Clear any previous ramen images
  ramenData.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', (event) => handleClick(ramen, event));
    ramenMenu.appendChild(img);
  });
};

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent page refresh on form submission
  const newRamen = {
    name: document.querySelector('#new-name').value,
    restaurant: document.querySelector('#new-restaurant').value,
    image: document.querySelector('#new-image').value,
    rating: document.querySelector('#new-rating').value,
    comment: document.querySelector('#new-comment').value,
  };

  ramenData.push(newRamen); // Add the new ramen to the ramenData array
  displayRamens(); // Re-render the ramen images
  
  // Reset form fields after submission
  document.querySelector('#new-ramen').reset();
};

const addSubmitListener = () => {
  const form = document.querySelector('#new-ramen');
  form.addEventListener('submit', handleSubmit);
};

// Main function to invoke the necessary methods
const main = () => {
  displayRamens(); // Initial rendering of ramen images
  addSubmitListener(); // Add event listener for form submission
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
