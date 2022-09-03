// document.getElementById("demo").innerHTML = "Just Testing";

// Global variables
const sizes = [
    "Selezionare Taglia",
    "Minuscola",
    "Piccola",
    "Media",
    "Grande",
    "Enorme",
    "Mastodontica"
]

const size = new Map([
    ["Minuscola",0.5],
    ["Piccola",1],
    ["Media",1],
    ["Grande",2],
    ["Enorme",4],
    ["Mastodontica",8]
]);

// Races Select Setup
html = "<select name='Sizes' id='sizes'>";
for(const x of sizes){
    if(x === "Selezionare Taglia"){
        html += `<option value="${x}" selected>${x}</option>`;
        continue;
    }
    html += `<option value ${x}>${x}</option>`;
}
html += "</select>";
document.getElementById("size-select").innerHTML = html;

function myFunction(){

    let ret;
    let sizeL = document.getElementById("sizes");
    let strength = document.getElementById("strength-input").value;
    
    if(!checkStrength(strength)||sizeL.selectedIndex===0){
        ret = "<a id='carry-cap-text'>Forza deve essere un numero</a>";
        document.getElementById("carry-cap-div").innerHTML = ret;
        return;
    }

    sizeL = sizeL.options[sizeL.selectedIndex].text;
    ret = `<a id="carry-cap-text">Puoi trasportare ${size.get(sizeL)*strength*7.5} Kg</a>`;

    document.getElementById("carry-cap-div").innerHTML = ret;
}

function checkStrength(strength){
    if(isNaN(strength) || strength == undefined || strength===""){
        return false;
    }
    return true;
}