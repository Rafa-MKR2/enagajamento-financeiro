"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _expressvalidator = require('express-validator');

class ValidateRules {


    static LoginRules()  {

        return  [
            _expressvalidator.check.call(void 0, 'email', 'E-mail digitado é inválido').not().isEmpty().isEmail(),
            _expressvalidator.check.call(void 0, 'password', 'A senha deve ter no minímo 6 caracteres').not().isEmpty().isLength({ min : 6})
        ]
    }

}

exports. default = ValidateRules;