/*
 * MWA Planejamento Tributario
 * Author Smylei Charles
 * Copyright 2020 MWA
 */
"use strict";
var calcula = {

	// constantes com valores dos impostos
	PIS: 0.0065,
	COFINS: 0.03,
	ISS: 0.04,

	calcImposto: function(rendaBruta) {
		// body...
		let impostos = {
			pis: rendaBruta * this.PIS,
			cofins: rendaBruta * this.COFINS,
			iss: rendaBruta * this.ISS,
		};
		return impostos;
	}
};