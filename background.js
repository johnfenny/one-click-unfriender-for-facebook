console.log("Hello, world!");

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.check) {
        console.log(msg.check);
    }
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    console.log(details.requestBody);
},{urls: ["<all_urls>"]},['requestBody']);

