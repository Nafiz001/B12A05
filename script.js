let hearts = 0;
const data=[];
document.querySelectorAll(".heart-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        hearts += 1;
        document.getElementById("heart-count").innerText = hearts;

    });
});
document.querySelectorAll(".call-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        if (document.getElementById("coin-count").innerText >= 20) {
            alert("📞 Calling " + this.parentElement.parentElement.querySelectorAll("h1")[0].innerText + " " + this.parentElement.parentElement.querySelectorAll("h1")[1].innerText);
            document.getElementById("coin-count").innerText = document.getElementById("coin-count").innerText - 20;
            data.push({
                name: this.parentElement.parentElement.querySelectorAll("h1")[0].innerText,
                number: this.parentElement.parentElement.querySelectorAll("h1")[1].innerText,
                time: new Date().toLocaleString()
            });
        }
        else {
            alert("❌ Not enough coins to make a call. You need at least 20 coins.");
        }

    });
});
