// Function to toggle visibility of an element
function toggleVisibility(elementId: string, headingId: string, hrId: string): void {
    const element = document.getElementById(elementId);
    const heading = document.getElementById(headingId);
    const hr = document.getElementById(hrId);

    if (element && heading && hr) {
        if (element.style.display === "none") {
            element.style.display = "block";  
            heading.style.display = "block";  
            hr.style.display = "block";      
        } else {
            element.style.display = "none";   
            heading.style.display = "none";   
            hr.style.display = "none";        
        }
    }
}

// Hide all content initially when the page loads
window.onload = () => {
    document.getElementById("education-content")!.style.display = "none";
    document.getElementById("experience-content")!.style.display = "none";
    document.getElementById("skills-content")!.style.display = "none";

    document.getElementById("education")!.style.display = "none";
    document.getElementById("exp")!.style.display = "none";
    document.getElementById("skills")!.style.display = "none";

    document.getElementById("edu")!.style.display = "none";
    document.getElementById("exper")!.style.display = "none";
    document.getElementById("skill")!.style.display = "none";
};

// Add event listeners to buttons
document.getElementById("education-btn")?.addEventListener("click", () => {
    toggleVisibility("education-content", "education", "edu");
});

document.getElementById("experience-btn")?.addEventListener("click", () => {
    toggleVisibility("experience-content", "exp", "exper");
});

document.getElementById("skills-btn")?.addEventListener("click", () => {
    toggleVisibility("skills-content", "skills", "skill");
});
