console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchWord');
    const submitButton = document.getElementById('submitSearch');
    const imageElement = document.querySelector('#imageContainer img');
  
    submitButton.addEventListener('click', () => {
      const apiKey = 'xgsTJW5PNOP68caIOzgfHNAcaZ5APTvk'; 
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm !== '') {
        const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            
            imageElement.src = data.data.images.original.url;
          })
          .catch(error => {
            console.error(error);
          
          });
      } else {
        console.log('Please enter a search term.');
       
      }
    });
  });