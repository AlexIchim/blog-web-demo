        var current_page = 1;
        var records_per_page = 3;

        function prevPage() {
            if (current_page > 1) { 
                current_page--;
                changePage(current_page); 
            }
            console.log(current_page);
        }

        function nextPage() {
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
            console.log(current_page);

        }

        function numPages() {
            return countPosts / records_per_page;
        }

        function changePage(page) {
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            var listing_table = document.getElementById("postscontent");

            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();

            listing_table.innerHTML = "";

            for(var i = (page - 1) * records_per_page; i < (page * records_per_page); i++ ) {
                listing_table.innerHTML += postsContent[i];
            }

            if (page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }

            if (page == numPages()) {
                btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
        }