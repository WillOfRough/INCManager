function checkManager() {
    console.log(getCookie("session_id"));
    $.ajax(
        {
            type: "get",
            url: "http://taja.malangmalang.com:7302/login/check/Manager",
            headers: {
                session: getCookie("session_id"),
                service_code: 1
            }
        }
    ).then((data, textStatus, jqXHR) => {
        if (data.code == 200) {
            return;
        } else if (data.code == 203) {
            var password = prompt('비밀번호를 입력해주세요', '');
            console.log(password);
            var sendData ={
                password: password
            }
            $.ajax(
                {
                    type: "post",
                    url: "http://taja.malangmalang.com:7302/login/signUp",
                    headers: {
                        session: getCookie("session_id")
                    },
                    contentType: "application/json; charset=utf-8",
                    data : JSON.stringify(sendData)
                }
            ).then((data,textStatus, jqXHR)=>{
                console.log(data);
                if(data.code == 200){
                    location.reload()
                }
                else{
                    alert("비밀번호가 잘못되었습니다");
                }
            })
        } else {
            console.log(data)
            console.log(data.errors)
            alert('관리자가 아닙니다.');
        }
    })
}