# fetchAPI
How Fetch works

Syntax:   fetch(url,options);
1. Fetch is promise based so first convert the promise to JSON()
2. Fetch never catches an Error,it always returns the next lines
3. So to check if the api response is correct or not we use a if/else
4. Fetch can only send/receive JSON so better convert/stringy to JSON
5. Also while doing a post request, setting headers and stringy() is important
