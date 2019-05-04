console.log("Chrome Extension Running");

function begin() {
    var elements = document.getElementsByClassName("_5t4x");
    console.log("elements=", elements);

    for (var i = 0; i < elements.length; i++) {

        var userId = elements[i].parentElement.innerHTML.split("/ajax/messaging/composer.php?ids%5B0%5D=")[1].split("&")[0];
        console.log(userId);
        var ajaxRequest = 'fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials": "include","headers": {"accept": "*/*","accept-language": "en-US,en;q=0.9","cache-control": "no-cache","content-type": "application/x-www-form-urlencoded","pragma": "no-cache"},"referrer": "https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1556981574&source_ref=pb_friends_tl","referrerPolicy": "origin-when-cross-origin","body": "uid=' + userId + '&unref=bd_friends_tab&floc=friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=x&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQHwR9MCN5j9%3AAQHKOKYa-Ozv&jazoest=21969&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068","method": "POST","mode": "cors"});';

        elements[i].innerHTML = elements[i].innerHTML + "<div class='thisisatest' onclick='" + ajaxRequest + "' style='color: red !important; float: right; margin-top: 5.5px; cursor: pointer;'><b>X</b></div>";

    }

}

begin();

// test