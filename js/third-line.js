// alert("JOPAAAA")

document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        let currentIndex = 0;
        const wordArray = word.getAttribute('data-words').split(',');
        setInterval(() => {
            const movingSpan = word.querySelector('.moving-letters');
            currentIndex = (currentIndex + 1) % wordArray.length;
            const nextWord = wordArray[currentIndex];
            const firstLetter = nextWord[0];
            const restLetters = nextWord.slice(1);

            // Calculate new width for smooth transition
            const newWidth = getTextWidth(restLetters, window.getComputedStyle(movingSpan).font);

            movingSpan.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                movingSpan.textContent = restLetters;
                movingSpan.style.transform = 'translateY(100%)';
                movingSpan.style.transition = 'none';
                setTimeout(() => {
                    movingSpan.style.transition = 'transform 0.5s ease-in-out, width 0.5s ease-in-out';
                    movingSpan.style.transform = 'translateY(0)';
                    movingSpan.style.width = `${newWidth}px`;
                }, 50);
            }, 500);
        }, 3500);
    });

    function getTextWidth(text, font) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = font;
        return context.measureText(text).width;
    }
});