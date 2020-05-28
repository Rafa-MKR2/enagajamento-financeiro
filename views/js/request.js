
class ServicePI {

    constructor(){
        var get = document.querySelector.bind(document)

        // variaveis locais
        this._localIp = {};

        this._assinantes = 0;

        //elementos html
        this._divModalView  =  get('.modal');
        this._pessoasNumView = get('.pessoas');
        this._localizacaoView = get('.localizacao');

        //metodos 
        this.check();
        setInterval(this.intervaloModal.bind(this), 1000 *30);

    }



    intervaloModal(){
    

      
        this._divModalView.classList.add('active');
        this._pessoasNumView.innerHTML = 300 +  this._assinantes;

   
          
        setTimeout(() => this._divModalView.classList.remove('active'),1000 * 15);
    
        this._assinantes++
    }
    


     check(){
        let info = window.localStorage.getItem("localIP");
       
        if(info)
        {
            this._localIp = JSON.parse(info);
            console.log("capturando storange gravado anteriormente...");
            this._localizacaoView.innerHTML = this._localIp.city;

        }
        else {

            this.requestInfoIp().then(request=>{
             request.json().then(dados => { 
               
                this._localIp = dados;
                localStorage.setItem("localIP", JSON.stringify(dados));
                console.log("gravando novo storange ...");
                this._localizacaoView.innerHTML = this._localIp.city;

               })
               
            })
            .catch(error =>{
               console.log(error)

            })
        }
    }

     
    requestInfoIp(){
       return fetch('https://ipapi.co/json/')
       
    }




}




