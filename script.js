let c=0
let countEl=document.getElementById("count-el")
function increment(){
    c+=1
    countEl.innerText=c
}
function save(){
    let saveEl=document.getElementById("save-el")
    saveEl.innerText+=c+"-"
    c=0
    countEl.innerText=c
}
