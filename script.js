"use strict";
var _a, _b, _c;
// Function to toggle visibility of an element
function toggleVisibility(elementId, headingId, hrId) {
    const element = document.getElementById(elementId);
    const heading = document.getElementById(headingId);
    const hr = document.getElementById(hrId);
    if (element && heading && hr) {
        if (element.style.display === "none") {
            element.style.display = "block"; 
            heading.style.display = "block";
            hr.style.display = "block"; 
        }
        else {
            element.style.display = "none"; 
            heading.style.display = "none"
            hr.style.display = "none"; 
        }
    }
}
// Hide all content initially when the page loads
window.onload = () => {
    document.getElementById("education-content").style.display = "none";
    document.getElementById("experience-content").style.display = "none";
    document.getElementById("skills-content").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("exper").style.display = "none";
    document.getElementById("skill").style.display = "none";
};
// Add event listeners to buttons
(_a = document.getElementById("education-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    toggleVisibility("education-content", "education", "edu");
});
(_b = document.getElementById("experience-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    toggleVisibility("experience-content", "exp", "exper");
});
(_c = document.getElementById("skills-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    toggleVisibility("skills-content", "skills", "skill");
});
