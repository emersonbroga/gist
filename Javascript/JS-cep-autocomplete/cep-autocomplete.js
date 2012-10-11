/*
*     CEP - Auto preechimento dos campos de endereço
*     Confira se os ids correspondem aos campos do seu formulário
*/

(function($) {

    function cepCallback(data) {
        $('#rua').val(data.tipo_logradouro + ' ' + data.logradouro + ', ' + data.bairro);
        $('#cidade').val(data.cidade);
        $('#estado').find('[value="'+ data.uf +'"]').attr('selected', 'selected').parent().select2();
    }

    $('#cep').on('keyup', function() {
        var cep = $(this).val().replace(/[^\d]/g,'');

        if(cep.length > 7){
            var url = 'http://api.bolt.com.br/cep/' + cep + '.jsonp?cepCallback=?';

            $.getJSON(url, function(data){});
        }
    });

})(jQuery);
