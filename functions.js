const nums = document.querySelectorAll('#num ul li')
consumidores()
sites()
usuarios()
function consumidores(){
    let milhoes = 0
    let timer = setInterval(() => {

        if(milhoes < 58){
            milhoes++
        } 
        else{
            clearInterval(timer)
        }
        
        nums[0].innerHTML = `<h2 class="nums_load"> + De ${milhoes} milhões </br> <p>
        de consumidores online
        </p></h2>`
    }, 25);
}
function sites(){
    let bilhoes = 50
    let timer = setInterval(() => {

        if(bilhoes < 1600){
            bilhoes = bilhoes + 50
        } 
        else{
            clearInterval(timer)
        }
        
        nums[1].innerHTML = `<h2 class="nums_load"> + De ${bilhoes} milhões </br> <p>
        de sites na internet
        </p></h2>`
    }, 40);
}
function usuarios(){
    let bilhoes = 50
    let timer = setInterval(() => {

        if(bilhoes < 4600){
            bilhoes = bilhoes + 50
        } 
        else{
            clearInterval(timer)
        }
        
        nums[2].innerHTML = `<h2 class="nums_load"> + De ${bilhoes} milhões </br> <p>
        de usuários na web
        </p></h2>`
    }, 15);
}



