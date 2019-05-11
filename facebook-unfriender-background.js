console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// REQUIRED PARAMS
// var __a;
// var __dyn = "7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco9E"; // dif
// var __req = "15"; // dif
// var __be;
// var __pc;
// var dpr;
// var __rev;
// var __s = ":j44c5d:clbq4u"; // dif
// var fb_dtsg = "AQFs51avF8NV:AQG6E6glh6dQ"; // dif
// var jazoest = "21940"; // dif
// var __spin_r;
// var __spin_b;
// var __spin_t;
// var __user;
// var unref = "hc_friends_tab";
// var __comet_req = "false";
// var uid;
// var referrer;
// var nctr;

// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {

    console.log("body", details);
    
    if(details && details.requestBody && details.requestBody.formData) {

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
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

// LISTEN FOR MESSAGES SENT FROM CONTENT SCRIPT
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if(message.referrer) {
//         referrer = message.referrer;
//     }
//     if(message.nctr) {
//         nctr = message.nctr;
//     }
//     if(message.uid) {
//         uid = message.uid;
//         fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {
//                 "credentials":"include",
//                 "headers":{
//                     "accept":"*/*",
//                     "accept-language":"en-US,en;q=0.9",
//                     "cache-control":"no-cache",
//                     "content-type":"application/x-www-form-urlencoded",
//                     "pragma":"no-cache"
//                 },
//                 "referrer":referrer,
//                 "referrerPolicy":"origin-when-cross-origin",
//                 "body":"uid="+uid+"&unref="+unref+"&nctr[_mod]="+nctr+"&__user="+__user+"&__a="+__a+"&__dyn="+__dyn+"&__req="+__req+"&__be="+__be+"&__pc="+__pc+"&dpr="+dpr+"&__rev="+__rev+"&__s="+__s+"&fb_dtsg="+fb_dtsg+"&jazoest="+jazoest+"&__spin_r="+__spin_r+"&__spin_b="+__spin_b+"&__spin_t="+__spin_t+"",
//                 "method":"POST",
//                 "mode":"cors"
//             }
//         );
//     }
// });