document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const cursor = document.getElementById("cursor");
    const textContent = [
        "$ Hi, my name is ARCHIE FORDE",
        "Junior Cyber Security Engineer",
        "Welcome to my portfolio!",
    ];

    let index = 0;
    let charIndex = 0;
    let typingSpeed = 100; // Speed of typing (in milliseconds)

    function typeText() {
        if (index < textContent.length) {
            let currentText = textContent[index];
            terminalText.innerHTML += currentText.charAt(charIndex);
            charIndex++;

            if (charIndex < currentText.length) {
                setTimeout(typeText, typingSpeed); // Keep typing the current line
            } else {
                terminalText.innerHTML += '<br>$ '; // Add new prompt after each line
                index++; // Move to the next line of text
                charIndex = 0; // Reset char index for next line
                setTimeout(typeText, typingSpeed); // Type the next line
            }
        } else {
            // Once all lines are typed, repeat the process by resetting
            setTimeout(() => {
                terminalText.innerHTML = ''; // Clear the terminal text
                index = 0; // Reset the line index
                charIndex = 0; // Reset the character index
                typeText(); 
            }, 5000);
        }
    }
    typeText();

});


document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute("href").substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".footer-nav a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute("href").substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    var fontSize = 16;
    var columns = Math.floor(W / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops.push(0);
    }

    var str = "JavaScript Hacking Effect";
    function draw() {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, W, H);
        context.font = "700 " + fontSize + "px monospace";
        context.fillStyle = "#00cc33";
        for (var i = 0; i < columns; i++) {
            var index = Math.floor(Math.random() * str.length);
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(str[index], x, y);

            // Reset drop to the top randomly
            if (y >= canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 35);

    // Adjust canvas size when the window is resized
    window.addEventListener('resize', function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        columns = Math.floor(W / fontSize);
        drops = [];
        for (var i = 0; i < columns; i++) {
            drops.push(0);
        }
    });
};

function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('toggle-CV').onclick = function() {
    window.open('https://drive.google.com/file/d/1lv-FoacqLTGW0tBE0jg1x2N8VYoQIQwo/view?usp=sharing', '_blank');
};

document.getElementById('toggle-about').addEventListener('click', function() {
    var content = document.getElementById('about-content');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        content.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
