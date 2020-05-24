"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _expressvalidator = require('express-validator');

var _firebaseadmin = require('firebase-admin'); var _firebaseadmin2 = _interopRequireDefault(_firebaseadmin);

var _firebase = require('firebase'); var firebase = _interopRequireWildcard(_firebase);

class UserController{

     __init() {this.uid = 'fuXpC3xyTAS3c02rb5HP8lOtQIn2'}

    constructor(){;UserController.prototype.__init.call(this);
     var service  = require("./../config/serviceAccount.json")
     var firebaseConfig = {
      apiKey: "AIzaSyCFSUbqtE00IxKfnebdQoAknxMUXghlRPw",
      authDomain: "serve-uinterative.firebaseapp.com",
      databaseURL: "https://serve-uinterative.firebaseio.com",
      projectId: "serve-uinterative",
      storageBucket: "serve-uinterative.appspot.com",
      messagingSenderId: "890184791689",
      appId: "1:890184791689:web:c467f594030ecf81b3b858",
      measurementId: "G-HP784CV8BT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      _firebaseadmin2.default.initializeApp({
        credential : _firebaseadmin2.default.credential.cert(service)
      });
    
    }


     async Index (req, res ){

        return res.status(200).render(`index`);

    } 


     async Login (req, res ) {
       
       const errors = _expressvalidator.validationResult.call(void 0, req);
        
       if (!errors.isEmpty())
        {
         
            return res.status(422).json(errors.array()).end();
        } 
        else
        {

          var user = req.body;

          firebase.auth().signInWithEmailAndPassword(user.email, user.password)

          .then((date ) =>
             res.status(200).json(date.user).end())
         
           .catch(date=>
             res.status(401).json(date).end())
        }


    }



      GerarToken(uid )   {

     return _firebaseadmin2.default.auth().createCustomToken(uid).then(token =>token)
      .catch(err => err )
    }
    
}

exports. default = new UserController()