var character = document.getElementById("character");
var block = document.getElementById("block");
var messageDiv = document.getElementById("message");
var reloadButton = document.getElementById("reloadButton");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(() => {
            character.classList.remove("animate");
        }, 600); // Matches animation time
    }
}

function displayMessage(message) {
    messageDiv.textContent = message;
}

function showReloadButton() {
    reloadButton.style.display = "block";
}

function reloadGame() {
    location.reload();
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // Check if character and block overlap
    if (blockLeft < 100 && blockLeft > 30 && characterTop > 250) {
        block.style.animation = "none";
        block.style.display = "none";
        displayMessage("You lose");
        showReloadButton();
        clearInterval(checkDead); // Stop game loop
    }
}, 10);

// Example function to call when the user wins
function onWin() {
    block.style.animation = "none";
    block.style.display = "none";
    displayMessage("You win!");
    showReloadButton();
}

// Call onWin() when the win condition is met
// Example: onWin();
