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


// REQUESTS

fetch(
    "https://www.facebook.com/ajax/profile/removefriendconfirm.php",
{
    "credentials":"include",
    "headers":{
        "accept":"*/*",
        "accept-language":"en-US,en;q=0.9",
        "cache-control":"no-cache",
        "content-type":"application/x-www-form-urlencoded",
        "pragma":"no-cache"
    },
    "referrer":"https://www.facebook.com/joeyfenny/friends_all",
    "referrerPolicy":"origin-when-cross-origin",
    "body":
        "uid=100014477568045
        &unref=hc_friends_tab
        &nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2
        &__user=603014086
        &__a=1
        &__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco
        &__req=v
        &__be=1
        &__pc=PHASED%3Aufi_home_page_pkg
        &dpr=3
        &__rev=1000691465
        &__comet_req=false
        &__s=%3Az4up6b%3A9tfgj9
        &fb_dtsg=AQHF0uz_nHi4%3AAQEm_mmFW2dV
        &jazoest=22097
        &__spin_r=1000691465
        &__spin_b=trunk
        &__spin_t=1557426537",
        "method":"POST",
        "mode":"cors"
    });

fetch(
    "https://www.facebook.com/joeyfenny/friends_all",
    {
        "credentials":"include",
        "headers":{
            "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-language":"en-US,en;q=0.9",
            "cache-control":"no-cache",
            "pragma":"no-cache",
            "upgrade-insecure-requests":"1"
        },
        "referrerPolicy":"no-referrer-when-downgrade",
        "body":null,
        "method":"GET",
        "mode":"cors"
    });


    fetch("
    https://www.facebook.com/ajax/hovercard/user.php
    ?id=100013656036905
    &extragetparams=%7B%22hc_location%22%3A%22friends_tab%22%7D
    &fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ
    &endpoint=%2Fajax%2Fhovercard%2Fuser.php%3Fid%3D100013656036905%26extragetparams%3D%257B%2522hc_location%2522%253A%2522friends_tab%2522%257D
    &__user=603014086
    &__a=1
    &__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco
    &__req=y
    &__be=1
    &__pc=PHASED%3Aufi_home_page_pkg
    &dpr=3
    &__rev=1000691465
    &__comet_req=false
    &__s=%3Az4up6b%3A9tfgj9
    &jazoest=27760
    &__spin_r=1000691465
    &__spin_b=trunk
    &__spin_t=1557426537",
    {
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



    fetch("https://www.facebook.com/ajax/browse/null_state.php?fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ&grammar_version=bee09f93fa732cfa59a1cb6d9f450d3892424e49&__user=603014086&__a=1&__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwHxW4EeU4eczobohwkVUkz8nwvoiwBx61zwzU5KE2KDwb-q7ooxu6U6O5oaUvwHwrEsxq487abzoix62PwExLwVzaz88U8K1uw9G7EWUS1kyE4GbDz8oxC2i3u5EW5AbxS2218y82lxG3u36&__req=1&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000691465&__comet_req=false&__s=%3Az4up6b%3Ap0zo25&jazoest=27760&__spin_r=1000691465&__spin_b=trunk&__spin_t=1557426537", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends_all","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});
    fetch("https://www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?filter[0]=app&filter[1]=page&filter[2]=group&filter[3]=friendlist&context=facebar&viewer=603014086&token=v7&lazy=1&__user=603014086&__a=1&fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ&jazoest=27760", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends_all","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});
    fetch("https://www.facebook.com/ajax/pagelet/generic.php/AllFriendsAppCollectionPagelet?fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ&data=%7B%22collection_token%22%3A%22603014086%3A2356318349%3A2%22%2C%22cursor%22%3A%22AQHRQNsAPsbL_NBcaoedp3FMxIf1V5pCYeH8E7R6O0S3gOxhsUrbNZEH0DU-RNfzqBl_oHPD8KEddGx248XzH36n_g%22%2C%22disablepager%22%3Afalse%2C%22overview%22%3Afalse%2C%22profile_id%22%3A%22603014086%22%2C%22pagelet_token%22%3A%22AWt7VnfOYH5Bz3ObsfYXUm2SN7JqIpMw_pa0cvz_miN8ZGh_fkdaZ0Mn_cwpe96TFH0%22%2C%22tab_key%22%3A%22friends_all%22%2C%22lst%22%3A%22603014086%3A603014086%3A1557436177%22%2C%22order%22%3Anull%2C%22sk%22%3A%22friends%22%2C%22importer_state%22%3Anull%7D&__user=603014086&__a=1&__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwDK7EiwXwgUOdwJx61jDxicxu1Zxa2m4o6e2fwmWwaWu0LVEtxy5Urwr8lwHx-2K1KxO4Wx21OyUS4EhwIUa8rUeoOEO2e2bwnE2qxWeKi8wl8G1ayVUO68pwAwTzVKcxp2Utwwwi8y0BoqwTwNw&__req=d&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000691465&__comet_req=false&__s=%3Az4up6b%3Ap0zo25&jazoest=27760&__spin_r=1000691465&__spin_b=trunk&__spin_t=1557426537", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends_all","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});
    fetch("https://www.facebook.com/ajax/photos/snowlift/init.php?fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ&__user=603014086&__a=1&__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwDK7EiwXwgUOdwJx61jDxicxu1Zxa2m4o6e2fwmWwaWu0LVEtxy5Urwr8lwHx-2K1KxO4Wx21OyUS4EhwIUa8rUeoOEO2e2bwnE2qxWeKi8wl8G1ayVUO68pwAwTzVKcxp2Utwwwi8y0BoqwTwNw&__req=e&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000691465&__comet_req=false&__s=%3Az4up6b%3Ap0zo25&jazoest=27760&__spin_r=1000691465&__spin_b=trunk&__spin_t=1557426537", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends_all","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});
    fetch("https://www.facebook.com/ajax/pagelet/generic.php/AllFriendsAppCollectionPagelet?fb_dtsg_ag=AQzculOiLH57tKDoZgiVP7V7iZ9JV2AQRBKQZCyNdvgYEA%3AAQx061HBaKGbuLlOJbCI7gzJksqspPAEEA9h3qWy8Hq0IQ&data=%7B%22collection_token%22%3A%22603014086%3A2356318349%3A2%22%2C%22cursor%22%3A%22AQHRk35Bs9XXgJiViQQVJc8H5efN3EM0Dr1noiGaTHhotdWuBLZvn7kvbDb7EIBOB8NbwMJXnjtEo_G1v2vofPJpTA%22%2C%22disablepager%22%3Afalse%2C%22overview%22%3Afalse%2C%22profile_id%22%3A%22603014086%22%2C%22pagelet_token%22%3A%22AWuAP655X4F2RzNXkG9adxMurwTO-8QZVFbHpDugvkyXXKeZZ6y8_P2-tf5fdJxStSc%22%2C%22tab_key%22%3A%22friends_all%22%2C%22lst%22%3A%22603014086%3A603014086%3A1557436396%22%2C%22order%22%3Anull%2C%22sk%22%3A%22friends%22%2C%22importer_state%22%3Anull%7D&__user=603014086&__a=1&__dyn=7AgNe-4am2d2u6aJGeFxqewKKEKAdy8-S-C267Uqzob4q2i5U4e8wwwVwBGbwSAwDK7EiwXwgUOdwJx61jDxicxu1Zxa2m4o6e2fwmWwaWu0LVEtxy5Urwr8lwHx-2K1KxO4Wx21OyUS4EhwIUa8rUeoOEO2e2bwnE2qxWeKi8wl8G1ayVUO68pwAwTzVKcxp2Utwwwi8y0BoqwTwNw&__req=b&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000691465&__comet_req=false&__s=%3Az4up6b%3Azwldl2&jazoest=27760&__spin_r=1000691465&__spin_b=trunk&__spin_t=1557426537", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends_all","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});