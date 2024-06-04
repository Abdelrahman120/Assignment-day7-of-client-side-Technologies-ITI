function getdata(){
    var xhrposts = new XMLHttpRequest();
    xhrposts.open("get","https://jsonplaceholder.typicode.com/posts");
    xhrposts.send();
    
    xhrposts.addEventListener("readystatechange",function(){
            if(xhrposts.readyState === 4 && xhrposts.status === 200){
                var posts = JSON.parse(xhrposts.response);
                getdata(posts);
                for(var i=0;i<posts.length;i++){
                    var div = document.createElement("div");
                    div.innerHTML="<h3>"+posts[i].title+"</h3><p>"+posts[i].body+"</p>";
                    document.body.appendChild(div);
                    div.firstChild.style.textAlign="center";
                    div.lastChild.style.fontSize="25px";
                    for(var i=0; i<posts.length; i++){
                        var color1=Math.random()*255;
                        var color2=Math.random()*255;
                        var color3=Math.random()*255;
                        div.lastChild.style.backgroundColor="rgb("+color1+","+color2+","+color3+")";
                    }
                    
                    div.lastChild.style.fontFamily="Cursive";
                }
            }
    })
    document.getElementsByTagName("button")[0].style.display="none";
}