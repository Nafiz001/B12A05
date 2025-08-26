let hearts = 0;
let copies = 0;

function updateHistory() {
    const historyCorner = document.getElementById("history-corner");
    historyCorner.innerHTML = "";
    
    for (child of data) {
        const history = document.createElement("div");
        history.innerHTML = `<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#fafafa] mb-3 gap-2 sm:gap-3 p-0 sm:p-3 rounded-[8px]">
                                <div class="flex-1 min-w-0">
                                    <h1 class="font-semibold text-[18px] sm:text-[22px]">${child.name}</h1>
                                    <p class="font-normal text-[16px] sm:text-[18px] text-gray-600">${child.number}</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h1 class="font-semibold text-[16px] sm:text-[20px] whitespace-nowrap">${child.time}</h1>
                                </div>
                            </div>
`;
        historyCorner.appendChild(history);
    }
}

let data = [];
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
                time: new Date().toLocaleTimeString()
            });
            updateHistory();
        }
        else {
            alert("❌ Not enough coins to make a call. You need at least 20 coins.");
        }

    });
});

document.getElementById("clear-btn").addEventListener("click", function () {
    data=[];
    updateHistory();
});


document.querySelectorAll(".copy-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        copies += 1;
        alert("📋 Copied " + this.parentElement.parentElement.querySelectorAll("h1")[1].innerText + " to clipboard");
        document.getElementById("copy-count").innerText = copies;
        navigator.clipboard.writeText(this.parentElement.parentElement.querySelectorAll("h1")[1].innerText);
    });
});