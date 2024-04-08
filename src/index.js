document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById('dog-breeds');

    // Challenge 1: Fetch images and add them to the DOM
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                document.body.appendChild(imageElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });

    // Challenge 2: Fetch dog breeds and display them in <ul>
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            Object.keys(data.message).forEach(breed => {
                const breedItem = document.createElement('li');
                breedItem.textContent = breed;
                breedList.appendChild(breedItem);
            });
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });

    // Challenge 3: Change font color of <li> when clicked
    breedList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'red';
        }
    });

    // Challenge 4: Filter breeds based on selected letter
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function() {
        const selectedLetter = dropdown.value.toLowerCase();
        const breedItems = breedList.getElementsByTagName('li');
        
        Array.from(breedItems).forEach(item => {
            if (item.textContent.toLowerCase().startsWith(selectedLetter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
