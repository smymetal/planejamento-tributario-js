/*
 * MWA Planejamento Tributario
 * Author Smylei Charles
 * Copyright 2020 MWA
 */
// checa se foi declarada
mwa = window.mwa ? window.mwa : function(){
    "use strict";

    var computa = {
        appName: "MWA Planejamento Tributário",
        version: 0.6,
        receitaTotal: 0,
        impostos : 0
    }

    var numOpt = { style: 'currency', currency: 'BRL' }

    // teste
    function init(){
        console.log("oi");
        userForm();
    }

    // check formulario do usuario
    function userForm(){

        const myFrom        = document.querySelector("#wizard");

        let element         = myFrom.querySelectorAll("input.form-control.moeda");
        let receitaBruta    = myFrom.querySelector("#receitaBruta");
        let mercIn          = myFrom.querySelector("#mercIn");
        let mercEx          = myFrom.querySelector("#mercEx");
        let prxButton       = myFrom.querySelector("#telaRB");
        let inPis           = myFrom.querySelector("#inPis");
        let inCofins        = myFrom.querySelector("#inCofins");
        let inIss           = myFrom.querySelector("#inIss");
        let deducoes        = myFrom.querySelector("#deducoes");

        console.log(element);

        Array.from(element).forEach((el) => {
            el.addEventListener("change", function (event){
                let mIn = parseFloat( mercIn.value.replace(/\./g,'').replace(",",".")) || 0;
                let mEx = parseFloat( mercEx.value.replace(/\./g,'').replace(",",".")) || 0;
                computa.receitaTotal = mIn + mEx;
                receitaBruta.setAttribute('value', computa.receitaTotal.toLocaleString('pt-BR', numOpt) );
            });
            $(el).mask('000.000.000,00', {reverse: true});
        });
        console.log( computa.receitaTotal );

        
        prxButton.addEventListener("click", function (event){
            if (computa.receitaTotal > 0) {
                computa.impostos = calcula.calcImposto(computa.receitaTotal);
                if (computa.impostos) {
                    inPis.setAttribute('value', computa.impostos.pis.toLocaleString('pt-BR', numOpt) );
                    inCofins.setAttribute('value', computa.impostos.cofins.toLocaleString('pt-BR', numOpt) );
                    inIss.setAttribute('value', computa.impostos.iss.toLocaleString('pt-BR', numOpt) );

                    deducoes.setAttribute('value', (computa.impostos.pis + computa.impostos.cofins + computa.impostos.iss).toLocaleString('pt-BR', numOpt) );
                }
                console.log(computa.impostos);
            }
        });
    }

    // retorna as funcoes do modulo
    return {
        init:init,
        userForm:userForm
    };

}();
