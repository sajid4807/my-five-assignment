function heartValueIncrease (){
    let heartValue =parseInt(document.getElementById(`heart-value`).innerText)
    heartValue += 1;
    document.getElementById(`heart-value`).innerText = heartValue

}
// document.getElementById(`heart`).addEventListener(`click`,function(){
//     console.log(`hello`)
//     let heartValue =parseInt(document.getElementById(`heart-value`).innerText)
//     heartValue += 1;
//     document.getElementById(`heart-value`).innerText = heartValue
// })



// heart increase
document.getElementById(`heart1`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart2`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart3`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart4`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart5`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart6`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart7`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart8`).addEventListener(`click`,heartValueIncrease)
document.getElementById(`heart9`).addEventListener(`click`,heartValueIncrease)