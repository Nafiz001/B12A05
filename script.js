let hearts = 0;
document.querySelectorAll(".heart-btn").forEach(function(element) {
    element.addEventListener("click", function() {
        hearts += 1;
        document.getElementById("heart-count").innerText = hearts;
        
    });
});

document.getElementById("call-btn").addEventListener("click", function() {
    alert("Calling "+ this.parentElement.parentElement.querySelector("h1").innerText)+" ";
});