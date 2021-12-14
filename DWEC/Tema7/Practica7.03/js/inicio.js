"use strict";

window.onload = () => {
    fetch (`https://api.musixmatch.com/ws/1.1/`,{
        method:"GET",
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
    })
    .then(respuesta => console.log(respuesta))
    .then(data => console.log(data))
    .catch(error => console.log(error));
}