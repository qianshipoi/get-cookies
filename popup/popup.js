const sendMessageId = document.getElementById("sendmessageid");
const cookiesId = document.getElementById("cookiesid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            null,
            function(response) {
                cookiesId.innerText = response.cookie;
            }
        );
    });
  };
}