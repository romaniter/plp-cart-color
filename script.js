$('.color button').click(function() {
 //Save button click to variable 
 var target = event.target; 
  //Main loop
  while (target.tagName != 'BODY') {
    //If button check name and cost
    if ($(target).hasClass('btn')) {
        text = $(target).find(".name").text();
        cost = $(target).find(".cost").text();
    }
    //If item block change values and break
    if ($(target).attr('data-item')) {
        $(target).data('item')[0]['value'] = text;
        if (Boolean(cost)) {
          $(target).data('item')[1]['value'] = cost; 
          $(target).find('[data-role="itemprice"] span').text(cost);
        }
        $(target).find('.hoverbtn').removeClass('hoverbtn');
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
