function beginning(){
    window.addEventListener("load",function(){
            var Words = document.getElementById("words");
            var TalkWords = document.getElementById("talkwords");
            var TalkSub = document.getElementById("talksub");
            var mohu = document.getElementById("mohu");
            var warnning = document.getElementById("warnning");
            var Trans = document.getElementById("trans");
            var count = 1;
            var nowNo;
            var zis = document.querySelectorAll(".zi"); 
            var thief = document.getElementById("thief");
            var jindu = document.getElementById("jindu");
            var graduate = document.getElementById("graduate");
            var retur = document.getElementById("return");
            TalkSub.onclick = function() {
                //定义空字符串
                // console.log(count);
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
                    Words.innerHTML = Words.innerHTML + str;
                    switch(count){
                        case 1:
                            if(nowNo == "D"){
                                count++;
                                setTimeout(function(){
                                    Trans.className = "trans transanimate";
                                    setTimeout(function(){
                                        Words.innerHTML = '<div class="atalk"><span>【中国移动】:尊敬的客户您好,由于您在营业厅缴费达到xxx,现赠送积分1500,点击进入网址就能1元领取并兑换礼品,xxx(网址)</span></div>';
                                        jindu.innerText = "答题进度：1/5";
                                    },1500)
                                    setTimeout(function(){
                                        Trans.className = "trans";
                                        for(var i = 0;i < 4;i++)
                                        {
                                            zis[i].style.opacity = "0";
                                        }
                                        setTimeout(function(){
                                            zis[0].innerText = "好的,我现在就点击网址领取积分!";
                                            zis[1].innerText = "那我进去支付相应费用就可以领取礼品吧?";
                                            zis[2].innerText = "我先在你们网址填写一下个人信息注册一下";
                                            zis[3].innerText = "我需要致电10086核实一下情况";
                                        },600)
                                        setTimeout(function(){
                                            for(var i = 0;i < 4;i++)
                                            {
                                                zis[i].style.opacity = "1";
                                            }
                                        },1000)
                                    },3000)
                                },500)
                            }
                            else{
                                setTimeout(function(){
                                    Mohu()
                                },500)
                            }
                            break;
                                case 2:
                                if(nowNo == "D"){
                                    count++;
                                    setTimeout(function(){
                                        Trans.className = "trans transanimate";
                                        setTimeout(function(){
                                            Words.innerHTML = '<div class="atalk"><span>低利息、无需担保办理贷款业务，详情咨询xxx或添加经理微信xxx</span></div>';
                                            jindu.innerText = "答题进度：2/5";
                                        },1500)
                                        setTimeout(function(){
                                            Trans.className = "trans";
                                            for(var i = 0;i < 4;i++)
                                            {
                                                zis[i].style.opacity = "0";
                                            }
                                            setTimeout(function(){
                                                zis[0].innerText = "我刚好有资金急需，现在就拨打电话号码办理业务";
                                                zis[1].innerText = "你这是诈骗！我要举报并拉黑你！";
                                                zis[2].innerText = "那我给你我的个人信息你帮我转一下保证金进去";
                                                zis[3].innerText = "我先添加经理微信问问";
                                            },600)
                                            setTimeout(function(){
                                                for(var i = 0;i < 4;i++)
                                                {
                                                    zis[i].style.opacity = "1";
                                                }
                                            },1000)
                                        },3000)
                                    },500)
                                }
                                else{
                                    setTimeout(function(){
                                        Mohu()
                                    },500)
                                }
                                break;
                                case 3:
                                if(nowNo == "B"){
                                    count++;
                                    setTimeout(function(){
                                        Trans.className = "trans transanimate";
                                        setTimeout(function(){
                                            Words.innerHTML = '<div class="atalk"><span>xxx公安局：经调查，您涉嫌非法跨境贷款，请将相关信息上传到xxx网址配合调查，并添加警官微信xxx，我们将对您收取跨境调查调度费，请您将钱款转入xxx，否则我们将立刻逮捕您！</span></div>';
                                            jindu.innerText = "答题进度：3/5";
                                        },1500)
                                        setTimeout(function(){
                                            Trans.className = "trans";
                                            for(var i = 0;i < 4;i++)
                                            {
                                                zis[i].style.opacity = "0";
                                            }
                                            setTimeout(function(){
                                                zis[0].innerText = "阿？我现在就点击网址按照提示上传个人信息！";
                                                zis[1].innerText = "好的好的我现在就添加警官微信，配合执法";
                                                zis[2].innerText = "请告诉我你的警号，我会去当地警局核实";
                                                zis[3].innerText = "我没有阿！我先把费用交了，您再帮我查查可以嘛";
                                            },600)
                                            setTimeout(function(){
                                                for(var i = 0;i < 4;i++)
                                                {
                                                    zis[i].style.opacity = "1";
                                                }
                                            },1000)
                                        },3000)
                                    },500)
                                }
                                else{
                                    setTimeout(function(){
                                        Mohu()
                                    },500)
                                }
                                break;
                                case 4:
                                if(nowNo == "C"){
                                    count++;
                                    setTimeout(function(){
                                        Trans.className = "trans transanimate";
                                        setTimeout(function(){
                                            Words.innerHTML = '<div class="atalk"><span>某公司庆典举办手机抽奖活动，恭喜你中二等奖，凭借居民身份证领取奖品，回复短信表示收到，逾期不候，详情致电xxx</span></div>';
                                            jindu.innerText = "答题进度：4/5";
                                        },1500)
                                        setTimeout(function(){
                                            Trans.className = "trans";
                                            for(var i = 0;i < 4;i++)
                                            {
                                                zis[i].style.opacity = "0";
                                            }
                                            setTimeout(function(){
                                                zis[0].innerText = "我并未参加过你所说的抽奖活动，你这是诈骗！";
                                                zis[1].innerText = "太棒了！我现在就拨打电话按照要求操作！";
                                                zis[2].innerText = "你好，请问奖品在哪里领？";
                                                zis[3].innerText = "我是xxx，身份证号是xxx";
                                            },600)
                                            setTimeout(function(){
                                                for(var i = 0;i < 4;i++)
                                                {
                                                    zis[i].style.opacity = "1";
                                                }
                                            },1000)
                                        },3000)
                                    },500)
                                }
                                else{
                                    setTimeout(function(){
                                        Mohu()
                                    },500)
                                }
                                break;
                                case 5:
                                if(nowNo == "A"){
                                    count++;
                                    setTimeout(function(){
                                        Trans.className = "trans transanimate";
                                        setTimeout(function(){
                                            Words.innerHTML = '<div class="atalk"><span>居然一次也没有上当！这个人的防范意识也太强了吧</span></div>';
                                            jindu.innerText = "答题进度：5/5";
                                            graduate.style.width = "700px";
                                            graduate.style.height = "100px";
                                        },1000)
                                        setTimeout(function(){
                                            mohu.style.filter = "blur(7px)";
                                            mohu.style.background = "#e2ebf0";
                                            mohu.style.zIndex = "998";
                                            omt.style.width = "193px";
                                            omt.style.height = "80px";
                                            omt.style.left = "944px";
                                            retur.style.width = "193px";
                                            retur.style.height = "80px";
                                            retur.style.left = "250px";
                                            setTimeout(function(){
                                                omt.style.opacity = "1";
                                                retur.style.opacity = "1";
                                                graduate.style.opacity = "1";
                                            },1300)
                                        },3000)
                                    },500)
                                }
                                else{
                                    setTimeout(function(){
                                        Mohu()
                                    },500)
                                }
                                break;
                    
                    }
                }
            }
            function Mohu(){
                mohu.style.filter = "blur(7px)";
                mohu.style.background = "#e2ebf0";
                mohu.style.zIndex = "998";
                warnning.className = "warnning warndown";
                omt.style.width = "193px";
                omt.style.height = "80px";
                omt.style.left = "944px";
                setTimeout(function(){
                    omt.style.opacity = "1";
                    thief.style.left = "10%";
                },1300)
            }
            var divs = document.querySelectorAll(".answer"); 
            for (var i = 0; i < divs.length; i++) {
                divs[i].addEventListener("mousedown", mouseHandler);
            }
            function mouseHandler() {
              // console.log(this.innerText);
              TalkWords.value = this.innerText;
              nowNo = this.id;
            }
    })
}