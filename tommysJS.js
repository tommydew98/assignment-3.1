$(document).ready(function(){
    
    var intDiv = document.getElementById("TextInput");
    var postDiv = document.getElementById("OutputThing");
    
    
    var movie = document.getElementById("Movie");
    console.log('ready');
    
    var regExpression = /^[A-Za-z0-9]{8,15}$/;
    var regImg = /\.(jpg|png|gif)$/;
    var regMovie = /^[A-Za-z ]{1,25}$/;
    var regComment = /^[A-Za-z0-9 \.,?!]{1,100}$/;
    


    var submitBut = document.getElementById("submit");
    var Nuser = document.getElementById("User");
    var Nimg = document.getElementById("Link");
    var Nmovie = document.getElementById("Movie");
    var Ncomment = document.getElementById("Comment");
    var b = regExpression.test(Nuser.value);
    var c = regImg.test(Nimg.value);
    var d = regMovie.test(Nmovie.value);
    var e = regComment.test(Ncomment.value);
    var DivErr = document.getElementById("ErrorDiv");

    Nuser.onkeyup = function(){
        var b = regExpression.test(Nuser.value);
        if (b){
            console.log("yes");
            Nuser.style.color = "green";
            Nuser.style.borderColor = "green";
            DivErr.innerHTML = "";
        } else {
            Nuser.style.color = "red";
            Nuser.style.borderColor = "red";
            DivErr.innerHTML = "Invalid Username. Must contain 8-15 chacaters using a-z or 0-9";
        }
    }
    Nimg.onkeyup = function(){
        var c = regImg.test(Nimg.value);
        if (c){
            console.log("yes");
            Nimg.style.color = "green";
            Nimg.style.borderColor = "green";
            DivErr.innerHTML = "";
        } else {
            Nimg.style.color = "red";
            Nimg.style.borderColor = "red";
            DivErr.innerHTML = "Invalid link. Must end in .jpg/.png/,gif";
        }
    }
    Nmovie.onkeyup = function(){
        var d = regMovie.test(Nmovie.value);
        if (d){
            console.log("yes");
            Nmovie.style.color = "green";
            Nmovie.style.borderColor = "green";
            DivErr.innerHTML = "";
        } else {
            Nmovie.style.color = "red";
            Nmovie.style.borderColor = "red";
            DivErr.innerHTML = "Invalid movie. Must be only alphabets.";
        }
    }
    Ncomment.onkeyup = function(){
        var e = regComment.test(Ncomment.value);
        if (e){
            console.log("yes");
            Ncomment.style.color = "green";
            Ncomment.style.borderColor = "green";
            DivErr.innerHTML = "";
        } else {
            Ncomment.style.color = "red";
            Ncomment.style.borderColor = "red";
            DivErr.innerHTML = "Invalid Comment. Must only use  alphabets, numbers, space, .,?! ";
        }
    }
    
   

    
    submitBut.onclick = function(){
        var b = regExpression.test(Nuser.value);
        var c = regImg.test(Nimg.value);
        var d = regMovie.test(Nmovie.value);
        var e = regComment.test(Ncomment.value);
        if(d && c && b && e){
            var newDiv = document.createElement("div");
            var userDiv = document.createElement("div");
            var imgDiv = document.createElement("img");
            var commentDiv = document.createElement("div");
            var movieDiv = document.createElement("img");

            newDiv.className = "post";
            userDiv.className = "Puser";
            imgDiv.className = "Pimg";
            commentDiv.className = "Pcom";
            movieDiv.className = "Pmovie";

            userDiv.innerHTML = Nuser.value;
            commentDiv.innerHTML = Ncomment.value;
            imgDiv.src = Nimg.value;

            $.ajax({
                url:"https://www.omdbapi.com/?t="+Nmovie.value,
                dataType:"jsonp",
                success:function(resp){
                    console.log(resp)
                    movieDiv.src = resp.Poster;
                }
            });


            postDiv.appendChild(newDiv);
            newDiv.appendChild(userDiv);
            newDiv.appendChild(imgDiv);
            newDiv.appendChild(commentDiv);
            newDiv.appendChild(movieDiv);
        }
    }
    
    



});