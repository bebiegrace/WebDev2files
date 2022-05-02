var flag = true;

$(document).ready(function(){
    $(".black").click(function(){
        $("#target").addClass("black");
        
        $("#target").removeClass("red");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");

        
        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #0000;");

            flag = false;
        } else{
            // $("#cssProp").empty();
        }
        


    });

    $(".red").click(function(){
        $("#target").addClass("red");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #c00000;");

            flag = false;
        } else{}
        
        
    });

    $(".yellowGreen").click(function(){
        $("#target").addClass("yellowGreen");
       
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #92d050;");

            flag = false;
        } else{}
    });

    $(".blue").click(function(){
        $("#target").addClass("blue");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #002060;");

            flag = false;
        } else{}
    });

    $(".skyBlue").click(function(){
        $("#target").addClass("skyBlue");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #5b9bd5;");

            flag = false;
        } else{}
    });
$(".lightOrange").click(function(){
        $("#target").addClass("lightOrange");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffc000;");

            flag = false;
        } else{}
    });

    $(".green").click(function(){
        $("#target").addClass("green");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b050;");

            flag = false;
        } else{}
    });

    $(".purple").click(function(){
        $("#target").addClass("purple");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #7030a0;");

            flag = false;
        } else{}
    });

    $(".orange").click(function(){
        $("#target").addClass("orange");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");

            flag = false;
        } else{}
    });

    $(".yellow").click(function(){
        $("#target").addClass("yellow");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");

            flag = false;
        } else{}
    });
$(".lightblue").click(function(){
        $("#target").addClass("lightblue");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b0f0;");

            flag = false;
        } else{}
        
    });

    $(".pink").click(function(){
        $("#target").addClass("pink");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
            $("#cssProp").append($("#target").attr("style") + "\n background: #f2cff3;");

            flag = false;
        } else{}
    });
});
