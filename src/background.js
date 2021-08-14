// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });

  chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.message === "open_new_tab") {
        chrome.tabs.create({ "url": 'https://www.whatsthesalary.com/' }, function(tab) {
            chrome.tabs.executeScript(tab.id, { code:`
                (function(){
                    var element = document.getElementById('jobId');
                    element.value = '${request.url}';
                })();
            `});
        });
      }
    }
  );