// class ant{
//     constructor(cost, size, amount){
//         this.cost = cost
//         this.amount = amount
//         this.size = size
//     }
// }

function makeLarvae(amount=1){
    // amount = amount
    foodNeeded = amount*10
    if(player.food < foodNeeded){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 0){
        return
    }
    player.larva += amount
    player.food -= foodNeeded
}
function makeWorker(amount=1){
    amount = Math.round(amount)
    foodNeeded = amount*10
    if(player.food < foodNeeded || player.larva < amount){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 1){return}
    player.worker += amount
    player.food -= foodNeeded
    player.larva -= amount
}
function makeExplorer(amount=1){
    amount = Math.round(amount)
    foodNeeded = amount*10
    if(player.food < foodNeeded || player.larva < amount){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 1){return}
    player.explorer += amount
    player.food -= foodNeeded
    player.larva -= amount
}
function makeBuilder(amount=1){
    amount = Math.round(amount)
    foodNeeded = amount*10
    if(player.food < foodNeeded || player.larva < amount){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 1){return}
    player.builder += amount
    player.food -= foodNeeded
    player.larva -= amount
}
function makeMeatProcessor(amount=1){
    amount = Math.round(amount)
    foodNeeded = amount*20
    if(player.food < meatNeeded || player.larva < amount){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 1){return}
    player.meatProcessor += amount
    player.food -= foodNeeded
    player.larva -= amount
}
function makeQueen(amount=1){
    // cost = player.queenCost
    cost=1
    amount = Math.round(amount*cost)
    foodNeeded = amount*100*cost
    larvaNeeded = amount*10*cost
    if(player.food < foodNeeded || player.larva < larvaNeeded){
        // amount = Math.floor(food/10)
        return
    }
    if(amount < 1){return}
    player.queen += amount
    player.food -= foodNeeded
    player.larva -= larvaNeeded

    // player.queenCost += 1
}