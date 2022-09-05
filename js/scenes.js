<<<<<<< HEAD
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
                    video.currentTime = 9;
                    video.play();
                    break;
                case 3:
                    video.currentTime = 17;
                    video.play();
                    break;
                case 4:
                    video.currentTime = 25;
                    video.play();
                    break;
                case 5:
                    video.currentTime = 33;
                    video.play();
                    break;
            }
        }
        video.addEventListener("timeupdate",function(){
            var timeDisplay;
            timeDisplay = Math.floor(video.currentTime);
            if((timeDisplay == 8)||(timeDisplay == 16)||(timeDisplay == 24)||(timeDisplay == 32)||(timeDisplay == 40)){
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
                    if(nowNo == "D"){
                        count++;
                        setTimeout(function(){
                            Trans.className = "trans transanimate";
                            setTimeout(function(){
                                Trans.className = "trans";
                                for(var i = 0;i < 4;i++)
                                {
                                    zis[i].style.opacity = "0";
                                }
                                setTimeout(function(){
                                    zis[0].innerText = "oooo";
                                    zis[1].innerText = "oooo";
                                    zis[2].innerText = "oooo";
                                    zis[3].innerText = "oooo";
                                    video.currentTime = 9;
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
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
            setTimeout(function(){
                omt.style.opacity = "1";
                thief.style.left = "10%";
            },1300)
        }
    })
=======
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
                    video.currentTime = 9;
                    video.play();
                    break;
                case 3:
                    video.currentTime = 17;
                    video.play();
                    break;
                case 4:
                    video.currentTime = 25;
                    video.play();
                    break;
                case 5:
                    video.currentTime = 33;
                    video.play();
                    break;
            }
        }
        video.addEventListener("timeupdate",function(){
            var timeDisplay;
            timeDisplay = Math.floor(video.currentTime);
            if((timeDisplay == 8)||(timeDisplay == 16)||(timeDisplay == 24)||(timeDisplay == 32)||(timeDisplay == 40)){
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
                    if(nowNo == "D"){
                        count++;
                        setTimeout(function(){
                            Trans.className = "trans transanimate";
                            setTimeout(function(){
                                Trans.className = "trans";
                                for(var i = 0;i < 4;i++)
                                {
                                    zis[i].style.opacity = "0";
                                }
                                setTimeout(function(){
                                    zis[0].innerText = "oooo";
                                    zis[1].innerText = "oooo";
                                    zis[2].innerText = "oooo";
                                    zis[3].innerText = "oooo";
                                    video.currentTime = 9;
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
                                    setTimeout(function(){
                                        zis[0].innerText = "oooo";
                                        zis[1].innerText = "oooo";
                                        zis[2].innerText = "oooo";
                                        zis[3].innerText = "oooo";
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
                                setTimeout(function(){
                                    Trans.className = "trans";
                                    for(var i = 0;i < 4;i++)
                                    {
                                        zis[i].style.opacity = "0";
                                    }
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
            setTimeout(function(){
                omt.style.opacity = "1";
                thief.style.left = "10%";
            },1300)
        }
    })
>>>>>>> a011d31 (mmm)
}