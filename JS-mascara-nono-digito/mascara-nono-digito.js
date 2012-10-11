/*
*     Máscara de telefone com 9 dígitos
*/

(function($) {
    $('#phone').on({
        'focus': function() {
            $(this).unmask().mask('(99) 9999-9999?9');
        },
        'focusout': function() {
            var $element = $(this),
                value = $element.val(),
                mask = '(99) 9999-9999?9';

            if(/^\((1{2})\) 9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])/g.test(value)){
                mask = '(99) 99999-999?9';
            }

            $element.unmask().mask(mask);
        }
    });
})(jQuery);
