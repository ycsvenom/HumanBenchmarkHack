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

let words = {};
let score = 0;

let MAX_SCORE = 20000;
let logFrequency = 1000;

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let word = mutation.target.textContent;

        if (words[word] === undefined) {
            words[word] = true;
            clickOnElement(btnNew);
        }
        else {
            clickOnElement(btnSeen);
        }
    });
    if (++score > MAX_SCORE)
        words = [];
    if (score % logFrequency === 0)
        console.log(`score = ${score}`);
})

document.querySelector('div.verbal-memory-test button').click()

let btnSeen = document.querySelector("div.anim-slide-fade-in > div > div:nth-child(3) > button:nth-child(1)");
let btnNew = document.querySelector("div.anim-slide-fade-in > div > div:nth-child(3) > button:nth-child(3)");

observer.observe(document.querySelector('.anim-slide-fade-in > div > div:nth-child(2)'), { subtree: true, characterData: true });
clickOnElement(btnNew);