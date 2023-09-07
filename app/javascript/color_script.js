document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate-color');
  const colorPalettes = document.querySelectorAll('.color-palette');

  generateButton.addEventListener('click', function() {
      colorPalettes.forEach(palette => {
          const randomColor = generateRandomColor();
          palette.style.backgroundColor = randomColor;
          const input = palette.querySelector('.generatedColour');
          input.value = randomColor;
      });
  });

  colorPalettes.forEach(palette => {
    palette.addEventListener('click', function() {
        const input = palette.querySelector('.generatedColour');
        copyToClipboard(input.value);
        displayCopiedMessage(palette);
    });
});

  function generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch(error => {
        console.error('Failed to copy text:', error);
      });
    }


    function displayCopiedMessage(palette) {
      const copiedMessage = document.createElement('span');
      copiedMessage.classList.add('copied-message');
      copiedMessage.textContent = 'Copied!';
      palette.appendChild(copiedMessage);
      setTimeout(() => {
        palette.removeChild(copiedMessage);
      }, 2000);
    }
  });
