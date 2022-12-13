const invited = ['Giacomo', 'Lorenzo', 'Adriano', 'Cristina', 'giacomo', 'lorenzo', 'adriano', 'cristina'];

const nameIn = document.getElementById('name');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', function(){

    const userName = nameIn.value.trim();

    if(!userName) {
        alert('Come ti chiami');
        return;
    }

    let allow = false;

    for(let i = 0; i < invited.length; i++){

        const currentName = invited[i]

        if(currentName === userName){
            allow = true;
        }

    }

    result.innerText = allow ? 'Prego, venga pure' : 'Non sei stato invitato, SMAMMA!';
});

