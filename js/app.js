const historyData =[]

function getInnerText (id){
    let heart = parseInt(document.getElementById(id).innerText)
    return heart;
}

function heartValueIncrease (){
    let heartValue = getInnerText(`heart-value`)
    heartValue += 1;
    document.getElementById(`heart-value`).innerText = heartValue
}

function copyValueIncrease (){
    let copyValue = getInnerText(`copy-value`)
    copyValue += 1;
    document.getElementById(`copy-value`).innerText = copyValue
}

function setInnerText (value) {
    const availableStar = document.getElementById(`star`)
    availableStar.innerText = value
}

// heart increase
const hearts =document.getElementsByClassName(`heart`)
for(const heart of hearts){
    heart.addEventListener(`click`,function(){
        heartValueIncrease ()
    })
}

// copy
const copyBtn =document.getElementsByClassName(`copy`)
for(const btn of copyBtn){
    btn.addEventListener(`click`,function(){
        const parent =this.closest(`.item`);
        const number =parent.querySelector(`.number`).innerText;
        alert(`Number Has Been Copied: ${number}`)
        copyValueIncrease ()
    })
}

// history and call
const callBtn = document.getElementsByClassName(`call`)
const historyParent =document.getElementById(`history-parent`)
const clearHistory =document.getElementById(`clear-history`)
for(const btn of callBtn){
    btn.addEventListener(`click`,function(){

        let starIcon = getInnerText(`star`)
        const parent =this.closest(`.item`);
        const name =parent.querySelector(`.nam`).innerText
        const number =parent.querySelector(`.number`).innerText;
        if(starIcon >= 20){
            alert(`Calling ${name} ${number}`)
            }
        if(starIcon <=0){
            alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
            return;
        }
        newAvailableStar = starIcon - 20
        setInnerText(newAvailableStar)
        const time =new Date().toLocaleTimeString();
        const div = document.createElement(`div`)
        div.innerHTML=`
            <div class="flex justify-between bg-[#fafafa] p-3 rounded-lg mt-4">
                <div>
                    <h2 class="font-bold text-sm text-[#111111]">${name}</h2>
                    <p class="text-[#5c5c5c]">${number}</p>
                </div>
                <p class="text-[#111111]">${time}</p>
            </div>
        `
        historyParent.appendChild(div); 
    })
}
// clear history
document.getElementById(`clear-history`).addEventListener(`click`,function(){
    historyParent.innerHTML='';
})
