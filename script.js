const moodContainer = document.getElementById('mood-container');
   const addMoodButton = document.getElementById('add-mood');
   const moods = ['😊', '😐', '😢', '😡', '😴'];

   addMoodButton.addEventListener('click', () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const date = new Date().toLocaleDateString();
    const moodElement = document.createElement('div');
    moodElement.innerHTML = `<span>${date}: ${randomMood}</span>`;
    moodContainer.appendChild(moodElement);
    });
   
