while (true) {
    let buttons = document.querySelectorAll("div.desktop-only button");
    if (buttons.length > 1)
        break;
    buttons[0].click();
    let cubes = [...document.querySelectorAll('div[data-cellnumber]')].sort((a, b) => {
        const a_val = a.getAttribute('data-cellnumber');
        const b_val = b.getAttribute('data-cellnumber');
        return a_val - b_val;
    });
    cubes.forEach((e) => {
        e.click()
    })
}