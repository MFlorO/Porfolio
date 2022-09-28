


  //VALIDACION DEL FORMULARIO
  export default function validate(input){

    let validteEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  

    let error = {};
  
    if(!input.user_name){
      error.user_name = "There is not name"
    }

    if(!input.user_email){
      error.user_email = "There is not email"
    }
    else if(!validteEmail.test(input.user_email)){   
      error.user_email = "Error in email format"
    }
    
    if(!input.message){
      error.message = "There is not message"
    }
    
    return error
  }

