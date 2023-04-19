var painel = new Object();

painel.ListaSenhas = function () {
    $.ajax({
        type: "POST",
        timeout: 50000,
        url: "/api/ListaSenhas",
        async: true,

        success: function (jsonRetornado) {

            if (jsonRetornado.senha != null && jsonRetornado.senha != undefined) {

                $("#senha").text(jsonRetornado.senha.senha);
                $("#guiche").text(jsonRetornado.senha.guiche);
            }
        }
    });
}

$(function () {
   // painel.ListaSenhas();
});