console.log('Chrome Extension "Facebook Unfriender - One Click" - background script is running.');

// REQUIRED PARAMS
var __a;
var __dyn; // dif
var __req; // dif
var __be;
var __pc;
var dpr;
var __rev;
var __s; // dif
var fb_dtsg; // dif
var jazoest; // dif
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
    if(details && details.requestBody && details.requestBody.formData) {
        console.log("body", details.requestBody.formData);
        __a = details.requestBody.formData.__a[0];
        __dyn = details.requestBody.formData.__dyn[0];
        __req = details.requestBody.formData.__req[0];
        __be = details.requestBody.formData.__be[0];
        __pc = details.requestBody.formData.__pc[0];
        dpr = details.requestBody.formData.dpr[0];
        __rev = details.requestBody.formData.__rev[0];
        __s = details.requestBody.formData.__s[0];
        fb_dtsg = details.requestBody.formData.fb_dtsg[0];
        jazoest = details.requestBody.formData.jazoest[0];
        __spin_r = details.requestBody.formData.__spin_r[0];
        __spin_b = details.requestBody.formData.__spin_b[0];
        __spin_t = details.requestBody.formData.__spin_t[0];
        __user = details.requestBody.formData.__user[0];
    }
},{
    urls: ["https://www.facebook.com/ajax/bz"]
},['requestBody']);

// LISTEN FOR MESSAGES SENT FROM CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message.referrer) {
        referrer = message.referrer;
    }
    if(message.nctr) {
        nctr = message.nctr;
    }
    if(message.uid) {
        uid = message.uid;
        fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {
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
    }
});