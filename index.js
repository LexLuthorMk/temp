const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const container = document.getElementsByClassName("container")[0];

container.addEventListener("click", (e)=>{
    if(e.target === getBtn){
        getRequestXML("https://reqres.in/api/users");
    }
    else if(e.target === postBtn){
        postRequestXML("https://reqres.in/api/register",{
            email: "eve.holt@reqres.in",
            //password: "pistol"
        })
    }
})

//XMLHttpRequest

function getRequestXML(url){
    XMLRequest("GET", url).then(response => console.log(response.data));
}

function postRequestXML(url, data){

    XMLRequest("POST", url, data)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

function XMLRequest(method, url, data){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest;
        xhr.open(method, url);
        if(data){
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        xhr.responseType = "json";
        xhr.onload = function (){
            if(xhr.status >= 400){
                reject(xhr.response);
            }
            resolve(xhr.response);
        }
        xhr.send(JSON.stringify(data));
    });

    return promise;
}


//fetch() api
