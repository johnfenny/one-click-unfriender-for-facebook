console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

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
var unref = "hc_friends_tab";
var __comet_req = "false";
var uid;
var referrer;
var nctr;

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
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message.referrer) {
        referrer = message.referrer;
    }
    if(message.uid) {
        uid = message.uid;
    }
    if(message.nctr) {
        nctr = message.nctr;
    }
});


var sendDeleteRequest = fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {
        "credentials":"include",
        "headers":{
            "accept":"*/*",
            "accept-language":"en-US,en;q=0.9",
            "cache-control":"no-cache",
            "content-type":"application/x-www-form-urlencoded",
            "pragma":"no-cache"
        },
        "referrer":referrer,
        "referrerPolicy":"origin-when-cross-origin",
        "body":"uid="+uid+"&unref="+unref+"&nctr[_mod]="+nctr+"&__user="+__user+"&__a="+__a+"&__dyn="+__dyn+"&__req="+__req+"&__be="+__be+"&__pc="+__pc+"&dpr="+dpr+"&__rev="+__rev+"&__s="+__s+"&fb_dtsg="+fb_dtsg+"&jazoest="+jazoest+"&__spin_r="+__spin_r+"&__spin_b="+__spin_b+"&__spin_t="+__spin_t+"",
        "method":"POST",
        "mode":"cors"
    }
);