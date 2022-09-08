function beginning(){
    window.addEventListener("load",function(){
        var divs = document.querySelectorAll(".answer"); 
        var mohu = document.getElementById("mohu");
        var nowNo;
        var count = 1;
        var zis = document.querySelectorAll(".zi"); 
        var Trans = document.getElementById("trans");
        var video = document.getElementById("video");
        var omt = document.getElementById("omt");
        var replay = document.getElementById("replay");
        var thief = document.getElementById("thief");
        var graduate = document.getElementById("graduate");
        var retur = document.getElementById("return");
        for (var i = 0; i < divs.length; i++) {
            divs[i].addEventListener("mousedown", mouseHandler);
        }
        replay.addEventListener("mousedown", onceagain);
        function onceagain(){
            switch(count){
                case 1:
                    video.currentTime = 0;
                    video.play();
                    break;
                case 2:
                    video.currentTime = 30;
                    video.play();
                    break;
                case 3:
                    video.currentTime = 80;
                    video.play();
                    break;
                case 4:
                    video.currentTime = 116;
                    video.play();
                    break;
                case 5:
                    video.currentTime = 139;
                    video.play();
                    break;
            }
        }
        video.addEventListener("timeupdate",function(){
            var timeDisplay;
            timeDisplay = Math.floor(video.currentTime);
            if((timeDisplay == 29)||(timeDisplay == 79)||(timeDisplay == 115)||(timeDisplay == 138)||(timeDisplay == 160)){
                video.pause()
                for(var i = 0;i < 4;i++)
                {
                    zis[i].style.opacity = "1";
                }
            }
        },false);
        function mouseHandler() {
            nowNo = this.id;
            switch(count){
                case 1:
                    if(nowNo == "B"){
                        count++;
                        setTimeout(function(){
                            Trans.className = "trans transanimate";
                            jindu.innerText = "答题进度：1/5";
                            setTimeout(function(){
                                Trans.className = "trans";
                                for(var i = 0;i < 4;i++)
                                {
                                    zis[i].style.opacity = "0";
                                }
                                setTimeout(function(){
                                    zis[0].innerText = "还有这种好事？快给我办理！";
                                    zis[1].innerText = "年龄老了，都不知道现在的养老政策了";
                                    zis[2].innerText = "这样还不用麻烦我女儿，就按你说的做";
                                    zis[3].innerText = "我才不信钱生钱这种歪理，你这是诈骗！";
                                    video.currentTime = 30;
                                    video.play();
                                },700)
                            },2500)
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
                                jindu.innerText = "答题进度：2/5";
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "哎呀，正好我最近腰酸背痛，来一瓶";
                                        zis[1].innerText = "你的骗术漏洞百出，我才不会上当！";
                                        zis[2].innerText = "既能外用又能内服？这可是好东西";
                                        zis[3].innerText = "你们当志愿者的也不容易，我就买一瓶吧";
                                        video.currentTime = 80;
                                        video.play();
                                    },700)
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
                                jindu.innerText = "答题进度：3/5";
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "什么公司，这么好心，那我可就收下啦";
                                        zis[1].innerText = "这布鞋感觉质量不好阿，管他呢反正不要钱";
                                        zis[2].innerText = "我不会把自己的个人信息透露给你的！";
                                        zis[3].innerText = "我没有智能手机，我把信息写在纸上你送我一双吧";
                                        video.currentTime = 116;
                                        video.play();
                                    },700)
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
                                jindu.innerText = "答题进度：4/5";
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "全民防疫没有利益可言，你这就是诈骗！";
                                        zis[1].innerText = "总有用到的时候，先买了再说";
                                        zis[2].innerText = "社区来的？那应该不会骗人吧";
                                        zis[3].innerText = "反正现在隔几天就要核酸，我给老伴也买一个";
                                        video.currentTime = 139;
                                        video.play();
                                    },700)
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
                                jindu.innerText = "答题进度：5/5";
                                setTimeout(function(){
                                    mohu.style.filter = "blur(7px)";
                                    mohu.style.background = "#fdffc9";
                                    mohu.style.zIndex = "998";
                                    omt.style.width = "193px";
                                    omt.style.height = "80px";
                                    omt.style.top = "400px";
                                    retur.style.width = "193px";
                                    retur.style.height = "80px";
                                    retur.style.left = "250px";
                                    graduate.style.width = "700px";
                                    graduate.style.height = "100px";
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
        function Mohu(){
            mohu.style.filter = "blur(7px)";
            mohu.style.background = "#fdffc9";
            mohu.style.zIndex = "998";
            warnning.className = "warnning warndown";
            omt.style.width = "193px";
            omt.style.height = "80px";
            omt.style.top = "400px";
            setTimeout(function(){
                omt.style.opacity = "1";
                thief.style.left = "10%";
            },1300)
        }
    })
}