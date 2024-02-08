var love = document.getElementById('add');

            var heart = ['/images/filled-heart.png', '/images/heart.png'];
            function fav(x) {
                String(x); //converting integer parameter to id
                num = Number(love); //converting number of love into integer datatype
                var like = document.getElementById(x);

                //adding fav if heart is empty
                if (like.innerHTML.includes('/images/heart.png')) {
                    like.innerHTML = "<img src =" + heart[0] + ">";
                    love = love + 1;
                }
                //removing fav if the heart is filled and subtracting
                else {
                    like.innerHTML = "<img src =" + heart[1] + ">";
                    love = love - 1;
                }
                // change number in favourite icon
                add.innerHTML = love;
            }