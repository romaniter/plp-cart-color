$('.color button').click(function() {
 var target = event.target;
  while (target.tagName != 'BODY') {
    if ($(target).hasClass('widget-element')) {
        $(target).data('item')[0]['value'] = $(event.target).find(".name").text();
        if (Boolean($(event.target).find('.cost').text())) {
          cost = $(event.target).find(".cost").text();
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
