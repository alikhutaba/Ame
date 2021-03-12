import { validate } from '@material-ui/pickers';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
require('dotenv').config()
toast.configure()

// const newPatient = {};
// newPatient.patientId = patientId;
// newPatient.fisrtName = firstName;
// newPatient.lastName = lastName;
// newPatient.middleName = middleName;
// newPatient.gender = gender;
// newPatient.address = {};
// newPatient.address.state = state;
// newPatient.address.city = city;
// newPatient.address.streetAddress = streetAddress;
// newPatient.address.houseNumber = houseNumber;
// newPatient.hmo = hmo;
// newPatient.vaccineStatus = vaccineStatus;
// newPatient.medicationSensitivity = {};
// newPatient.medicationSensitivity.answer = medicationSensitivityAnswer;
// newPatient.medicationSensitivity.notes = medicationSensitivityNote;
// newPatient.phone1 = phone;
// newPatient.nursingHistory = nursingHistory;
// newPatient.notes = notes;

// newPatient.birthdate = {};
// newPatient.birthdate.days = birthdate.getDate();
// newPatient.birthdate.months = birthdate.getMonth() + 1;
// newPatient.birthdate.years = birthdate.getFullYear();





async function validatePatient(patient) {

    console.log(patient)

    if (!validateID(patient.patientId)) {
        toast.error("Unvalid Patient ID", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }


    if (patient.fisrtName <= 0) {
        toast.error("Patient first name is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.middleName <= 0) {
        toast.error("Patient middle name is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.lastName <= 0) {
        toast.error("Patient last name is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.gender <= 0) {
        toast.error("Patient gender is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.hmo <= 0) {
        toast.error("Patient Hmo is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    //birthdate
    // phone
    if (patient.phone1 <= 0) {
        toast.error("Patient phone number is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.address.state <= 0) {
        toast.error("Patient address state is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.address.city <= 0) {
        toast.error("Patient address city is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.address.streetAddress <= 0) {
        toast.error("Patient address street is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.address.houseNumber <= 0 || !isNumeric(patient.address.houseNumber)) {
        toast.error("Unvalid Patient address house number", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.vaccineStatus <= 0) {
        toast.error("Patient vaccine status is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }

    if (patient.medicationSensitivity.answer != false && patient.medicationSensitivity.answer != true) {
        toast.error("Patient medication sensitivity is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.medicationSensitivity.answer && patient.medicationSensitivity.notes <= 0) {
        toast.error("Patient medication sensitivity notes is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }
    if (patient.nursingHistory <= 0) {
        toast.error("Patient nursing history is embty", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return false;
    }



    toast.error("patient valid..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })

    var x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    x = mul(123, 12312);
    console.log("validatePatient");

    return true;

}

function validateID(id) {

    if (id.length != 9 || !isNumeric(id))
        return false
    else
        return true;

    // console.log(isNumeric('1234567890'));   // true
    // return true;

}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}



async function addPatient(patient) {

    return true;

}




function mul(a, b) {
    return a * b
}

export { validatePatient, mul }
