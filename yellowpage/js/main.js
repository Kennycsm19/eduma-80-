const names = [" Education", " Training", " Courses Hub", " University", " School" , " Kindergarten", " Academy", " College", " Online LMS"];
let currentIndex = 0;
let currentName = "";
let currentCharIndex = 0;
let isDeleting = false;

function updateName() {
  const nameElement = document.getElementById("name");
  if (isDeleting) {
    currentName = currentName.slice(0, -1);
    nameElement.textContent = currentName;
    if (currentName.length === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % names.length;
    }
  } else {
    currentName += names[currentIndex].charAt(currentCharIndex);
    nameElement.textContent = currentName;
    currentCharIndex++;
    if (currentCharIndex === names[currentIndex].length) {
      isDeleting = true;
      currentCharIndex = 0;
    }
  }
}

setInterval(updateName, 300);
