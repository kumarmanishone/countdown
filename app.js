const endDate="18 April 2024 6:19 pm"

document.getElementById("end-date").innerText=endDate;

const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

    if(diff<0) return;
    
    // convert into days
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60
}

// initial call
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)