let mobileList=[];

function newPhone()
{
    name=document.getElementById('new_phone_name').value;
    let newPhone=new Mobile(100,name);
    mobileList.push(newPhone);

    /*DOM*/
    let content=`<div class="new_phone" id=${mobileList.length}>
        <div class="phone_screen"></div>
        <p>Phone Name: ${name}</p>
        <p>ID:${mobileList.length}</p>
        <button>On/Off</button>
        <button onclick="writeMessage()">Write message</button>
        <button>Show Sent messages</button>
        <button>Show inbox messages</button>
        </div>`;
    document.getElementById('phone_container').innerHTML+=content;/*dua noi dung trong content vao the co id la phone_container (div)*/
    /*document.getElementById('phone_container') : lay the co id la phone_container*/
    /*innerHTML : dua noi dung vao the duoc chon*/
    /*-----------------------------------------------------*/
}
/*
function writeMessage()
{
    document.getElementsByClassName('new_phone')[0].getElementsByClassName('phone_screen')[0].innerHTML=`<textarea name="" id="" cols="30" rows="10"></textarea>`
}*/
