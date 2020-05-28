"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('./config/express'); var _express2 = _interopRequireDefault(_express);

_express2.default.listen(5000, ()=>"Servidor rodando porta 5000");
