function CalculateArea(){
    const length=parseFloat(document.getElementById('length').value);
    const width=parseFloat(document.getElementById('width').value)
    if(isNaN(length)|| isNaN(width)){
        document.getElementById('Result').textContent="enter a valid input and try again";
        return;
    }
    const area=CalcArea(length,width);
    document.getElementById('Result').textContent=`the area of the triangle is :${area}`;
    function CalcArea(length,width){
        return length * width;
    }
}
let GlobalVar="This is the global variable";
function ScopeDemo(){
    let localVar="this is the local variable";
    document.getElementById('ScopeResults').innerHTML=`global variable :${GlobalVar} <br>
    local variable :${localVar}`;
}
function ToggleModal(){
    const modal=document.getElementById('myModal');
    if(modal.classList.contains('hidden')){
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    }else{
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    }
}
const card = document.getElementById('animatedCard');
const button = document.getElementById('animateButton');
function triggerAnimation() {
    card.classList.add('animate-card');
    setTimeout(() => {
        card.classList.remove('animate-card'); 
    }, 500);
}
button.addEventListener('click', triggerAnimation);
