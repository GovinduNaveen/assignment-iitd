window.onload = function () {
    let btn = document.getElementById("btn");
    let text = document.getElementById("color");

    btn.onclick = function () {
        // Get random rgb color
        function getRandomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
            return color;
        }
        randomColor = getRandomColor();
        document.body.style.background = randomColor;
        textColor = document.getElementById("color").style.color = randomColor;
        text.innerHTML = randomColor;
    };
};