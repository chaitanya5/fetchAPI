//Syntax:   fetch(url,options);
// 1. Fetch is promise based so first convert the promise to JSON()
// 2. Fetch never catches an Error,it always returns the next lines
// 3. So to check if the api response is correct or not we use a if/else
// 4. Fetch can only send/receive JSON so better convert/stringy to JSON
// 5. Also while doing a post request, setting headers and stringy() is important

fetch('https://reqres.in/api/users',{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body : JSON.stringify({
        name : "New User"
    }) 
})
.then(res => {
    if(res.ok)
        console.log(`Succes`)
    else
        console.log(`Error`)

    return res.json() 
})    
.then(data => console.log(data))
