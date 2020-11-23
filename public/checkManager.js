function checkManager(){
    console.log(getCookie("session_id"));
    $.ajax(
        {
            type:"get",
            url :"http://taja.malangmalang.com:7302/login/check/Manager",
            headers: {
                session : getCookie("session_id"),
                service_code : 1
            }
        }
    ).then((data,textStatus,jqXHR)=>{
        if(data.code==200){
            return;
        }
        else{
            alert( '관리자가 아닙니다.' );
        }
    })
}