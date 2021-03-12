

async function getallProtocolsFromServer(userId) {
    var responeStatus = false;
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8081/protocol/${userId}/all`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then(function (response) {
            responeStatus = response.ok;
            return response.json();

        }).then(function (data) {
            if (!responeStatus) {
                reject(data)
            } else {
                console.log(data);
                resolve(data)
            }
        })
    })

}


export { getallProtocolsFromServer }
