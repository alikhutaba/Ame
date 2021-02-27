import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
require('dotenv').config()
toast.configure()



async function validatePatient(patient) {



    toast.error("first name required..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })

    var x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    console.log("validatePatient");

    return true;

}



async function addPatient(patient) {

    return true;

}




function mul(a, b) {
    return a * b
}

export { validatePatient, mul }
