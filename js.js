var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
$.getJSON(url, function (data) {
  strResult = `<i class='fab fa-bitcoin text-warning'></i> ${data.bpi.USD.rate_float}`;
  $('#divResult').html(strResult);
});
