const clickOnElement = (element) => {
    const mouseClickEvents = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'];
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}

let sequence = [];
let level = 1;

let MAX_LEVEL = 30;

const observer = new MutationObserver((mutations) => {
    const actualLevel = parseInt(document.querySelector('span.css-dd6wi1 span:nth-child(2)').textContent);
    if (actualLevel > level) {
        sequence = [];
        level++;
        console.log(`Level ${level}`);
    }
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' &&
            mutation.target.classList.contains('square') &&
            mutation.target.classList.contains('active')) {
            sequence.push(mutation.target);
        }
    });
    if (sequence.length === level) {
        if (level >= MAX_LEVEL) {
            endGame();
            return;
        }
        sequence.forEach((e) => { clickOnElement(e) });
        console.log('Clicked all')
    }
})

const endGame = () => {
    console.log('Max Level Reached!');
    let squares = document.querySelectorAll('div.square');
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            let random = squares[Math.floor(Math.random() * squares.length)];
            clickOnElement(random);
        }, i * 500);
    }
    observer.disconnect();
}

clickOnElement(document.querySelector('div.memory-test button'))
observer.observe(document.querySelector('.squares'), { attributes: true, subtree: true })