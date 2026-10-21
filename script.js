'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var productSelect = document.getElementById('product');
  var quantityInput = document.getElementById('quantity');
  var calcButton = document.getElementById('calc-btn');
  var resultBlock = document.getElementById('calc-result');
  var errorBlock = document.getElementById('calc-error');

  var numberPattern = /^[1-9]\d*$/;

  function calculateOrder() {
    var quantity = quantityInput.value;
    var price = parseInt(productSelect.value, 10);

    resultBlock.textContent = '';
    errorBlock.textContent = '';
    if (!numberPattern.test(quantity)) {
      errorBlock.textContent = 'Ошибка: введите целое положительное число (без ведущих нулей).';
      return;
    }

    var count = parseInt(quantity, 10);

    var total = price * count;
    var formattedTotal = total.toLocaleString('ru-RU');
    
    resultBlock.textContent = 'Стоимость заказа: ' + formattedTotal + ' ₽';
  }

  calcButton.addEventListener('click', calculateOrder);
});
