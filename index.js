var now = new Date();
function GetServerTime()
{
    var urodz = new Date("12/22/2018 08:30:00");//设定倒计时的时间
    now.setTime(now.getTime()+250);
    days = (urodz - now) / 1000 / 60 / 60 / 24;
    daysRound = Math.floor(days);
    hours = (urodz - now) / 1000 / 60 / 60 - (24 * daysRound);
    hoursRound = Math.floor(hours);
    minutes = (urodz - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
    minutesRound = Math.floor(minutes);
    seconds = (urodz - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    secondsRound = Math.round(seconds);
    var obj = document.getElementById("time_second");
    daysRound = daysRound;
    if(daysRound >= 0) {
        obj.innerHTML="<h1><span>"+daysRound+"</span> 天 <span>"+hoursRound+"</span> 时 <span>"+minutesRound+"</span> 分</h1>" ;
    }
}
setInterval("GetServerTime()",30000);

GetServerTime()

