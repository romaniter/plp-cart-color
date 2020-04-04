$('.color button').click(function() {
 //Save button click to variable
 var target = event.target;
  //Main loop
  while (target.tagName != 'BODY') {
    //If button check name and cost
    if ($(target).hasClass('btn')) {
        text = $(target).find(".name").text();
        cost = $(target).find(".cost").text();
        pht = $(target).find(".pht").text();
    }
    //If item block change values and break
    if ($(target).attr('data-item')) {
        $(target).data('item')[0]['value'] = text;
        if (Boolean(cost)) {
          $(target).data('item')[1]['value'] = cost;
          $(target).find('[data-role="itemprice"] span').text(cost);
        }
       if (Boolean(pht)) {
       $(target).data('item')[2]['value'] = pht;
       $(target).find('[data-role="image"] img').attr("src",pht);
       }
        $(target).find('.hoverbtn').removeClass('hoverbtn');
         //Add photo to cart
        function add() {
	    var grid = $('[data-modal=cart] div:contains("' + text + '")').parents('.grid');
            var getAtributeImage = $(grid).find('[data-role=itemphoto]').attr('style');
       	    $(grid).find('[data-role=itemphoto]').attr('style', getAtributeImage +'; ' + 'background-image: url('+ pht +')');
	};

        $(target).find('[data-action=addtocart]').click(function() {
               setTimeout(add, 500);
        });
        break;
    }
    //Nothing to do - go up
    target = target.parentNode;
  }
 //Reset target for next loop
 target = event.target;

  //Add border
  while (target.tagName != 'BODY') {
     if ($(target).hasClass('btn')) {
        $(target).addClass('hoverbtn');
        return;
    }
    target = target.parentNode;
  }
});
