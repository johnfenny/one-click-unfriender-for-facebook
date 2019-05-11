console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {

    console.log("body", details);
    
    if(details && details.requestBody && details.requestBody.formData) {

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { // send data to content script
                dpr: details.requestBody.formData.dpr[0],
                fb_dtsg: details.requestBody.formData.fb_dtsg[0],
                jazoest: details.requestBody.formData.jazoest[0],
                __a: details.requestBody.formData.__a[0],
                __dyn: details.requestBody.formData.__dyn[0],
                __req: details.requestBody.formData.__req[0],
                __be: details.requestBody.formData.__be[0],
                __pc: details.requestBody.formData.__pc[0],
                __rev: details.requestBody.formData.__rev[0],
                __s: details.requestBody.formData.__s[0],
                __spin_r: details.requestBody.formData.__spin_r[0],
                __spin_b: details.requestBody.formData.__spin_b[0],
                __spin_t: details.requestBody.formData.__spin_t[0],
                __user: details.requestBody.formData.__user[0],
            });
        });

    }
},{
    urls: ["https://www.facebook.com/ajax/bz"],
    types: ["xmlhttprequest"]
},['requestBody']);