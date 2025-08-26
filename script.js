let hearts = 0;
document.querySelectorAll(".heart-btn").forEach(function(element) {
    element.addEventListener("click", function() {
        hearts += 1;
        document.getElementById("heart-count").innerText = hearts;
        
    });
});
document.querySelectorAll(".call-btn").forEach(function(element) {
    element.addEventListener("click", function() {
    alert("📞 Calling "+ this.parentElement.parentElement.querySelectorAll("h1")[0].innerText+" "+this.parentElement.parentElement.querySelectorAll("h1")[1].innerText);
    });
});
