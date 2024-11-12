// clicking on nav icons in phone
function navelements() {
    const displaya=document.getElementById("a")
    const displayh=document.getElementById("h")
    const displayc=document.getElementById("c")
    const displayul=document.getElementById("ul")
    if (displaya.style.display === "none"
    && displayh.style.display === "none"
    && displayc.style.display === "none"
    && displayul.style.display==="none") {
        displaya.style.display = "block"
        displayh.style.display = "block"
        displayc.style.display = "block"
        displayul.style.display="block";
    } else {
        displaya.style.display = "none"
        displayh.style.display = "none"
        displayc.style.display = "none"
        displayul.style.display="none";
    }
}



