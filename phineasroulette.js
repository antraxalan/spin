var options = {
  prices: [
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    },
    {
      name: '6'
    },
    {
      name: '7'
    },
  ],
  duration: 2000,
  clockWise: false
};

var $r = $('.roulette').fortune(options);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  //var price = Math.floor((Math.random() * 8));
  $r.spin().done(function(price) {
      // $('.price').text('Lo que te toco: ' + price.name);
      $('.spinner').on('click', clickHandler);
      $('.spinner span').show();
    });
};

$('.spinner').on('click', clickHandler);
