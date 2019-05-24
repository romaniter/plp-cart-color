$('.color button').click(function() {
 var target = event.target;
  while (target.tagName != 'BODY') {
    if ($(target).attr('data-item')) {
        $(target).data('item')[0]['value'] = $(target).find(".name").text();
        if (Boolean($(target).find('.cost').text())) {
          cost = $(target).find(".cost").text();
          $(target).data('item')[1]['value'] = cost; 
          $(target).find('[data-role="itemprice"] span').text(cost);
        }
        $(target).find('.hoverbtn').removeClass('hoverbtn');
        break;
    }
    target = target.parentNode;
  }
 target = event.target;
  while (target.tagName != 'BODY') {
     if ($(target).hasClass('btn')) {
        $(target).addClass('hoverbtn'); 
        return;
    }
 target = target.parentNode;
  }
});
