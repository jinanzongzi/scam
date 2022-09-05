<<<<<<< HEAD
var str = "1.第一时间向属地公安部门报案。<br>2.尽可能多的留存证据,例如以下内容：<br>（1）打款记录截图或银行转账单据。<br>（2）聊天记录截图<br>3.将公安部门的接警或立案回执、证据材料、<br>违法网站网址、违法即时通讯账号等一并向<br>举报中心提交。"
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
var str = "1.第一时间向属地公安部门报案。<br>2.尽可能多的留存证据,例如以下内容：<br>（1）打款记录截图或银行转账单据。<br>（2）聊天记录截图<br>3.将公安部门的接警或立案回执、证据材料、<br>违法网站网址、违法即时通讯账号等一并向<br>举报中心提交。"
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