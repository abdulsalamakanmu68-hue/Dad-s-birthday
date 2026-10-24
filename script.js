const openingScreen = document.getElementById("openingScreen");
const openBirthdayButton = document.getElementById("openBirthday");

if (openingScreen && openBirthdayButton) {
    openBirthdayButton.addEventListener("click", () => {
        openingScreen.classList.add("hidden");
    });
}
