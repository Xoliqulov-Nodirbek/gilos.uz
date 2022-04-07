const createElement = function(elName, className) {
    const createdElement = document.createElement(elName);
    createdElement.className = className;
    return createdElement
}

const addZero = function(number) {
    return number < 10 ? "0" + number : number;
}

const showDate = function(dateString) {
    const date = new Date(dateString);
    
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`
}

// ------------ Wrapper ------------

const elProductsWrapper = document.querySelector(".products-wrapper");


for (let i = 0; i < products.length; i++) {
    const currentProducts = products[i];
    
    const elProduct = createElement("li", "col-4");
    
    const elProductDiv = createElement("div", "card");      // ----------------------- >
    
    const elProductImg = createElement("img", "card-img-top");
    elProductImg.src = currentProducts.img;
    elProductDiv.append(elProductImg);
    
    const elCardBody = createElement("div", "card-body");     // -------------------------- >
    
    // ------- Title --------
    const elCardBodyTitle = createElement("h3", "card-title");
    elCardBodyTitle.textContent = currentProducts.title;
    elCardBody.append(elCardBodyTitle);
    
    // -------- New Price --------
    const elCardBodyPrice = createElement("p", "card-text fw-bold");
    const elCardBodyMark = createElement("mark");
    elCardBodyMark.textContent = currentProducts.price;
    elCardBodyPrice.append(elCardBodyMark);
    elCardBody.append(elCardBodyPrice);
    
    // -------- Current Price --------
    const elCardBodyCurrentPrice = createElement("p", "card-text");
    const elCardBodyCurrentDel = createElement("s");
    elCardBodyCurrentDel.textContent = currentProducts.price;
    elCardBodyCurrentPrice.append(elCardBodyCurrentDel);
    elCardBody.append(elCardBodyCurrentPrice);
    
    // ------- Badge -------
    const elCardBodyBadge = createElement("p", "badge bg-success");
    elCardBodyBadge.textContent = currentProducts.model;
    elCardBody.append(elCardBodyBadge);
    
    // ------- Data -------
    const elCardBodyDate = createElement("p", "card-text");
    elCardBodyDate.textContent = showDate( currentProducts.addedDate);
    elCardBody.append(elCardBodyDate);
    
    // -------- Benefits -------
    const elCardBodyBenefits = createElement("ul", "d-flex flex-wrap list-unstyled");
    for (let j = 0; j < products[i].benefits.length; j++){
        const elCardBodyBenefitsItem = createElement("li", "badge bg-primary me-1 mb-1");
        elCardBodyBenefitsItem.textContent = products[i].benefits[j];
        elCardBodyBenefits.append(elCardBodyBenefitsItem);
    }
    elCardBody.append(elCardBodyBenefits);

    
    // -------- Btn -------
    const elCardBodyBtnWrapper = createElement("div", "position-absolute top-0 end-0 d-flex");
    
    // ------- Edit --------
    const elCardBodyBtnSec = createElement("button", "btn rounded-0 btn-secondary");
    const elCardBodyBtnSecI = createElement("i", "fa-solid fa-pen");
    elCardBodyBtnSec.append(elCardBodyBtnSecI);
    elCardBodyBtnWrapper.append(elCardBodyBtnSec);
    
    // ------- Delete --------
    const elCardBodyBtndan = createElement("button", "btn rounded-0 btn-danger");
    const elCardBodyBtndanI = createElement("i", "fa-solid fa-trash");
    elCardBodyBtndan.append(elCardBodyBtndanI);
    elCardBodyBtnWrapper.append(elCardBodyBtndan);
    
    
    // --------- Appends ---------
    elCardBody.append(elCardBodyBtnWrapper);
    elProductDiv.append(elCardBody);
    elProduct.append(elProductDiv);
    elProductsWrapper.append(elProduct);
}


// --------------  Add Student  ---------------

const elForm = document.querySelector("#add-form");
const addProductModalEL = document.querySelector("#edit-student-modal");
const addProductModal = new bootstrap.Modal(addProductModalEL);


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  const elements = evt.target.elements;

  const productTitleInput = elements["product-title"];
  const priceInput = elements["price"];
  const manufacturerSelect = elements["product-manufacturer"];

  const productTitleInputValue = productTitleInput.value;
  const priceInputValue = priceInput.value;
  const manufacturerSelectValue = manufacturerSelect.value;

  if (productTitleInputValue.trim() && priceInputValue.trim() && manufacturerSelectValue.trim()) {
    const newCard = {
      id: Math.floor(Math.random() * 1000),
      title: productTitleInputValue,
      img: "https://picsum.photos/300/200",
      price: priceInputValue,
      addedDate: new Date("2021-10-12").toISOString(),
    }

    products.push(newCard);
    elForm.reset();
    addProductModal.hide();
  }
})

// -------> Add Form Select <----------

const select = document.querySelector("#product-manufacturer");

for (let k = 0; k < manufacturers.length; k++) {
  const option = createElement("option");
  option.textContent = manufacturers[k].name;
  select.append(option);
}







