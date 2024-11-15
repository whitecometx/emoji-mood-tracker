const moodContainer = document.getElementById('mood-container');
   const addMoodButton = document.getElementById('add-mood');
   const moods = ['😊', '😐', '😢', '😡', '😴'];

   // Add this to script.js
   function saveMood(date, mood) {
      const moods = JSON.parse(localStorage.getItem('moods')) || {};
      moods[date] = mood;
      localStorage.setItem('moods', JSON.stringify(moods));
  }

  function loadMoods() {
      const moods = JSON.parse(localStorage.getItem('moods')) || {};
      Object.entries(moods).forEach(([date, mood]) => {
          const moodElement = document.createElement('div');
          moodElement.innerHTML = `<span>${date}: ${mood}</span>`;
          moodContainer.appendChild(moodElement);
      });
  }

  // Modify the addMoodButton event listener
  addMoodButton.addEventListener('click', () => {
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      const date = new Date().toLocaleDateString();
      saveMood(date, randomMood);
      const moodElement = document.createElement('div');
      moodElement.innerHTML = `<span>${date}: ${randomMood}</span>`;
      moodContainer.appendChild(moodElement);
  });

  // Call loadMoods when the page loads
  loadMoods();

   
