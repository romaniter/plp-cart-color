# plp-cart-color
Выбор параметра в карточке товара для Платформы LP (3.3 / 3.7)

Установка:

Вставьте нужное количество кнопок в карточку товара, объединив в одном виджете (блок, колонки и тд)
Добавьте класс color к виджету в котором находятся кнопки для выбора параметров

Перейдите в настройки страницы -> добавьте плагин "Проивзольный код" -> в поле HEAD добавьте код:
```html
<script src="https://cdn.jsdelivr.net/gh/romaniter/plp-cart-color@latest/style.css"></script>
```

В поле BODY / BODYEND вставьте код:
```html
<script src="https://cdn.jsdelivr.net/gh/romaniter/plp-cart-color@latest/script.js"></script>
```

В настройках каждой кнопки вставьте код:
```html
<div class="name" hidden>
  Item name
</div>
<div class="cost" hidden>
  999 rub.
</div>
```
