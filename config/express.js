"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _routes = require('../routes'); var _routes2 = _interopRequireDefault(_routes);

var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

class App{

    

     constructor(){
        this.express = _express2.default.call(void 0, );
        this.middlewares();
        this.routes(); 
    } 
 
 
     middlewares () {

    
        
        // graficos e views
        this.express.set('view engine', 'ejs');
        this.express.use(_express2.default.static('assets'));
        this.express.use(_express2.default.static('views'));

        // json config
        this.express.use(_bodyparser2.default.json())
        this.express.use(_express2.default.json({ type: 'application/*+json' }))


      //  var allowedOrigins = ['http://localhost:3000', 'http://yourapp.com'];

     
    }

     routes () {
     this.express.use(_routes2.default)
        
    }
}



exports. default = new App().express;