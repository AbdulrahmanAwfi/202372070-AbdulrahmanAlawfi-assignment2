let date = new Date();
alert("Welcome to my portfolio! You are viewing this page on\n" + date.getHours() + ":" + date.getMinutes() + ", on the " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ".\nI hope you enjoy your visit!");

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'instant' });
    }
}