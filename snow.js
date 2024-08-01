document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.createElement('canvas');
    canvas.id = 'snowCanvas';
    document.body.appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let snowflakes = [];
    let maxFlakes = 100;

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < maxFlakes; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 4 + 1,
                d: Math.random() * maxFlakes
            });
        }
        draw();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        for (let i = 0; i < maxFlakes; i++) {
            let flake = snowflakes[i];
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    function update() {
        for (let i = 0; i < maxFlakes; i++) {
            let flake = snowflakes[i];

            flake.y += Math.pow(flake.d, 0.5);
            flake.x += Math.sin(flake.y / 10);

            if (flake.y > canvas.height) {
                snowflakes[i] = { x: Math.random() * canvas.width, y: 0, r: flake.r, d: flake.d };
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    init();
});
