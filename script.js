$('.color button').click(function() {
 var target = event.target;
  //Основной цикл
  while (target.tagName != 'BODY') {
    //Поиск кнопки и парсинг данных из нее
    if ($(target).hasClass('btn')) {
        text = $(target).find(".name").text();
        cost = $(target).find(".cost").text();
        pht = $(target).find(".pht").text();
    }
    //Если таргет - карточка товара, изменяем данные
    if ($(target).attr('data-item')) {
        $(target).data('item')[0]['value'] = text;
            //Если есть цена - меняем цену в карточке
	    if (Boolean(cost)) {
              $(target).data('item')[1]['value'] = cost;
              $(target).find('[data-role="itemprice"] span').text(cost);
            }
            //Если есть фото - меняем фото в карточке
	    if (Boolean(pht)) {
              $(target).data('item')[2]['value'] = pht;
              $(target).find('[data-role="image"] img').attr("src",pht);
            }
	    //Поиск кнопки и удаление обводки
            $(target).find('.hoverbtn').removeClass('hoverbtn');
            //Функция добавления картинки к товару в корзине
	    function add() {
              var grid = $('[data-modal=cart] div:contains("' + text + '")').parents('.grid');
              var getAtributeImage = $(grid).find('[data-role=itemphoto]').attr('style');
              $(grid).find('[data-role=itemphoto]').attr('style', getAtributeImage +'; ' + 'background-image: url('+ pht +')');
            };
	    //Установка функции на кнопку по клику
            $(target).find('[data-action=addtocart]').click(function() {
               setTimeout(add, 500);
            });
        break;
    }
    //Нечего делать - идем выше
    target = target.parentNode;
  }
 //Сброс таргета для следующего цикла
 target = event.target;

  //Найти кнопку и добавить обводку
  while (target.tagName != 'BODY') {
     if ($(target).hasClass('btn')) {
        $(target).addClass('hoverbtn');
        return;
    }
    target = target.parentNode;
  }
});
