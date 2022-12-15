// const output = document.querySelector("#output")
// const input = document.querySelector("input")

// for (let i = 0; i < btns.length; i++) {
//     const btn = document.createElement("button")
//     btn.classList.add(btn[i])
//     output.append(btn)
//     btn.append(btns[i])
// }


let result = ""
const output = document.createElement("input")
output.value = result
output.disabled = true
const btnWrapper = document.createElement("div")





const body = document.body
body.append(output, btnWrapper)


const arr = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", "+", "-",
    "*", "/", "=",
    "AC", "C", "."
]

const getNum = (event) => {
    let num = event.target.value
    if (num == "AC") {
        result = ""
    } else if (num == "C") {
        result = result.substring(0, result.length - 1)
    } else if (num == "=") {
        result = eval(result)
    }
    else {
        result += num
    }
    output.value = result
}

arr.forEach(el => {
    let btn = document.createElement("input")
    btn.type = "button"
    btn.value = el
    btnWrapper.append(btn)
    btn.addEventListener("click", getNum)
})








// =============================================== 2 ============================================

// let screen = document.getElementById("screen")
// buttons = document.querySelectorAll("button")
// let screenValue = "";
// for (item of buttons) {
//     item.addEventListener("click", (e) => {
//         buttonText = e.target.innerText;
//         console.log(('Button text is', buttonText));
//         if (buttonText == 'x') {
//             buttonText = "*";
//             screenValue += buttonText;
//             screen.value = screenValue
//         }
//         else if (buttonText == "AC") {
//             screenValue = "";
//             screen.value = screenValue
//         }
//         else if (buttonText == "=") {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     })
// }




