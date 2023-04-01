document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get("folderPath", function(items) {
        document.getElementById("folder-path").value = items.folderPath || "";
    });

    document.getElementById("options-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var folderPath = document.getElementById("folder-path").value;
        chrome.storage.sync.set({ "folderPath": folderPath }, function() {
            alert("Save successful!");
        });
    });
});
