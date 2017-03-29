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