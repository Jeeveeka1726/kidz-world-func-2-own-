var cartValue = document.getElementById('cart-value')
var cartPrice = document.getElementById('cart')
var addButton = document.getElementsByClassName('button')

var contents = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

  function toUpdateCart() {
    var cart1 = 0;
    for (let i = 0; i< contents.length; i++) {
      cart1 = cart1 + contents[i].quantity;
    }
    cartValue.textContent = cart1;
  }
  
  for (let j = 0; j < addButton.length; j++) {
    addButton[j].onclick= () => {
      contents[j].quantity++;
      toUpdateCart();
    };
  }

  var fdollars = 0;
  var fcents = 0;
  
  function updateCost() {
    let totalCents = 0;
  
    for (let i= 0; i< contents.length; i++) {
      totalCents =totalCents + contents[i].quantity * (contents[i].dollars * 100 + items[i].cents);
    }
    fdollars  = Math.floor(totalCents / 100);
    fcents = totalCents % 100;
  }
updateCost()
var Wlink ="https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateLink() {
  for (let i = 0; i< contents.length; i++) {
    if (contents[i].quantity != 0) {
      Wlink += "%0A" + contents[i].name + "%20" + contents[i].quantity;
    }
  }
  Wlink +="Total%20Price:%20$" + fdollars + "%20" + fcents + "cents";
}
cartPrice.onclick = () => {
  updateLink();
  window.open(Wlink, "_blank");
};
