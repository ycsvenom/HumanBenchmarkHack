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

while (true) {
    let target = document.querySelector('div[data-aim-target]');
    if (!target)
        break;
    clickOnElement(target.children[1]);
}