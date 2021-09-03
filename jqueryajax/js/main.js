'use strict';

const apiURL = 'https://api.tvmaze.com/singlesearch/shows?q=';

$.getJSON(apiURL + 'house', function(response){
    console.log(response);
});