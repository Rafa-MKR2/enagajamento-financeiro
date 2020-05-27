"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _validator = require('./config/validator'); var _validator2 = _interopRequireDefault(_validator);

const routes = _express.Router.call(void 0, );

routes.get(`/`, _UserController2.default.Index);



routes.post(`/auth`, _validator2.default.LoginRules(), _UserController2.default.Login)
routes.post(`/token`, _validator2.default.TokenGenerate(), _UserController2.default.GerarToken)
routes.post(`/perfil`, _validator2.default.Perfil(), _UserController2.default.UsuarioPerfil)
routes.get(`/localize`,  _UserController2.default.IpGeoLocalize)



exports. default = routes;