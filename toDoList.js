//Create a new list item when clicking on the "Add" button
function newElement(){
    let li = document.createElement("li");
    let input = document.getElementById("input");
    let inputValue = input.value;
    let v = document.createTextNode(inputValue);
    li.appendChild(v);

    if (inputValue === '') {
        alert("Do you have a to-do item to add?")
    } else {
        document.getElementById("list").appendChild(li);
        input.value = "";
    }
    
}
//click on list item, item is removed

let list = document.getElementById('list');
list.addEventListener('click', function(event){
    list.removeChild(event.target);
})


//clearing the list
function removeAll(){
    var clear = document.getElementsByTagName("ul");
        clear[0].innerHTML = "";
}