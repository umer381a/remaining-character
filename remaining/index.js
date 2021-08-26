const myText = document.getElementById("mytext-area");
const myRemaningChar = document.getElementById("remainig-text-character")
const maxChar = 250;
myText.addEventListener("input",()=>{
    const remaning = maxChar - myText.value.length
    const color = remaning < maxChar * 0.1 ? 'red' : null;
    myRemaningChar.textContent = `${remaning} characters Remaning`
    myRemaningChar.style.color= color;
})