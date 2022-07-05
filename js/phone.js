function beginning(){
    window.addEventListener("load",function(){
            var Words = document.getElementById("words");
            var TalkWords = document.getElementById("talkwords");
            var TalkSub = document.getElementById("talksub");
            TalkSub.onclick = function() {
                //定义空字符串
                var str = "";
                if (TalkWords.value == "") {
                    // 消息为空时弹窗
                    alert("消息不能为空");
                    console.log(1);
                    return;
                }
                else {
                    str = '<div class="btalk"><span>' + TalkWords.value + '</span></div>';
                    TalkWords.value = "";
                }
                Words.innerHTML = Words.innerHTML + str;
            }
    })
}