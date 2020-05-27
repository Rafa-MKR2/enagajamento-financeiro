"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _expressvalidator = require('express-validator');

class ValidateRules {


    static LoginRules()  {

        return  [
            _expressvalidator.check.call(void 0, 'email', 'E-mail digitado é inválido').not().isEmpty().isEmail().isString(),
            _expressvalidator.check.call(void 0, 'password', 'A senha deve ter no minímo 6 caracteres').not().isEmpty().isLength({ min : 6})
        ]
    }

    static TokenGenerate()  {

        return  [
            _expressvalidator.check.call(void 0, 'uid', `você deve enviar seu uid`).not().isEmpty().isString(),
        ]
    }


    static Perfil()  {

        return  [
            _expressvalidator.check.call(void 0, 'nome', `Nome deve ser fornecido"`).not().isEmpty().isString(),
            _expressvalidator.check.call(void 0, 'uid', `você deve enviar seu uid`).not().isEmpty().isString(),
            _expressvalidator.check.call(void 0, 'idade', `você deve enviar sua idade`).not().isEmpty().isString(),

        ]
    }


}

exports. default = ValidateRules;