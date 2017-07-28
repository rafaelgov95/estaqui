"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

nome: string = "Rafael";
sobrenome: sting = "viana";

var PrintName = function () {
  function PrintName() {
    _classCallCheck(this, PrintName);
  }

  _createClass(PrintName, [{
    key: "construtor",
    value: function construtor() {}
  }, {
    key: "imprimir",
    value: function imprimir() {
      retunr(nome + sobrenome);
    }
  }]);

  return PrintName;
}();