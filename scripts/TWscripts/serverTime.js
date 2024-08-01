// Create the duplicate element
const duplicateServerTime = document.createElement('div');
duplicateServerTime.id = 'duplicateServerTime';
duplicateServerTime.title = 'Connection time to server: 124ms';
duplicateServerTime.style.position = 'fixed';
duplicateServerTime.style.padding = '10px';
duplicateServerTime.style.backgroundColor = 'black';
duplicateServerTime.style.color = 'white';
duplicateServerTime.style.fontFamily = 'Arial, sans-serif';
duplicateServerTime.style.fontSize = '20px';
duplicateServerTime.style.borderRadius = '5px';
duplicateServerTime.style.cursor = 'move';
duplicateServerTime.style.userSelect = 'none';
duplicateServerTime.style.left = '50px';
duplicateServerTime.style.top = '50px';
document.body.appendChild(duplicateServerTime);

// Function to update the duplicate element
function updateDuplicateTime() {
    const serverTime = document.getElementById('serverTime').textContent;
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    duplicateServerTime.textContent = `${serverTime}:${milliseconds.toString().padStart(3, '0')}`;
}

// Call updateDuplicateTime initially and set an interval to update periodically
updateDuplicateTime();
setInterval(updateDuplicateTime, 50); // Update every 50ms

// Variables for drag functionality
let isDragging = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0, yOffset = 0;

// Event listeners for drag functionality
duplicateServerTime.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    isDragging = true;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, duplicateServerTime);
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
