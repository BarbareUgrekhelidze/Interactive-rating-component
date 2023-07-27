const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', runEvent));
const button = document.querySelector('.btn').addEventListener('click', btnClick);

function runEvent(e){
     removeAttribute();
     e.target.setAttribute('id', 'orange');
};

function removeAttribute(){
    numbers.forEach(number => number.removeAttribute('id', 'orange'));
};

function btnClick(e){
    e.preventDefault();

    if(numbers[0].id == 'orange'){
        document.querySelector('.box-1').setAttribute('id', 'd-none');
        document.querySelector('.box-2').removeAttribute('id', 'd-none');
        document.getElementById('comment').textContent = 'You selected 1 out of 5';
    } else if(numbers[1].id == 'orange'){
        document.querySelector('.box-1').setAttribute('id', 'd-none');
        document.querySelector('.box-2').removeAttribute('id', 'd-none');
        document.getElementById('comment').textContent = 'You selected 2 out of 5';
    } else if(numbers[2].id == 'orange'){
        document.querySelector('.box-1').setAttribute('id', 'd-none');
        document.querySelector('.box-2').removeAttribute('id', 'd-none');
        document.getElementById('comment').textContent = 'You selected 3 out of 5';
    } else if(numbers[3].id == 'orange'){
        document.querySelector('.box-1').setAttribute('id', 'd-none');
        document.querySelector('.box-2').removeAttribute('id', 'd-none');
        document.getElementById('comment').textContent = 'You selected 4 out of 5';
    } else if(numbers[4].id == 'orange'){
        document.querySelector('.box-1').setAttribute('id', 'd-none');
        document.querySelector('.box-2').removeAttribute('id', 'd-none');
        document.getElementById('comment').textContent = 'You selected 5 out of 5';
    } else if(numbers[0].id == '' && numbers[1].id == '' && numbers[2].id == '' && numbers[3].id == ''){
        alert('Please set the rating')
    }
}
