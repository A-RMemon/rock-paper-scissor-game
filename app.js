let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let computerscore = document.getElementById('computer-score');
let yourscore = document.getElementById('your-score');
let message = document.getElementById('message')
let p1user = 0;
let p2 = 0;

function checkwinner(userchioce) {
    let computerchoice = ""
    // console.log(`userchoice = ${userchioce}`)
    let randomnum = Math.floor(Math.random()*3)+1;
    if(randomnum == 1){
        computerchoice = 'rock'
    }else if(randomnum == 2){
        computerchoice = 'paper'
    }else if (randomnum == 3){
        computerchoice = 'scissor'
    }
    // console.log(`computerchoice = ${computerchoice}`);
    if(computerchoice == userchioce){
        message.innerText ='Its a tie!'
    }
    else if(userchioce == 'rock'){
        if(computerchoice == 'paper'){
            message.innerText = `paper beats rock`
            p2++
        }else if(userchioce == 'rock'){
            if(computerchoice == 'scissor'){
            message.innerText = `rock beats scissor`
                p1user++
            }
        }
    }else if(userchioce == 'paper'){
        if(computerchoice == 'scissor'){
            message.innerText = `scissor beats paper`
            p2++
        }else if (userchioce == 'paper'){
            if(computerchoice == 'rock'){
            message.innerText = `paper beats rock`
                p1user++
            }
        }
    }else if(userchioce == 'scissor'){
        if(computerchoice == 'rock'){
            message.innerText = `rock beats scissor`
            p2++
        }else if(userchioce == 'scissor'){
            if(computerchoice == 'paper'){
                message.innerText = `scissor beats paper`
                p1user++
            }
        }
    }
    yourscore.innerText = `User Score : ${p1user}`
    computerscore.innerText = `Computer Score : ${p2}`

    // console.log(`computer score ${p2}`)
}
// checkwinner()

rock.addEventListener('click', () => {
    let userchioce = ""
    let userchiocerock = rock.getAttribute('id');
    userchioce = userchiocerock
    checkwinner(userchioce);
})
paper.addEventListener('click', () => {
    let userchioce = ""
    let userchiocepaper = paper.getAttribute('id');
    userchioce = userchiocepaper
    // console.log(userchiocepaper)
    checkwinner(userchioce)
})
scissor.addEventListener('click', () => {
    let userchioce = ""
    let userchiocescissor = scissor.getAttribute('id');
    userchioce = userchiocescissor
    checkwinner(userchioce)
})