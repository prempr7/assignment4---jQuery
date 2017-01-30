(function () {
    $(init);
    function init()
    {
      $("#searchMovie").click(searchMovie);
      var movieTitle = $("#movieTitle");
      var table = $("#results");
      var tbody = $("#results tbody");//table.find("tbody");

      function searchMovie() {

          var title = movieTitle.val();

          $.ajax({

            url:"http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json",
            success: renderMovies
          });

          function renderMovies(movies) {
             console.log(movies);

             tbody.empty();

             for (var m of movies.Search) {
                        console.log();
                      var title = m.Title;
                      var poster = m.Poster;
                      var year = m.Year;
                      var imdbId=m.imdbID;
                      var url = "http://www.omdbapi.com/?s="+title;

                      var tr = $("<tr>");
                      var titleLink = $("<a>").attr("href",url).html(title);
                      var titleTd = $("<td>").append(titleLink);
                      var yearTd = $("<td>").append(year);
                      var imdbIdTd = $("<td>").append(imdbId);
                      var img = $("<img class='img-responsive' alt='./no.png'>").attr("src",poster);
                      var posterTd = $("<td>").append(img);

                      tr.append(titleTd);
                      tr.append(yearTd);
                      tr.append(imdbIdTd);
                      tr.append(posterTd);

                      tbody.append(tr);
               }
             }
          }
      }
    }) ();
