let rightList = document.getElementById('list2');

let leftListItems = document.querySelectorAll('#list1 li');

leftListItems.forEach(item=>{
    item.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',item.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    e.target.appendChild(li)
})


let leftList=document.getElementById('list1');

let rightListItems = document.querySelectorAll('#list2 li');

rightListItems.forEach(item=>{
    item.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',item.getAttribute('data-id'))
    })
})

leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})

leftList.addEventListener('drop',function(e){
    let dataId=e.dataTransfer.getData('dataId');
    let li=document.querySelector('[data-id="'+dataId+'"]');
    e.target.appendChild(li)
})

let box=document.getElementsByClassName('box')[0];

box.addEventListener('dragover',function(e){
    e.preventDefault();

})

box.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let boxItem = document.querySelector('[data-id="'+dataId+'"]');
    let p = document.createElement('p');
    p.classList.add('p');
    p.innerText = boxItem.innerText;
    box.appendChild(p);
    boxItem.remove();
})




