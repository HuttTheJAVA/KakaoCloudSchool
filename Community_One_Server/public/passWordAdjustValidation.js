
// 아래 함수는 비밀번호가 맞는지 확인하는 함수가 아닌 새로 수정할 비밀번호의 유효성을 검사한다.
// 비밀번호 인증은 이미 adjustPassword페이지를 보여주기 전에 되 있어야 한다.
function validatePassword(password) {

    // 이메일이 비어 있는지 확인
    if (!password) {
        return "비밀번호를 입력해주세요";
    }
    
    // 비밀번호 길이는 8~20
    if (!(password.length<=20 && password.length>=8)){
        return "비밀번호는 8자 이상, 20자 이하";
    }

    // 대문자,소문자 알파벳 각각 한개씩은 포함해야함.
    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password)){
        return "대문자와 소문자를 모두 포함해야 합니다.";
    }

    // 숫자와 특수문자 각각 한개씩은 포함해야함.
    if(!/\d/.test(password) || !/\W/.test(password)){
        return "특수문자와 숫자를 모두 포함해야 합니다.";
    }
    
    return "";
}

function button_change(){
    const button = document.getElementById('adjust');
    const passWord = document.getElementById('password').value;
    const passWordCheck = document.getElementById('password-check').value;

    const passWordMessage = validatePassword(passWord);
    const passWordCheckMessage = validatePassword(passWordCheck);

    let validation_condition = true;

    if(passWordMessage.length || passWordCheckMessage.length){
        validation_condition = false;
    }
    if(validation_condition){
        button.style.backgroundColor = "#7F6AEE";
    }else{
        button.style.backgroundColor = "#ACA0EB";
    }
}

document.getElementById("adjust").addEventListener('click', function() {
    
    var password = document.getElementById("password").value;
    var passWordErrorMessage = validatePassword(password);

    var passwordCheck = document.getElementById("password-check").value;
    var passwordCheckErrorMessage = validatePassword(passwordCheck);
    
    const passwordHelper = document.getElementById('passwordHelper');
    const passwordCheckHelper = document.getElementById('passwordCheckHelper');
    
    passwordHelper.innerHTML = '';
    passwordCheckHelper.innerHTML = '';
    
    if (passWordErrorMessage){
        passwordHelper.innerHTML = '* '+passWordErrorMessage;
    }
    if (passwordCheckErrorMessage) {
        passwordCheckHelper.innerHTML = '* '+passwordCheckErrorMessage;
    }

    if (!passWordErrorMessage && !passwordCheckErrorMessage){
        if(!password == passwordCheck){
            passwordCheckHelper.innerHTML = '비밀번호와 비밀번호 확인이 다릅니다.'
        }else{
            var toastMessage = document.getElementById("adjustToast");
            toastMessage.textContent = "수정 완료";
    
            toastMessage.style.display = "block";
    
            // 그 유명한 비동기 논블로킹 코드
            setTimeout(function() {
                toastMessage.style.display = "none";
            }, 3000); 
        }
    }
});

document.getElementById("password").addEventListener('input',function(){
    button_change();
});

document.getElementById("password-check").addEventListener('input',function(){
    button_change();
});
