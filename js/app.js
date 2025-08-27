function getInnerText (id){
    let heart = parseInt(document.getElementById(id).innerText)
    return heart;
}

function heartValueIncrease (){
    let heartValue = getInnerText(`heart-value`)
    heartValue += 1;
    document.getElementById(`heart-value`).innerText = heartValue
}



function setInnerText (value) {
    const availableStar = document.getElementById(`star`)
    availableStar.innerText = value
}

// card 1
document.getElementById(`call1`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling National Emergency Number 999`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 2
document.getElementById(`call2`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Police Helpline Number 999`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 3
document.getElementById(`call3`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Fire Service Number 999`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 4
document.getElementById(`call4`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Ambulance Service Number 1994-999999`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 5
document.getElementById(`call5`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Women & Child Helpline Number 109`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 6
document.getElementById(`call6`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Anti-Corruption Helpline Number 106`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 7
document.getElementById(`call7`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Electricity Helpline Number 16216`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 8
document.getElementById(`call8`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Brac Helpline Number 16445`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

// card 9
document.getElementById(`call9`).addEventListener(`click`, function(event){
    event.preventDefault()
    let starIcon = getInnerText(`star`)
    if(starIcon > 0){
    alert(`Calling Bangladesh Railway Helpline  Number 163`)
    }
    if(starIcon <=0){
        alert(`Insufficient Coin To Make A Call. At Least 20 Coins Are Required`)
        return;
    }
    newAvailableStar = starIcon - 20
    setInnerText(newAvailableStar)
})

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