function begin() {
    var elements = document.querySelectorAll("._5qo4");

    for (var i = 0; i < elements.length; i++) {
        var userId = elements[i].innerHTML.split("id=")[1].split("&")[0];
        var unfriend = 'this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials": "include","headers": {"accept": "*/*","accept-language": "en-US,en;q=0.9","cache-control": "no-cache","content-type": "application/x-www-form-urlencoded","pragma": "no-cache"},"referrer": "' + document.location.href + '","referrerPolicy": "origin-when-cross-origin","body": "uid=' + userId + '&unref=bd_friends_tab&floc=friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=' + document.location.href.split("&lst=")[1].split("%")[0] + '&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=x&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQHwR9MCN5j9%3AAQHKOKYa-Ozv&jazoest=21969&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068","method": "POST","mode": "cors"});';

        // if delete button doesn't already exist, add one
        if (elements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) {
            var elem = elements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
            elem.innerHTML = elem.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + unfriend + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
        }
    }
}

begin();



















var nctr = document.querySelector('[role="tab"]').parentElement.innerHTML.toString().split("pagelet_timeline_app_collection_")[1].split('"')[0];
var __user = nctr.split(":")[0];
var referrer;
var uid;
var __dyn;
var __rev;
var __s;
var fb_dtsg;
var jazoest;
var __spin_r;
var __spin_t;


var uid;




// REQUESTS

fetch(
    - "https://www.facebook.com/ajax/profile/removefriendconfirm.php",
{
    - "credentials":"include",
    - "headers":{
        - "accept":"*/*",
        - "accept-language":"en-US,en;q=0.9",
        - "cache-control":"no-cache",
        - "content-type":"application/x-www-form-urlencoded",
        - "pragma":"no-cache"
    },
    - "referrer":"https://www.facebook.com/joeyfenny/friends_all",
    - "referrerPolicy":"origin-when-cross-origin",
    - "body":
*-        "uid=100014477568045
        - &unref=hc_friends_tab
*        &nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2
        - &__user=603014086
        - &__a=1
        - &__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco
        - &__req=v
        - &__be=1
        - &__pc=PHASED%3Aufi_home_page_pkg
        - &dpr=3
        - &__rev=1000691465
        - &__comet_req=false
        - &__s=%3Az4up6b%3A9tfgj9
*-        &fb_dtsg=AQHF0uz_nHi4%3AAQEm_mmFW2dV
        - &jazoest=22097
        - &__spin_r=1000691465
        - &__spin_b=trunk
        - &__spin_t=1557426537",
        - "method":"POST",
        - "mode":"cors"
    });





    // main account
    fetch("
    - https://www.facebook.com/ajax/browse/null_state.php
    - ?fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ
    - &grammar_version=bee09f93fa732cfa59a1cb6d9f450d3892424e49
    &__user=603014086
    - &__a=1
    &__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwHxW4EeU4eczobohwkVUkz8nwvoiwBx61zwzU5KE2KDwb-q7ooxu6U6O5oaUvwHwrEsxq487abzoix62PwExLwVzaz88U8K1uw9G7EWUS1kyE4GbDz8oxC2i3u5EW5AbxS2218y82lxG3u36
    - &__req=1
    - &__be=1
    - &__pc=PHASED%3Aufi_home_page_pkg
    - &dpr=3
    &__rev=1000691465
    &__comet_req=false
    &__s=%3Az4up6b%3Ap0zo25
    &jazoest=27760
    &__spin_r=1000691465
    - &__spin_b=trunk
    &__spin_t=1557426537",
    - {
        "credentials":"include",
        "headers":{
            "accept":"*/*",
            "accept-language":"en-US,en;q=0.9",
            "cache-control":"no-cache",
            "pragma":"no-cache"
        },
        "referrer":"https://www.facebook.com/joeyfenny/friends_all",
        "referrerPolicy":"origin-when-cross-origin",
        "body":null,
        "method":"GET",
        "mode":"cors"
    });
            
    // SECOND ACCOUNT
    fetch(
        "https://www.facebook.com/ajax/browse/null_state.php
        ?fb_dtsg_ag=AQzzE-0-CUpHbSJYKtUNMInQQeymV3e9e5ylAaUmL8TSxw%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ
        &grammar_version=bee09f93fa732cfa59a1cb6d9f450d3892424e49
        &__user=100036581970097
        &__a=1
        &__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwHxW4EeU4eczobohwkVUkz8nwvoiwBx61zwzU5KE2KDwb-q7ooxu6U6O5oaUvwHwrEsxq487abzoix62PwExLwVzaz88U8K1uw9G7EWUS1kyE4GbDz8oxC2i3u5EW5AbxS2218y82lxG3u36
        &__req=1
        &__be=1
        &__pc=PHASED%3Aufi_home_page_pkg
        &dpr=3
        &__rev=1000696265
        &__s=%3A2ihvqm%3Aureeo7
        &jazoest=27842
        &__spin_r=1000696265
        &__spin_b=trunk
        &__spin_t=1557479953",
        {
            "credentials":"include",
            "headers":{
                "accept":"*/*",
                "accept-language":"en-US,en;q=0.9",
                "cache-control":"no-cache",
                "pragma":"no-cache"
            },
            "referrer":"https://www.facebook.com/profile.php?id=100036581970097&lst=100036581970097%3A100036581970097%3A1557479984&sk=friends&source_ref=pb_friends_tl",
            "referrerPolicy":"origin-when-cross-origin",
            "body":null,
            "method":"GET",
            "mode":"cors"
        });