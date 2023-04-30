const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};

let intervalID;

// css
refs.btnStart.style.marginLeft = "calc(50% - 80px)";
refs.btnStart.style.fontSize = "30px";
refs.btnStop.style.fontSize = "30px";
refs.btnStart.style.padding = "15px";
refs.btnStop.style.padding = "15px";
//css

refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);

//============================================================================
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function startChangeColor() {
    intervalID = setInterval(changeBodyColor, 1000);

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

function stopChangeColor() {
    clearTimeout(intervalID);

    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
