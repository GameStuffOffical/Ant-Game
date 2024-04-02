// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// if ("cookies exist"){
//     // Load cookies
// }else{
//     //Set default parameters
//     //Save Cookies
// }


player = {
    get ants() {return this.queen + this.worker + this.explorer},
    queen: 0,
    // queenCost: 1,
    larva: 0,

    worker: 0,
    explorer: 0,
    builder: 0,
    meatProcessor:0,

    food: 100,
    meat: 0,
    avaliableFood: 10000,
    avaliableMeat: 0,
    territory: 1,



    storage: 100,
    get avaliableStorage(){
        return this.storage - this.usedStorage
    },
    get usedStorage(){
        return this.food + this.meat
    },


}


function explore(amount=1){
    player.territory += amount
    player.avaliableFood += amount*10
    player.avaliableMeat += amount*1
}
function harvestFood(amount=1){
    if(amount > player.avaliableFood){
        amount = player.avaliableFood
    }else if(amount > player.avaliableStorage){
        amount = player.avaliableStorage
    }

    player.food += amount
    player.avaliableFood -= amount
}
function processMeat(amount=1){
    if(amount > player.avaliableMeat){
        amount = player.avaliableMeat
    }else if(amount > player.avaliableStorage*10){
        amount = player.avaliableStorage*10
    }

    player.food += amount*10
    player.avaliableMeat -= amount
}
function dig(amount=1){
    player.storage += amount*0.5
}

// harvestFood(10)

function updateGUI(){
    document.getElementById("ants").innerHTML = Math.floor(player.ants)
    document.getElementById("queens").innerHTML = Math.floor(player.queen)
    document.getElementById("builders").innerHTML = Math.floor(player.builder)
    document.getElementById("workers").innerHTML = player.worker
    document.getElementById("meat processors").innerHTML = Math.floor(player.meatProcessor)
    document.getElementById("explorers").innerHTML = player.explorer
    document.getElementById("larvae").innerHTML = Math.floor(player.larva)
    document.getElementById("food").innerHTML = player.food
    document.getElementById("meat").innerHTML = player.meat
    document.getElementById("storage").innerHTML = Math.floor(player.storage)
    document.getElementById("usedStorage").innerHTML = Math.floor(player.usedStorage)
    document.getElementById("territory").innerHTML = player.territory
    document.getElementById("avaliableFood").innerHTML = player.avaliableFood
    document.getElementById("avaliableMeat").innerHTML = player.avaliableMeat
}

function productionLoop(){
    if(player.worker > 0){
        harvestFood(player.worker)
    }
    if(player.explorer > 0){
        explore(player.explorer)
    }
    if(player.queen > 0){
        makeLarvae(player.queen*0.1)
    }
    if(player.builder > 0){
        dig(player.builder)
    }
    if(player.meatProcessor > 0){
        processMeat(player.meatProcessor)
    }
}

function gameLoop(){
    productionLoop()
    updateGUI()
}

setInterval(gameLoop, 1000)