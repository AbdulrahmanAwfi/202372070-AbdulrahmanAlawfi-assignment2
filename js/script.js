

let date = new Date();
alert("Welcome to my portfolio! You are viewing this page on\n" + date.getHours() + ":" + date.getMinutes() + ", on the " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ".\nI hope you enjoy your visit!");


function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.body.dataset.theme = localStorage.getItem("theme") || "light";
function toggleTheme() {
    if(localStorage.getItem("theme") !== null) {
    const theme = localStorage.getItem("theme") || "light";
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
}
    else {
        alert("Error: failed to retrieve theme from localStorage, refresh the page."); //task 5, error ahndling and user feedback is done here
    }
}