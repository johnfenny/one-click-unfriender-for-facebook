console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// uid=100014477568045
// unref=hc_friends_tab
// nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2
// __comet_req=false

// REQUIRED PARAMS
var __a;
var __dyn;
var __req;
var __be;
var __pc;
var dpr;
var __rev;
var __s;
var fb_dtsg;
var jazoest;
var __spin_r;
var __spin_b;
var __spin_t;
var __user;

// INTERCEPT FACEBOOK NETWORK REQUEST TO CAPTURE PARAMS REQUIRED TO CREATE REQUESTS
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var body = details.requestBody.formData;
    __a = body.__a[0];
    __dyn = body.__dyn[0];
    __req = body.__req[0];
    __be = body.__be[0];
    __pc = body.__pc[0];
    dpr = body.dpr[0];
    __rev = body.__rev[0];
    __s = body.__s[0];
    fb_dtsg = body.fb_dtsg[0];
    jazoest = body.jazoest[0];
    __spin_r = body.__spin_r[0];
    __spin_b = body.__spin_b[0];
    __spin_t = body.__spin_t[0];
    __user = body.__user[0];
},{
    urls: ["https://www.facebook.com/logged_in_account_switcher/badge/"],
},['requestBody']);

// LISTEN FOR MESSAGES SENT FROM CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.check) {
        console.log(msg.check);
    }
});

// fetch(
//     "https://www.facebook.com/ajax/profile/removefriendconfirm.php",
//     {
//         "credentials":"include",
//         "headers":{
//             "accept":"*/*",
//             "accept-language":"en-US,en;q=0.9",
//             "cache-control":"no-cache",
//             "content-type":"application/x-www-form-urlencoded",
//             "pragma":"no-cache"
//         },
//         "referrer":"https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1557573594&source_ref=pb_friends_tl",
//         "referrerPolicy":"origin-when-cross-origin",
//         "body":"uid=100012745057376&unref=hc_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaAxd2u6aJGeFxqeCwDKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qUC3eF89XyEjKewXwgUOdwJKdwVxCu58O5U7S4E9ohwoU8-1rG0HFU2BDx6q7ooxu6U6O5oaUvwHwrEsxeEgy9E6aEymu4EhwIUa9m4-2y48OEO2e2bwloy2q48692EgVFXAy85iawiEKucxy6o98dU-rz8mgK7o88vwEy82lxG3u362q&__req=1f&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000701161&__s=%3Aj44c5d%3Amzg1qv&fb_dtsg=AQGTBQ222trG%3AAQGJTAqXVtoW&jazoest=21998&__spin_r=1000701161&__spin_b=trunk&__spin_t=1557561201",
//         "method":"POST",
//         "mode":"cors"
//     }
// );


// function test () {
    //     console.log("all", __user, __a, __dyn, __req, __be, __pc, dpr, __rev, __s, fb_dtsg, jazoest, __spin_r, __spin_b, __spin_t);
    // };
    // setTimeout(test, 10000);

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