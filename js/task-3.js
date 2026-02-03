const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")


input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim().length > 0) {
    span.textContent = event.currentTarget.value.trim()
    }
    else {
       span.textContent = "Anonymous"
    }
});