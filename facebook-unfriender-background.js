console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// REQUIRED PARAMS

// uid=100014477568045
// unref=hc_friends_tab
// nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2
// __user=603014086
// __a=1
// __dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco
// __req=v
// __be=1
// __pc=PHASED%3Aufi_home_page_pkg
// dpr=3
// __rev=1000691465
// __comet_req=false
// __s=%3Az4up6b%3A9tfgj9
// fb_dtsg=AQHF0uz_nHi4%3AAQEm_mmFW2dV
// jazoest=22097
// __spin_r=1000691465
// __spin_b=trunk
// __spin_t=1557426537

var uid;
var unref;
var nctr;
var __user;
var __a;
var __dyn;
var __req;
var __be;
var __pc;
var dpr;
var __rev;
var __comet_req;
var __s;
var fb_dtsg;
var jazoest;
var __spin_r;
var __spin_b;
var __spin_t;

// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    if(details.requestBody.formData) {
        var body = details.requestBody.formData;
        console.log(body);

    }
},{urls: ["<all_urls>"]},['requestBody']);

// LISTEN FOR MESSAGES SENT FROM CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.check) {
        console.log(msg.check);
    }
});


