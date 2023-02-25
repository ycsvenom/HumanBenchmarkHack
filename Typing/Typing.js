const typeOnElement = (element, char) => {
    const keyboardEvents = ['keydown', 'keyup'];
    keyboardEvents.forEach(keyboardEventType =>
        element.dispatchEvent(
            new KeyboardEvent(keyboardEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1,
                key: char
            })
        )
    );
}

let textDiv = document.querySelector('.letters.notranslate');
for (let i = 0; i < textDiv.textContent.length; i++)
    typeOnElement(textDiv, textDiv.textContent[i]);