let products = {
  data: [
    {
      productName: "Elite Arena",
      category: "Thiruvalla",
      loc: "Muthoor,Thiruvalla",
      image: "profile.jpg",
      btn: "Book Now",
    },
    {
      productName: "Abudubai",
      category: "Thiruvalla",
      loc: "Muthoor,Thiruvalla",
      image: "short-skirt.jpg",
    },
    {
      productName: "Falcon Sports Hub",
      category: "Thiruvalla",
      loc: "Kuttor,Thiruvalla",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Featherland",
      category: "Kottayam",
      loc: "Changanassery,Kottayam",
      image: "knitted-top.jpg",
    },
    {
      productName: "Lees Sports Hub",
      category: "Thiruvalla",
      loc: "Mannar,Thiruvalla",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Marvel Soccer Park",
      category: "Kottayam",
      loc: "Changanassery,Kottayam",
      image: "pink-trousers.jpg",
    },
    {
      productName: "United Soccer Club",
      category: "Kottayam",
      loc: "Changanassery,Kottayam",
      image: "brown-jacket.jpg",
    },
    {
      productName: "MFC ARENA FOOTBALL TURF",
      category: "Kottayam",
      loc: "Kottayam",
      image: "comfy-gray-pants.jpg",
    },
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //loc
  let loc = document.createElement("h6");
  loc.innerText = "Location:" + i.loc;
  container.appendChild(loc);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  let btn = document.createElement("button");
  btn.innerHTML = "Book Now";
  container.appendChild(btn);
}
function bookno2(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach(element => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};

// console.log(products.data);
