console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// REQUIRED PARAMS

// uid=100014477568045
// unref=hc_friends_tab
// nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2
// __comet_req=false

// __user=603014086
// __a=1
// __dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco
// __req=v
// __be=1
// __pc=PHASED%3Aufi_home_page_pkg
// dpr=3
// __rev=1000691465
// __s=%3Az4up6b%3A9tfgj9
// fb_dtsg=AQHF0uz_nHi4%3AAQEm_mmFW2dV
// jazoest=22097
// __spin_r=1000691465
// __spin_b=trunk
// __spin_t=1557426537


// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var body = details.requestBody.formData;
    console.log(body);
    var __a = body.__a[0];
    var __dyn = body.__dyn[0];
    var __req = body.__req[0];
    var __be = body.__be[0];
    var __pc = body.__pc[0];
    var dpr = body.dpr[0];
    var __rev = body.__rev[0];
    var __s = body.__s[0];
    var fb_dtsg = body.fb_dtsg[0];
    var jazoest = body.jazoest[0];
    var __spin_r = body.__spin_r[0];
    var __spin_b = body.__spin_b[0];
    var __spin_t = body.__spin_t[0];
    var __user = body.__user[0];
},{
    urls: ["https://www.facebook.com/logged_in_account_switcher/badge/"],
},['requestBody']);

// LISTEN FOR MESSAGES SENT FROM CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.check) {
        console.log(msg.check);
    }
});


