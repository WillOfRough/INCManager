function loginURL(){
    var path = window.location.pathname;
    return 'https://dev-accounts.malangmalang.com/sign/in'+'?redirect=' + encodeURIComponent(window.location.protocol + "//" + window.location.host + path);
}
function logoutURL(){
    var path = window.location.pathname;
    return 'https://dev-accounts.malangmalang.com/sign/out'+'?redirect=' + encodeURIComponent(window.location.protocol + "//" + window.location.host + path);
}
function getCookie(cName) {
    var cVal = document.cookie.match('(?:^|;) ?' + cName + '=([^;]*)(?:;|$)');
    if (!cVal) {
        return "";
    } else {
        return cVal[1];
    }
}
function getSessionId(){
    return getCookie("session_id");
}
function getUserEmail(){
    return getCookie("netffice_user_email");
}
function isLoggedIn() {
    // console.log('this.sessionId() : ', this.sessionId());
    return Boolean(getSessionId());
}