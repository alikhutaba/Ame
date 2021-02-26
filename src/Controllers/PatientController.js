

async function sendPatientToServer(patient) {
    console.log("addPatient")

    var userId = "123456789"

    var user = await getuserbyid(userId);
    console.log(user)

    patient.added_by = {};
    patient.added_by = user;

    console.log(patient)

    return new Promise((resolve, reject) => {

        fetch(`http://localhost:8081/patient/${userId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
            },
            body: JSON.stringify(patient)

        }).then(function (response) {
            console.log(response.status); // Will show you the status
            console.log(response); // Will show you the status
            if (!response.ok) {
                reject({ success: false, patient: response.json() })
            } else {
                resolve({ success: true, patient: response.json() })
            }


        })
    })

}


// .then(function (response) {
//     console.log(response.status); // Will show you the status
//     console.log(response); // Will show you the status
//     if (!response.ok) {
//         throw new Error("HTTP status " + response.status);
//     }

//     resolve({ success: true, patient: response.json() })

// })


// .then(r => r.json())
//             .then(data => {

//                 console.log(data)
//                 console.log(data.status); // Will show you the status

//                 resolve({ success: true, patient: data })

//                 reject({ success: false, patient: data })


//             }).catch(e => console.error(e))


function getuserbyid(userId) {

    console.log("getuserbyid")


    return new Promise((resolve, reject) => {

        fetch(`http://localhost:8081/user/${userId}/byUserId/${userId}`, {

            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
            },
        }).then(r => r.json())
            .then(data => {
                resolve(data)

                // console.log(data)
                // reject('Errror!!!!!')

            })
    })




}

// fetch('/get-best-answer')
//     .then(r => r.json())
//     .then(data => {
//         if (data.number) {
//             resolve(data.number)
//         } else {
//             reject('Errror!!!!!')
//         }
//     })


function mul(a, b) {
    return a * b
}

export { sendPatientToServer, mul }
