 var countPosts = 0;
    var postsContent = [];
    var detailsContent = [];
    var postsImages = [];
    var postsTitles = [];

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setLanguageCookie() {
        var d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        if (getCookie("language") === "") {
                    document.cookie = "language=english;" + expires + ";path=/";
                    $("h1").text("My personal blog");
        } else {
            switch(getCookie("language")) {
                    case 'romana':
                            $("h1").text("Blogul meu personal");
                            document.getElementsByClassName("subheading")[0].innerText = "Un blog despre orice !";
                            document.getElementById("mySelect").value = 'romana';
                            break;  
                    default: 
                            $("h1").text("My personal blog");
                            document.getElementsByClassName("subheading")[0].innerText = "A blog about anything !";
                            document.getElementById("mySelect").value = 'english';
                            break;
                }
        }
    }

    function changeLanguageCookie() {
        var d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = "language=" + document.getElementById("mySelect").value + ";" + expires + ";path=/";
        switch(document.getElementById("mySelect").value) {
            case 'romana':
                    $("h1").text("Blogul meu personal");
                    document.getElementsByClassName("subheading")[0].innerText = "Un blog despre orice !";
                    break;
            default: 
                    $("h1").text("My personal blog");
                    document.getElementsByClassName("subheading")[0].innerText = "A blog about anything !";
                    break;
        }
    }

    function setId(id) {

        var d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = "viewPost=" + id +";" + expires + ";path=/";
        console.log(id);
    }

    var HTMLstring = '';
    function loadDoc(url) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                          x = this.responseXML.documentElement.childNodes;
                          for (var i = 0; i < x.length; i++) {

                            //Found a post
                            if (x[i].nodeType === 1) {
                              console.log(HTMLstring)
                              var childs = x[i].childNodes;
                              let pl, img, title, metInfo, postId, article;
                              for (var j = 0; j < x[i].childNodes.length; j++) {
                                
                                //Found a link
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'pagelink') {
                                    pl = childs[j].innerHTML;
                                }

                                //Found an image
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'image') {
                                    img = childs[j].innerHTML;
                                }

                                //Found a title
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'title') {
                                    title = childs[j].innerHTML;
                                    postsTitles.push(title);
                                }

                                //Found metainfo
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'metainfo') {
                                    metInfo = childs[j].innerHTML;
                                }

                                //Found id
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'id') {
                                    postId = childs[j].innerHTML;
                                }

                                //Found article
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'article') {
                                    detailsContent.push(childs[j].innerHTML);
                                }

                                //Found Article Main Image
                                if (childs[j].nodeType === 1 && childs[j].nodeName === 'postImage') {
                                    postsImages.push(childs[j].innerHTML);
                                }
                              }
                              if (HTMLstring === undefined) {
                                HTMLstring = '';
                              }

                              postsContent[countPosts] =  '<div class="post-preview"' + '"> <a href="' + pl +'"><img src="' + img + '" alt="post img" class="img-responsive thumb margin5 img-thumbnail img-circle">    <a ' + 'id="'+ postId +'" onclick="setId(this.id)" href="' + pl + '"><h2 class="post-title">' + title + '</h2></a><p class="post-meta">' + metInfo + '</p></div><hr>';
                              countPosts += 1;
                              HTMLstring += '<div class="post-preview"> <a href="' + pl +'"><img src="' + img + '" alt="post img" class="img-responsive thumb margin5 img-thumbnail img-circle">    <a href="' + pl + '"><h2 class="post-title">' + title + '</h2></a><p class="post-meta">' + metInfo + '</p></div><hr>';
                            } 
                          }
                        }
                      };
                xhttp.open("GET", "pots.xml", true);
                xhttp.send();
    }

     $.when($.ajax(loadDoc('pots.xml'))).then(function () {

        let posts = " ";
        for(var i = 0; i < 2; i++) {
            posts += postsContent[i];
        }
        document.getElementById('postscontent').innerHTML = posts

    });
