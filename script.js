

const harry = {name: 'Harry Potter', hair: 'black'};
const hermoine = {name: 'Hermoine Granger', hair: 'brown'};
const ron = {name: 'Ron Weasley', hair: 'red'};

const unorderedlist = document.getElementById('unorderedlist');
unorderedlist.style.cssText = 'width: 50%; margin: auto; margin-top: 50px;';

 const list = [harry, hermoine, ron];
    
 list.forEach((item) => {
   
    const listItem = document.createElement('li'); //create list item
    listItem.textContent = `Wizard name is: ${item.name}`;
    listItem.style.cssText = `color: ${item.hair}; margin-bottom: 10px`;
  
    const containerDiv = document.createElement('div');//create div
    containerDiv.append(listItem);
    unorderedlist.appendChild(containerDiv);
  });
  