<<<<<<< HEAD
var str = "1.老年人办理养老保险、医疗保险等，应当<br>到有关部门、专门网站、社区、村委会了解<br>相关政策，到相关部门的办事窗口、平台依<br>法依规办理。<br>2.先了解相关政策，通过正规途径办理，切<br>勿轻信他人代办。<br>3.如有可疑情况，应及时与子女沟通商议或<br>拨打报警电话。"
        var i = 0;
        function outPuting(){
            var divOutput = document.getElementById('text')
            if(i<=str.length){
                divOutput.innerHTML = str.slice(0,i++) ;
                setTimeout("outPuting()",100)
            }else{
                divOutput.innerHTML = str;
            }
        }
        outPuting();
        function stopSetTimeout() {
            var highestTimeoutId = setTimeout(';');
            for (var i = 0; i < highestTimeoutId; i++) {
                clearTimeout(i);
            }
=======
var str = "1.老年人办理养老保险、医疗保险等，应当<br>到有关部门、专门网站、社区、村委会了解<br>相关政策，到相关部门的办事窗口、平台依<br>法依规办理。<br>2.先了解相关政策，通过正规途径办理，切<br>勿轻信他人代办。<br>3.如有可疑情况，应及时与子女沟通商议或<br>拨打报警电话。"
        var i = 0;
        function outPuting(){
            var divOutput = document.getElementById('text')
            if(i<=str.length){
                divOutput.innerHTML = str.slice(0,i++) ;
                setTimeout("outPuting()",100)
            }else{
                divOutput.innerHTML = str;
            }
        }
        outPuting();
        function stopSetTimeout() {
            var highestTimeoutId = setTimeout(';');
            for (var i = 0; i < highestTimeoutId; i++) {
                clearTimeout(i);
            }
>>>>>>> a011d31 (mmm)
        }