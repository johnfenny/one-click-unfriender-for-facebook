// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {    
    if(details && details.requestBody && details.requestBody.formData) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {

            if(tabs[0]) {   
                const formData = details.requestBody.formData;

                if (formData) {
                    chrome.tabs.sendMessage(tabs[0].id, { // send data to content script
                        dpr: formData.dpr && formData.dpr[0] ? formData.dpr[0] : null,
                        fb_dtsg: formData.fb_dtsg && formData.fb_dtsg[0] ? formData.fb_dtsg[0] : null,
                        jazoest: formData.jazoest && formData.jazoest[0] ? formData.jazoest[0] : null,
                        __a: formData.__a && formData.__a[0] ? formData.__a[0] : null,
                        __dyn: formData.__dyn && formData.__dyn[0] ? formData.__dyn[0] : null,
                        __req: formData.__req && formData.__req[0] ? formData.__req[0] : null,
                        __be: formData.__be && formData.__be[0] ? formData.__be[0] : null,
                        __pc: formData.__pc && formData.__pc[0] ? formData.__pc[0] : null,
                        __rev: formData.__rev && formData.__rev[0] ? formData.__rev[0] : null,
                        __s: formData.__s && formData.__s[0] ? formData.__s[0] : null,
                        __spin_r: formData.__spin_r && formData.__spin_r[0] ? formData.__spin_r[0] : null,
                        __spin_b: formData.__spin_b && formData.__spin_b[0] ? formData.__spin_b[0] : null,
                        __spin_t: formData.__spin_t && formData.__spin_t[0] ? formData.__spin_t[0] : null,
                        __user: formData.__user && formData.__user[0] ? formData.__user[0] : null,
                    });
                }
            }
                
        });
    }
},{
    urls: ["https://www.facebook.com/ajax/bz"],
    types: ["xmlhttprequest"]
},['requestBody']);

// when an xmlhttprequest gets sent to https://www.facebook.com/ajax/bz, capture the params and send to our script