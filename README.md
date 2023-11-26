# plp-cart-color
Add the color select buttons to item block (for add any color to cart) - usable on PlatformaLP only (3.3 / 3.7)

How to add:

Add buttons to your item block manually. It can be in 'column' widget , for example.
Add the class 'color' to 'column' widget.

In the page settings add plugin 'Free code' and paste script to the HEAD field.
```html
<script src="https://cdn.jsdelivr.net/gh/romaniter/plp-cart-color@latest/style.css"></script>
```

In the page settings add plugin 'Random code' and paste script to the BODY field.
```html
<script src="https://cdn.jsdelivr.net/gh/romaniter/plp-cart-color@latest/script.js"></script>
```

Go to the button settings and paste this code:
```html
<div class="name" hidden>
  Item name
</div>
<div class="cost" hidden>
  999 rub.
</div>
```
This name and cost will be added to cart after click on button.
