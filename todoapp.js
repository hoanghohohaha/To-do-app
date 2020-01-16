
var addhtml = ``;

function reset(){
    var btns=document.getElementsByClassName('check');
    for(let i = 0;i < btns.length;i++){
        var btn = btns[i];
        btn.addEventListener('click',function(e){
            console.log(e.target);
            var btn=e.target;
            var div= btn.parentNode;
            console.log(div);
            div.remove();
        })}
 }

function Add(){
    var content=document.getElementById('ok').value;
    var todo = document.getElementById('hold');
    if( content != ''){
        addhtml = `<li class='task' onclick=''>${content}<div class="check">Done</div></li>`
    }else{
        addhtml=``;
    }
    document.getElementById('ok').value= '';
    todo.insertAdjacentHTML('beforeend', addhtml);
    reset();
}

reset();