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
function registration(){
    let userId = document.getElementById('userId').value;
    let password = document.getElementById('password').value;
    var sendData ={
        userId : userId,
        password: password
    }
    $.ajax(
        {
            type: "post",
            url: "http://taja.malangmalang.com:7302/login/registration",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(sendData)
        }
    ).then((data,textStatus, jqXHR)=>{
        if(data.code == 200){
            alert("회원가입이 성공되었습니다");
        }
        else{
            console.log(data);
            alert("회원가입 실패");
        }
    });
}