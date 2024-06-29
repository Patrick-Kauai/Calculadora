const keys = document.querySelectorAll('.Key')
const display = document.querySelector(`input[type=text]`)

let result = 0
let displayContent = '';

keys.forEach((e, i) => {
    const Key = e;

    if(Key.className == "Key number"); {
        Key.onclick = () => {
            displayContent += Key.value;
            display.placeholder = displayContent
        }
    } 
});

function AllClear() {
    displayContent = '',
    display.placeholder = displayContent; 
}

function CancelEntry() {
    displayContent = displayContent.slice(0, -1);
    display.placeholder = displayContent;
}

function ResultKey() {
    result = eval(displayContent);
    display.placeholder = result;
    displayContent = result.toString();
    }