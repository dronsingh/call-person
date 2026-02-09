const callBtn = document.getElementById("callBtn");
const endBtn = document.getElementById("endBtn");
const statusText = document.getElementById("status");
const phoneInput = document.getElementById("phoneNumber");
const avatarImg = document.querySelector(".avatar img");

let isCalling = false;

/* Validation */
function validatePhoneNumber(number) {
    number = number.trim();

    if (number === "") return "Phone number cannot be empty";
    if (!/^[0-9]+$/.test(number)) return "Only digits allowed";
    if (number.length < 10 || number.length > 15)
        return "Phone number must be 10–15 digits";

    return null;
}

/* Call */
callBtn.addEventListener("click", () => {
    const number = phoneInput.value;
    const error = validatePhoneNumber(number);

    if (error) {
        statusText.textContent = `Status: ${error} ❗`;
        statusText.style.color = "#f87171";
        return;
    }

    isCalling = true;
    statusText.textContent = `Status: Calling ${number}... 📡`;
    statusText.style.color = "#a7f3d0";

    callBtn.disabled = true;
    endBtn.disabled = false;

    avatarImg.style.borderColor = "#22c55e";
});

/* End Call */
endBtn.addEventListener("click", () => {
    if (!isCalling) return;

    isCalling = false;
    statusText.textContent = "Status: Call ended ❌";
    statusText.style.color = "#fca5a5";

    callBtn.disabled = false;
    endBtn.disabled = true;
    phoneInput.value = "";

    avatarImg.style.borderColor = "#ef4444";
});

/* Digits only while typing */
phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

/* Initial state */
window.addEventListener("load", () => {
    statusText.textContent = "Status: Idle";
    endBtn.disabled = true;
});
