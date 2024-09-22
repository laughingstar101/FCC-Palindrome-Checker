const textInput = document.querySelector(".text-input");
const inputBtn = document.querySelector(".input-btn");
const result = document.querySelector(".result");

function escapeRexExp(string) {
    const regex = /[`~!@#$%^&*()-_=+|{};" :'/?><,.]/g;
    return string.replace(regex, "");
}

const stringToArrayOfCharacters = (e) => {
    const escaped = escapeRexExp(e);
    const arr = escaped.toLowerCase().split("");
    return arr;
};

inputBtn.addEventListener("click", () => {
    if (textInput.value !== "") {
        console.log(firstToLast());
        console.log(lastToFirst());
        console.log(checkPalindrome());
        if (checkPalindrome()) {
            return (result.innerText = textInput.value + " is a palindrome");
        } else {
            return (result.innerText =
                textInput.value + " is not a palindrome");
        }
    } else {
        return alert("Please input a value");
    }
});

const firstToLast = () => {
    const firstToLastArr = [];
    for (
        let i = 0;
        i < stringToArrayOfCharacters(textInput.value).length;
        i++
    ) {
        firstToLastArr.push(stringToArrayOfCharacters(textInput.value)[i]);
    }
    return firstToLastArr;
};

const lastToFirst = () => {
    const lastToFirstArr = [];
    for (
        let i = 0;
        i < stringToArrayOfCharacters(textInput.value).length;
        i++
    ) {
        lastToFirstArr.unshift(stringToArrayOfCharacters(textInput.value)[i]);
    }
    return lastToFirstArr;
};

const checkPalindrome = () => {
    if (JSON.stringify(firstToLast()) === JSON.stringify(lastToFirst())) {
        return true;
    } else {
        return false;
    }
};
