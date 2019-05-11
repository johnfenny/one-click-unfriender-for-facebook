console.log('"Facebook Unfriender - One Click" - background script is running.');

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.check) {
        console.log(msg.check);
    }
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    console.log(details.requestBody);
},{urls: ["<all_urls>"]},['requestBody']);

