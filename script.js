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
	 //Активируем кнопку добавления в корзину
	 $(target).find('[data-action=addtocart]').prop('disabled', false);
        $(target).data('item')[0]['value'] = text;
            //Если есть цена - меняем цену в карточке
	    if (Boolean(cost)) {
              $(target).data('item')[1]['value'] = cost;
	      let allElements = $(target).find('[data-role=itemprice]:eq(0)').find('*');
              let index = allElements.length;
	      let elem = allElements.eq(index-1);
              elem.text(cost);
            }
            //Если есть фото - меняем фото в карточке
	    if (Boolean(pht)) {
              $(target).data('item')[2]['value'] = pht;
              if ($(target).find('[data-role="image"]').hasClass("bgnormal")) {
		  $(target).find('[data-role="image"] img').attr("src",pht)
	      } else {
		  $(target).find('[data-role="image"]').css('background-image', 'url(' + pht + ')');
	      }
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
            }
	    //Поиск кнопки и удаление обводки
            $(target).find('.hoverbtn').removeClass('hoverbtn');
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
$('.color').closest('[data-item]').find('[data-action=addtocart]').prop('disabled', true);
