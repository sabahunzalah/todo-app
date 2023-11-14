var  getUl= document.getElementById('ul')
function add(){
    var a = document.getElementById('inp')
    if(a.value == ""){
        alert("Please enter your task")
    }
    else{
        var li=document.createElement('li')
    var liText=document.createTextNode(a.value)
    li.appendChild(liText)
    getUl.appendChild(li)
    a. value=' '
    var deleteBtn=document.createElement('button')
    var deleteBtnText=document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute('class','abc')
    deleteBtn.setAttribute('onClick','del(this)')
    var editBTn=document.createElement('button')
    var editBtnTExt=document.createTextNode("Edit")
    editBTn.appendChild(editBtnTExt)
    li.appendChild(editBTn)
    editBTn.setAttribute('class','xyz')
    editBTn.setAttribute('onClick','edit(this)')
    }
}
function deleteAll(){
    getUl.innerHTML=' '
}
function del(e){
e.parentNode.remove()
}
function edit(e){
    var editValue=prompt("Enter edit text",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue =editValue

}
