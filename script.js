let lista = ""

function primo(n) {
    let divisores = 0
    for (let idx = 1; idx <= n; idx++) {
        if (n % idx == 0) {
            divisores++
        }
    }
    if (divisores < 3) {
        return true
    }else{
        return false
    }
}

function snapCrackle(maxValue){
    for (let i = 1; i <= maxValue; i++) {
        if (i == 1) {
            lista = "Snap";
        }else{
            if (i == 2) {
                lista = (lista + ", Prime");
            }else{
                if (i == 5) {
                    lista = (lista + ", SnapCracklePrime");
                }else{
                    if(i%2 !=0 && i%5 ==0){
                        lista = (lista + ", SnapCrackle");
                    }else{
                        if(i%2 == 0 && i%5 !=0){
                            lista = (lista + `, ${i}`)
                        }else{
                            if (primo(i)) {
                                lista = (lista + `, SnapPrime`)    
                            }else{
                                if (i%2 != 0) {
                                    lista = (lista + `, Snap`)       
                                }else{
                                    if (i%5 == 0) {
                                        lista = (lista + `, Crackle`)       
                                    }
                                }
                            }
                        }        
                    }
                }
            }                     
    }
    }
return console.log(lista);
} 
