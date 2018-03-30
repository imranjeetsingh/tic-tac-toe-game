var restart = document.querySelector("#b")
// console.log("connected")
var square  = document.querySelectorAll('td')
var player1;
while(!player1)
{
    player1 = prompt("enter player one name and your value is X");
}
var player1_value="X";

var player2;
while(!player2)
{
    player2 =prompt("enter player two name and your value is y");
}
var player2_value="Y";

var player1_bool=false;
var player2_bool=false;

function clearboard()
{
    count=1;
    for(var i=0;i<square.length;i++)
    {
        square[i].textContent   = '';
    }
}
var count=1;
restart.addEventListener('click',clearboard)

function changemarker()
{
    if(this.textContent==='' && count%2===1)
    {
        this.textContent = 'X';
        count++;
    }
    if(this.textContent=='' && count%2===0)
    {
        this.textContent  ='O';
        count++;
    }
    // else if(this.textContent==='X')
    // {
    //     this.textContent    = 'O';
    // }
    // else
    // {
    //     this.textContent    = '';
    // }
    for (let index = 0; index < 3; index++) {
    //    console.log(square[index].textContent)
        if(square[index].textContent!='' && square[index].textContent===square[index+3].textContent && square[index].textContent===square[index+6].textContent)
        {
          // console.log("wining");
            if(player1_value==square[index].textContent)
            {   
                window.alert(player1+" has won tha match!!")
                count=1;
                clearboard();
            }
            else
            {
                window.alert(player2+" has won tha match!!")
                count=1;
                clearboard();
            }
        }
    }

    for (let index = 0; index < 7; index+=3) {
        //    console.log(square[index].textContent)
            if(square[index].textContent!='' && square[index].textContent===square[index+1].textContent && square[index].textContent===square[index+2].textContent)
            {
                //console.log("wining");
                    if(player1_value==square[index].textContent)
                {   
                    window.alert(player1+" has won tha match!!")
                    count=1;
                    clearboard();
                }
                else
                {
                    window.alert(player2+" has won tha match!!")
                    count=1;
                    clearboard();
                }
            }
        }
    if(square[0].textContent!='' &&  square[0].textContent===square[4].textContent && square[0].textContent===square[8].textContent)
    {
        if(player1_value==square[0].textContent)
        {   
            window.alert(player1+" has won tha match!!")
            count=1;
            clearboard();
        }
        else
        {
            window.alert(player2+" has won tha match!!")
            count=1;
            clearboard();
        }
    }

    if(square[2].textContent!='' && square[2].textContent===square[4].textContent && square[2].textContent===square[6].textContent)
    {
        //console.log("wining");
        if(player1_value==square[2].textContent)
            {   
                window.alert(player1+" has won tha match!!")
                count=1;
                clearboard();
            }
            else
            {
                window.alert(player2+" has won tha match!!")
                count=1;
                clearboard();
            }
    }
    if(count==10)
    {
        window.alert("Match Drawn!!! Play again");
        count=1;
        clearboard();
    }
}

for (let index = 0; index < square.length; index++) 
{
        square[index].addEventListener('click',changemarker);
        // console.log(square[index].textContent)
}