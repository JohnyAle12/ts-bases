"use strict";
var Validations;
(function (Validations) {
    Validations.validText = (text) => {
        return (text.length < 3) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validText('Hola'));
//# sourceMappingURL=main.js.map