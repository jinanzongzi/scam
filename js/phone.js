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
            var divs = document.querySelectorAll(".answer"); //获取div元素的伪数组集合
            for (var i = 0; i < divs.length; i++) {
                //利用for循环，给每个div添加一个鼠标按下的事件，来触发函数mouseHandler
                divs[i].addEventListener("mousedown", mouseHandler);
            }
            function mouseHandler(e) {
                if (e.type === "mousedown") {
                // console.log(e.offset);
                //   console.log(document.offset)
                  e.preventDefault();
                  document.div = e.target;
                  document.offset = { x: e.offsetX, y: e.offsetY };
                  document.addEventListener("mousemove", mouseHandler);
                  document.addEventListener("mouseup", mouseHandler);
                } else if (e.type === "mousemove") {
                  document.div.style.left = e.clientX - document.offset.x + "px";
                  document.div.style.top = e.clientY - document.offset.y + "px";
                } else if (e.type === "mouseup") {
                  document.removeEventListener("mousemove", mouseHandler);
                  document.removeEventListener("mouseup", mouseHandler);
                //   if(e.clientX <= 150 || e.clientX >= 300 || e.clientY <= 450 || e.clientY >= 500){
                //     document.div.style.left = yuanx + "px";
                //     document.div.style.top = yuany + "px";
                //     // console.log(yuanx);
                //   }
                }
              }
    })
}