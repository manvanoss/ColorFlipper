const colors = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f1c40f',
    '#9b59b6',
    '#1abc9c',
    '#e67e22',
    '#34495e',
  ];

const colorButton = document.getElementById('colorButton');
const colorContainer = document.getElementById('colorContainer');

function getRandomColor() {
    //will get random color based on Colors
    const randomIndex= Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function changeBackgroundColor(){
    //the background color changed
    const newColor = getRandomColor();
    colorContainer.style.backgroundColor = newColor;
}

colorButton.addEventListener('click', changeBackgroundColor);