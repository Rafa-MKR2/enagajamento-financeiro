"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _expressvalidator = require('express-validator');

var _firebaseadmin = require('firebase-admin'); var _firebaseadmin2 = _interopRequireDefault(_firebaseadmin);



var _firebase = require('firebase'); var firebase = _interopRequireWildcard(_firebase);


class UserController{


    constructor(){
     var service  = require("./../config/serviceAccount.json")
    
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCFSUbqtE00IxKfnebdQoAknxMUXghlRPw",
      authDomain: "serve-uinterative.firebaseapp.com",
      databaseURL: "https://serve-uinterative.firebaseio.com",
      projectId: "serve-uinterative",
      storageBucket: "serve-uinterative.appspot.com",
      messagingSenderId: "890184791689",
      appId: "1:890184791689:web:c467f594030ecf81b3b858",
      measurementId: "G-HP784CV8BT"
     
    });

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



     async GerarToken (req, res ) {

    
      const errors = _expressvalidator.validationResult.call(void 0, req);
        
        if (!errors.isEmpty())
        {
          return res.status(422).json(errors.array()).end();
        } 
        else
        {
        
          var user = req.body;

          return _firebaseadmin2.default.auth().createCustomToken(user.uid)
            .then(token =>{
              console.log(token)
              user.token = token;
              return res.status(200).json(user).end()

            })
            .catch(err => {
              return res.status(401).json(errors.array()).end();

            })
        }
     }



      async UsuarioPerfil (req, res  ) {

      const errors = _expressvalidator.validationResult.call(void 0, req);

       
      if (!errors.isEmpty())
      {
        return res.status(422).json(errors.array()).end();
      } 
      else
      {
        req.body.idade
        var user = req.body;

        firebase.database().app.firestore().collection(`/usuários`).doc(user.uid)
        .collection('perfil')
        .doc(`Meuperfil`)
        .set(user)
        .then(index => {
          console.log(index)
          res.status(200).json(index).end();
        })
        .catch(error => res.status(401).json(error).end())
      }
  

     }
  
    
}

exports. default = new UserController()