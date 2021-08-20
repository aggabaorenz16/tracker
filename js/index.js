/* Axios */
const fetch = () => {
let result = axios({
     /* URL */
        url: 'https://coronavirus-19-api.herokuapp.com/countries/Philippines',
         /* Method GET */
        method: 'GET',
         /* Success */
    }).then((Response) => {
        return Response
         /* Rejected */
    }).catch((Reject) => {
        return Reject
    })
     /* Result */
    return result
}
fetch().then((Response) => {
     /* Today Cases */
    /* document.querySelector("#case").textContent = Response.data.todayCases; */
     /* Recovered */
    document.querySelector("#recovered").textContent = Response.data.recovered;
     /* Today Deaths */
    document.querySelector("#country").textContent = Response.data.country;
     /* Deaths */
    document.querySelector("#deaths").textContent = Response.data.deaths;
     /* Active */
    /* document.querySelector("#active").textContent = Response.data.active; */
     /* Critical */
    /* document.querySelector("#critical").textContent = Response.data.critical; */
    /* Total Test */
    document.querySelector("#Ttest").textContent = Response.data.totalTests;
})
document.querySelector("#deaths").style.color = 'red'
document.querySelector("#recovered").style.color = 'green'
document.querySelector("#Ttest").style.color = 'rgb(18,17,88)'

/* Disable Inspect Element */
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
   /*  Ctrl+Shift+I */
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    /* Ctrl+Shift+C */
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    /* Ctrl+Shift+J */
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    /* Ctrl+Shift+U */
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
