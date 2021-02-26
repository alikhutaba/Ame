

async function getallProtocolsFromServer(userId) {
    var responeStatus = false;
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8081/protocol/${userId}/all`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
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

function mul(a, b) {
    return a * b
}

export { getallProtocolsFromServer, mul }
