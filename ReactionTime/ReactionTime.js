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

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' &&
            mutation.target.classList.contains('view-go')) {
            clickOnElement(mutation.target);
            console.log('clicked!');
            if (document.querySelectorAll('div.view-score button') == 2) {
                observer.disconnect();
                return;
            }
            clickOnElement(mutation.target);
        }
    });
})

observer.observe(document.querySelector('#root > div > div:nth-child(4) > div'), { attributes: true });

clickOnElement(document.querySelector('div.view-splash'));
