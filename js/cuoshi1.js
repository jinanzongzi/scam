<<<<<<< HEAD
var str = "1.收集推销人员及销售公司的信息资料。<br>2.收集保健品的包装及容器。<br>3.保全未使用完毕或食用完毕的保健品。<br>4.收集付款凭证。<br>5.收集证据，携相关凭证上报司法机关。"
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
var str = "1.收集推销人员及销售公司的信息资料。<br>2.收集保健品的包装及容器。<br>3.保全未使用完毕或食用完毕的保健品。<br>4.收集付款凭证。<br>5.收集证据，携相关凭证上报司法机关。"
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