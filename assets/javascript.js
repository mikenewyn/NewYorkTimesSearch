$('#subBut').click(function(event) {
    event.preventDefault();
    var search = $('#searchTerm').val();
    var numRet = $('#numberRetrieve').val();
    var startYear = $('#inputStartYear').val();
    var endYear = $('#inputEndYear').val();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "26e310b213e24b1aa0c449c1830f104f",
    'q': search.toString(),
    'begin_date': startYear.toString(),
    'end_date': endYear.toString(),
    'hl': "true",
    'page': 1
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });
});
