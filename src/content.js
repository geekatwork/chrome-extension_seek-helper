// content.js
chrome.runtime.onMessage.addListener(
  function (request) {
    if (request.message === "clicked_browser_action") {
      const jobUrl = window.location.origin + window.location.pathname
      chrome.runtime.sendMessage({ "message": "open_new_tab", "url": jobUrl });
    }
  }
);