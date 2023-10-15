"use strict";

const getCookieByName = name => {
    const getCookie = document.cookie;
    let startingIndex = getCookie.indexOf(name + "=");
    if(startingIndex == -1) { return ""; }
    else
    {
        startingIndex += (name.length+1);
        let endingIndex = getCookie.indexOf(";", startingIndex);
        if (endingIndex == -1) {
        endingIndex = getCookie.length;
        }
        const cookieValue = getCookie.substring(startingIndex, endingIndex);
        return decodeURIComponent(cookieValue);
    }
};

const setCookie = (name, value, days) => {

    let cookie = name + "=" + encodeURIComponent(value) + "; max-age=" + days * 24 * 60 * 60 +  "; path=/";
    document.cookie = cookie;
};

const deleteCookie = name => {
    document.cookie = name + "= " + "; max-age=0; path=/";
};

const goToPage = url => {
    window.location.href=url;
};