console.log("Chrome Extension Running");

function begin() {
    var elements = document.getElementsByClassName("_5t4x");
    console.log("elements=", elements);

    for (var i = 0; i < elements.length; i++) {

        var onclick = "onclick='alert()'"

        elements[i].innerHTML = elements[i].innerHTML + "<div class='thisisatest'"+onclick+"style='color: red !important; float: right; margin-top: 5.5px; cursor: pointer;'><b>X</b></div>";

        var userId = elements[i].parentElement.innerHTML.split("/ajax/messaging/composer.php?ids%5B0%5D=")[1].split("&")[0];
        console.log(userId);

        // fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials": "include","headers": {"accept": "*/*","accept-language": "en-US,en;q=0.9","cache-control": "no-cache","content-type": "application/x-www-form-urlencoded","pragma": "no-cache"},"referrer": "https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1556981574&source_ref=pb_friends_tl","referrerPolicy": "origin-when-cross-origin","body": "uid=100023955450401&unref=bd_friends_tab&floc=friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=x&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQHwR9MCN5j9%3AAQHKOKYa-Ozv&jazoest=21969&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068","method": "POST","mode": "cors"});        
    }

}

begin();

// fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials": "include","headers": {"accept": "*/*","accept-language": "en-US,en;q=0.9","cache-control": "no-cache","content-type": "application/x-www-form-urlencoded","pragma": "no-cache"},"referrer": "https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1556981574&source_ref=pb_friends_tl","referrerPolicy": "origin-when-cross-origin","body": "uid=100023955450401&unref=bd_friends_tab&floc=friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=x&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQHwR9MCN5j9%3AAQHKOKYa-Ozv&jazoest=21969&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068","method": "POST","mode": "cors"});

// fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {
//     "credentials": "include",
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9",
//         "cache-control": "no-cache",
//         "content-type": "application/x-www-form-urlencoded",
//         "pragma": "no-cache"
//     },
//     "referrer": "https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1556981574&source_ref=pb_friends_tl",
//     "referrerPolicy": "origin-when-cross-origin",
//     "body": "uid=100014738316528&unref=hc_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=r&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQEY1oQmZkIz%3AAQEBaYokOSNN&jazoest=22107&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068",
//     "method": "POST",
//     "mode": "cors"
// });


// successful response
// for (;;);{"__ar":1,"payload":null,"jsmods":{"instances":[["__inst_655019fa_q_0",["RemoveFriendDialog"],[null,100014947307391,true,true],1]],"require":[["__inst_655019fa_q_0"]],"define":[["cr:794450",["FBLoggerImpl"],{"__rc":["FBLoggerImpl","Aa0Z4EnUFpYXd6atPvAjjLjbZTHw7FrfzztiJdiJ5iU0LCgOhI9sbD_6uC-sr4xD-6aAPzb8fXL86OnTWNTx6L8"]},-1],["cr:838175",["ErrorUtils"],{"__rc":["ErrorUtils","Aa0Z4EnUFpYXd6atPvAjjLjbZTHw7FrfzztiJdiJ5iU0LCgOhI9sbD_6uC-sr4xD-6aAPzb8fXL86OnTWNTx6L8"]},-1],["cr:882315",[],{"__rc":[null,"Aa0Z4EnUFpYXd6atPvAjjLjbZTHw7FrfzztiJdiJ5iU0LCgOhI9sbD_6uC-sr4xD-6aAPzb8fXL86OnTWNTx6L8"]},-1]]},"js":["OMScO"],"bootloadable":{},"resource_map":{"OMScO":{"type":"js","src":"https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y0\/r\/RPKy5sRdzDI.js?_nc_eui2=AeEN8hbxVbMahBVX2HZZ6IfOSL5heF6qlkWzYxfEx_5WWDq5l1lqVI1MxJSLkHj2FvN0OcYUz1oNJzx7FBEjamrQb-iLPRQtD40fVWeyhBFThg","crossOrigin":1}},"ixData":{},"bxData":{},"gkxData":{},"qexData":{},"lid":"6687208966903528446"}