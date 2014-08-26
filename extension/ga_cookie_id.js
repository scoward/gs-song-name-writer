window.addEventListener('load', function() {
    chrome.extension.sendMessage({command: "hello"}, function(response) {
        var elemDiv = document.createElement("div");
        elemDiv.id = "chrome_store_cid";
        elemDiv.innerText = response;
        elemDiv.style.display = "none";
        document.body.appendChild(elemDiv);
    });
}, false);
