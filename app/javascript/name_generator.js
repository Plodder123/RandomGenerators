document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate-name');
  const copyIcon = document.getElementById('copy-icon');
  const randomNameParagraph = document.getElementById('random-name');

  const randomName = generateRandomName();
  randomNameParagraph.textContent = randomName;

  generateButton.addEventListener('click', function() {
      const randomName = generateRandomName();
      randomNameParagraph.textContent = randomName;
  });

  copyIcon.addEventListener('click', function() {
      const nameToCopy = randomNameParagraph.textContent;
      copyToClipboard(nameToCopy);
      displayCopiedMessage(copyIcon);
  });

  function generateRandomName() {
    const firstNames = ["John", "Jane", "Alice", "Bob", "Michael", "Emily", "Daniel", "Olivia", "Sophia", "Ethan",
    "Isabella", "Aiden", "Mia", "Liam", "Emma", "Lucas", "Ava", "William", "Charlotte", "James",
    "Sophie", "Liam", "Emma", "Noah", "Olivia", "Ava", "Isabella", "Mia", "Charlotte", "Amelia",
    "Grace", "Elijah", "Evelyn", "Henry", "Chloe"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller",
    "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson",
    "Garcia", "Martinez", "Robinson", "Brown", "Davis", "Miller", "Wilson",
    "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
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

  function displayCopiedMessage(icon) {
      const copiedMessage = document.createElement('span');
      copiedMessage.textContent = 'Copied!';
      icon.appendChild(copiedMessage);
      setTimeout(() => {
          icon.removeChild(copiedMessage);
      }, 2000);
  }
});
