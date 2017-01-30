(function () {
    $(init);
    function init()
    {
      $("#searchMovie").click(searchMovie);
      var movieTitle = $("#movieTitle");
      var tbody = $("#container");//table.find("tbody");
      var template = $("#template").clone();

      function searchMovie() {

          var title = movieTitle.val();

          $.ajax({

            url:"http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json",
            success: renderMoviesWithTemplate
          });

          function renderMoviesWithTemplate(movies) {
             console.log(movies);

             tbody.empty();

             for (var m of movies.Search) {
                        console.log();
                      var title = m.Title;
                      var poster = m.Poster;
                      var year = m.Year;
                      var imdbId=m.imdbID;
                      var url = "http://www.omdbapi.com/?s="+title;

                    var tr = template.clone();

                      tr.find(".link")
                          .attr("href",url)
                          .html(title);

                      tr.find(".year")
                            .html(year);

                      tr.find(".Id")
                            .html(imdbId);

                      tr.find(".poster")
                            .attr("src",poster);

                      tbody.append(tr);
               }
             }
          }
      }
    }) ();
