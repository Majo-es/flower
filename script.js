const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

function drawPetal(x, y, radius, angle) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, angle, angle + Math.PI); // Draw half of the petal
    ctx.arc(x, y, radius, angle + Math.PI, angle + 2 * Math.PI); // The other half of the petal
    ctx.closePath();
    ctx.fillStyle = 'pink';
    ctx.fill();
}

function drawDiskFlorets(x, y, radius, angle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Full circle for the disk florets
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

function drawFlower(x, y, petalCount, radius) {
    const angleStep = (2 * Math.PI) / petalCount;
    for (let i = 0; i < petalCount; i++) {
        const angle = i * angleStep;
        drawPetal(x, y, radius, angle);
    }
}

function drawStem(x, y, height) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

function drawFlowerWithStem() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2.5;
    const petalCount = 12; // Increased petal count
    const petalRadius = 50;
    const diskRadius = 20; // radius for the disk florets
    const stemHeight = 100;

    drawFlower(centerX, centerY, petalCount, petalRadius);
    drawDiskFlorets(centerX, centerY, diskRadius, 0); 
    drawStem(centerX, centerY, stemHeight);
} 

drawFlowerWithStem();
