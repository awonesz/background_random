color = document.querySelector("#hex");

let getRandomColor = () => {
    let letter = "ABCDEF0123456789";
    let new_color = "#";
    for (let i = 0; i < 6; i++) {
        new_color += letter[Math.floor(Math.random() * 16)];
    }
    return new_color
}

let setRandomColor = () => {
    let new_color = getRandomColor()
    color.textContent = new_color;
    document.body.style.background = new_color;
}

color.onclick = () => {
    navigator.clipboard.writeText(color.textContent)
    alert("Скопировано в буфер обмена!")
}






