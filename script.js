
var change = document.getElementsByClassName("base");

for(var i=0; i<=change.length;i++){
    change[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value=="red"){
            document.body.style.backgroundColor = "red";
        }
        else if(value=="blue"){
            document.body.style.backgroundColor = "blue";
        }
        else if(value=="green"){
            document.body.style.backgroundColor = "green";
        }
        else if(value=="yellow"){
            document.body.style.backgroundColor = "yellow";
        }
        else if(value=="brown"){
            document.body.style.backgroundColor = "brown";
        }
        else if(value=="pink"){
            document.body.style.backgroundColor = "pink";
        }
        else if(value=="purple"){
            document.body.style.backgroundColor = "purple";
        }
        else if(value=="orange"){
            document.body.style.backgroundColor = "orange";
        }
        else if(value=="aqua"){
            document.body.style.backgroundColor = "aqua";
        }
        else if(value=="orchid"){
            document.body.style.backgroundColor = "orchid";
        }
        else if(value=="crimson"){
            document.body.style.backgroundColor = "crimson";
        }
        else if(value=="lg"){
            document.body.style.backgroundColor = "rgb(44, 210, 15)";
        }
    })
}


