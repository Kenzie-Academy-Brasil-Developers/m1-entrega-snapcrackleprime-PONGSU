function primo(n) {
    let divisores = 0
    for (let idx = 1; idx <= n; idx++) {
        if (n % idx == 0) {
            divisores++
        }
    }
    if (divisores == 2) {
        return true
    }else{
        return false
    }
}

function snapCrackle(maxValue){
    let lista = ""
    for (let i = 1; i <= maxValue; i++) {
        if(i%2 !=0 && i%5 ==0 && primo(i)){
            lista += "SnapCracklePrime, "
        }else if(i%2 !=0 && i%5 ==0){
            lista += "SnapCrackle, "
        }else if(primo(i) && i%2 !=0){
            lista += `SnapPrime, `
        }else if(primo(i)){
            lista += `Prime, `
        }else if(i%2 == 0 && i%5 !=0){
            lista += `${i}, `
        }else if(i%2 != 0) {
            lista += `Snap, `
        }else if(i%5 == 0) {
            lista += `Crackle, `
        }                
    }  
return lista.slice(0,-2)
} 