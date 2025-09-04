import { FormContactData } from "@/components/contact/FormContact";

export const validateFormContact = (data: FormContactData) => {
  const errors: Partial<FormContactData> = {}; 

  if (!data.user_name) {
    errors.user_name = "El nombre es obligatorio";
  }else if(data.user_name.trim().length < 3){
    errors.user_name = "Debe tener al menos 3 caracteres"
  }

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!data.user_email) {
    errors.user_email = "El email es obligatorio";
  }else if(!emailRegex.test(data.user_email)){
    errors.user_name = "Email inválido"
  }

  if (!data.message) {
    errors.message = "El mensaje es obligatorio";
  }else if(data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};
