let form = document.querySelector('form');
let ul = document.querySelector('ul');


let cardsData = JSON.parse(localStorage.getItem('cards')) || [];

function handleSubmit(event){
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardsData.push({title, category});
  localStorage.setItem('cards',JSON.stringify(cardsData));
  createUI(cardsData, ul);
}

function handleDoubleClick(event, info, idx, label){
  let elm = event.target;
  let input = document.createElement('input');
  input.value = info;
  input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
      let updatedValue = e.target.value;
      cardsData[idx][label] = updatedValue;
      createUI();
      localStorage.setItem('cards', JSON.stringify(cardsData));
    }
  });
  input.addEventListener('blur', (e) => {
    let updatedValue = e.target.value;
    cardsData[idx][label] = updatedValue;
    createUI();
    localStorage.setItem('cards', JSON.stringify(cardsData));
  });
  let parent = event.target.parentElement;
  parent.replaceChild(input, elm);
}

function createUI(data = cardsData, root = ul){
  root.innerHTML = '';
  let fragment = new DocumentFragment;
  data.forEach((cardsInfo,index) => {
    let li = document.createElement('li');
    li.classList.add('notice-card');
    let p = document.createElement('p');
    p.innerText = cardsInfo.category;
    p.addEventListener('dblclick', (event) => handleDoubleClick(event,cardsInfo.category, index, 'category'));
    let h3 = document.createElement('h3');
    h3.innerText = cardsInfo.title;
    h3.addEventListener('dblclick', (event) => handleDoubleClick(event,cardsInfo.title, index, 'title'));
    li.append(p, h3);
    fragment.appendChild(li);
  })
  root.append(fragment);
}

form.addEventListener('submit', handleSubmit);

createUI(cardsData, ul);