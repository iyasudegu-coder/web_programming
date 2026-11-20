let count=0;
const countDisplay=document.getElementById ('count');
const increaseBtn=document.getElementById('increaseBtn');
const decreaseBtn=document.getElementById('decreaseBtn');
const resetBtn=document.getElementById('resetBtn');

increaseBtn.addEventListener('click', function(){
    count=count + 1;
    countDisplay.textContent = count;
})

decreaseBtn.addEventListener('click', function(){
    count=count-1;
    countDisplay.textContent = count;
})

resetBtn.addEventListener('click', function(){
    count=0;
    countDisplay.textContent = count;
})