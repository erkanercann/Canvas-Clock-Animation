function canvasClock() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const date = new Date();

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(300, 300);
    ctx.lineCap = 'round';

    // Draw clock border
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.arc(0, 0, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Function for lines

    function drawLines(quantity, rotation, moveTo, lineColor) {
        for (let i = 0; i < quantity; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = lineColor;
            ctx.moveTo(moveTo, 0);
            ctx.lineTo(175, 0);
            ctx.rotate(rotation);
            ctx.stroke();
        }
    }

    // Hours lines
    ctx.save();
    drawLines(12, Math.PI / 6, 150, '#80ffdb');
    ctx.restore();

    // Minutes lines

    ctx.save();
    drawLines(60, Math.PI / 30, 165, '#80ffdb');
    ctx.restore();

    //Draws clock hands for hours, minutes, and seconds.

    function drawHourHand(hour, minutes, seconds) {
        ctx.save();
        ctx.beginPath();
        ctx.rotate(
            (Math.PI / 6) * hour + (Math.PI / 360) * minutes + (Math.PI / 21600) * seconds
        );
        ctx.strokeStyle = '#80ffdb';
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -110);
        ctx.lineTo(-10, -90);
        ctx.lineTo(12, -90);
        ctx.stroke();
        ctx.restore();
    }
    function drawMinuteHand(minutes, seconds) {
        ctx.save();
        ctx.beginPath();
        ctx.rotate((Math.PI / 30) * minutes + (Math.PI / 1800) * seconds);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -130);
        ctx.lineTo(10, -110);
        ctx.lineTo(-12, -110);
        ctx.stroke();
        ctx.restore();
    }

    function drawSecondHand(seconds) {
        ctx.save();
        ctx.beginPath();
        ctx.rotate((Math.PI / 30) * seconds);
        ctx.strokeStyle = '#a3c3d9';
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -145);
        ctx.lineTo(10, -120);
        ctx.stroke();
        ctx.restore();
    }

    const hour = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    drawHourHand(hour, minutes, seconds);
    drawMinuteHand(minutes, seconds);
    drawSecondHand(seconds);

    // Draw center point

    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.restore();
    ctx.restore();

    requestAnimationFrame(canvasClock);
}
requestAnimationFrame(canvasClock);
