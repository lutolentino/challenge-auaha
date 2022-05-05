/*cada linha que pegar do .snippets ele atribui para a variavel o que está dentro do atributo*/
(function($){
  $(document).ready( function(){      
    $("div[data-includeHTML]").each(function () {
      $(this).load($(this).attr("data-includeHTML"));
    });
  });
})(jQuery);