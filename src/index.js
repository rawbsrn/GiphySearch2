import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-service.js';

function clearFields() {
  $('#searchKey').val("");
  $('.showImages').text("");
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    const keyword = $('#searchKey').val();
    clearFields();
    let promise = GiphyService.getGiphy(keyword);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showImages').append(`<img src="${body.data[0].images.fixed_height_small.url}">`);
      //`${body.data[0].images.fixed_height_small.url}`
      //console.log(body.data[0].images.fixed_height_small.url);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
  