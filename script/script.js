"use strict";
const heartProduct = document.getElementById("heartProduct");
const emptyHeartSource = heartProduct.src;
const redHeartSource = "images/redHeart.png";
const message = document.getElementById("message");
const price = document.getElementById("price");
const body = document.body;
const ok = document.getElementById("ok");
const selectedProduct = document.getElementById("selectedProduct");
const img46 = document.getElementById("img46");
const img45 = document.getElementById("img45");
const img48 = document.getElementById("img48");
const chevronLeft = document.getElementById("chevronLeft");
const chevronRight = document.getElementById("chevronRight");
const addtobasket = document.getElementById("addToBasket");
let basketItemsNum = document.getElementById("basketItemsNum").textContent;
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");
const plus = document.getElementById("plus");
const reject = document.getElementById("reject");
const confirm = document.getElementById("confirm");

//setting "pointer-cursor" for elements
img46.style.cursor = "pointer";
img45.style.cursor = "pointer";
img48.style.cursor = "pointer";
reject.style.cursor = "pointer";
confirm.style.cursor = "pointer";
addtobasket.style.cursor = "pointer";
heartProduct.style.cursor = "pointer";
selectedProduct.style.cursor = "pointer";
chevronLeft.style.cursor = "pointer";
ok.style.cursor = "pointer";
chevronRight.style.cursor = "pointer";
minus.style.cursor = "pointer";
plus.style.cursor = "pointer";

//setting "pointer-cursor" for hearts (likes) elements
for (let x = 1; x <= 6; x++) {
  document.getElementById(`heart${x}`).style.cursor = "pointer";
  document.getElementById(`img${x}`).style.cursor = "pointer";
}

//like selected product
function likeSelProduct(heart) {
  if (heart.src === emptyHeartSource) {
    heart.src = redHeartSource;
  } else {
    heart.src = emptyHeartSource;
  }
}

//like recomended products
function likeRecProduct(heart, x) {
  if (heart.src === emptyHeartSource) {
    recomendedData[x - 1].liked = true;
    heart.src = redHeartSource;
  } else {
    recomendedData[x - 1].liked = false;
    heart.src = emptyHeartSource;
  }
}
//enabling "likeRecProduct" function for all hearts
for (let x = 1; x <= 6; x++) {
  document.getElementById(`heart${x}`).addEventListener("click", function () {
    likeRecProduct(document.getElementById(`heart${x}`), x);
  });
}

//enabling "likeSelProduct" function for selected product
heartProduct.addEventListener("click", function () {
  likeSelProduct(heartProduct);
});

//Map with links to heart designs
const likes = new Map([
  [true, "images/redHeart.png"],
  [false, document.getElementById("heartProduct").src],
]);

//this array contains 7 objects
// objects 1-6 --> data for recomended products
// object 7 --> temp data

const recomendedData = [
  {
    id: 1,
    liked: false,
    paddingTop: "45px",
    picSrc: document.getElementById("img1").src,
    recomendedType: document.getElementById("recomendedType1").textContent,
    recomendedName: document.getElementById("recomendedName1").textContent,
    recomendedPrice: document.getElementById("recomendedPrice1").textContent,
    oldPrice: document.getElementById("action1").textContent,
  },
  {
    id: 2,
    liked: true,
    paddingTop: "45px",
    picSrc: document.getElementById("img2").src,
    recomendedType: document.getElementById("recomendedType2").textContent,
    recomendedName: document.getElementById("recomendedName2").textContent,
    recomendedPrice: document.getElementById("recomendedPrice2").textContent,
    oldPrice: document.getElementById("action2").textContent,
  },
  {
    id: 3,
    liked: true,
    paddingTop: "17px",
    picSrc: document.getElementById("img3").src,
    recomendedType: document.getElementById("recomendedType3").textContent,
    recomendedName: document.getElementById("recomendedName3").textContent,
    recomendedPrice: document.getElementById("recomendedPrice3").textContent,
    oldPrice: document.getElementById("action3").textContent,
  },
  {
    id: 4,
    liked: false,
    paddingTop: "74px",
    picSrc: document.getElementById("img4").src,
    recomendedType: document.getElementById("recomendedType4").textContent,
    recomendedName: document.getElementById("recomendedName4").textContent,
    recomendedPrice: document.getElementById("recomendedPrice4").textContent,
    oldPrice: document.getElementById("action4").textContent,
  },
  {
    id: 5,
    liked: false,
    paddingTop: "24px",
    picSrc: document.getElementById("img5").src,
    recomendedType: document.getElementById("recomendedType5").textContent,
    recomendedName: document.getElementById("recomendedName5").textContent,
    recomendedPrice: document.getElementById("recomendedPrice5").textContent,
    oldPrice: document.getElementById("action5").textContent,
  },
  {
    id: 6,
    liked: false,
    paddingTop: "35px",
    picSrc: document.getElementById("img6").src,
    recomendedType: document.getElementById("recomendedType6").textContent,
    recomendedName: document.getElementById("recomendedName6").textContent,
    recomendedPrice: document.getElementById("recomendedPrice6").textContent,
    oldPrice: document.getElementById("action6").textContent,
  },
  {
    // temp object (for saving variables)
    id: 7,
    liked: false,
    paddingTop: "45px",
    picSrc: document.getElementById("img1").src,
    recomendedType: document.getElementById("recomendedType1").textContent,
    recomendedName: document.getElementById("recomendedName1").textContent,
    recomendedPrice: document.getElementById("recomendedPrice1").textContent,
    oldPrice: document.getElementById("action1").textContent,
    //access to heart-img
    true: "images/redHeart.png",
    false: document.getElementById("heartProduct").src,
  },
];

//function for moving slider left (images and all data)
function moveLeft() {
  recomendedData[6].liked = recomendedData[0].liked;
  recomendedData[6].paddingTop = recomendedData[0].paddingTop;
  recomendedData[6].picSrc = document.getElementById("img1").src;
  recomendedData[6].recomendedType = document.getElementById(
    "recomendedType1"
  ).textContent;
  recomendedData[6].recomendedName = document.getElementById(
    "recomendedName1"
  ).textContent;
  recomendedData[6].recomendedPrice = document.getElementById(
    "recomendedPrice1"
  ).textContent;
  recomendedData[6].oldPrice = document.getElementById("action1").textContent;

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`heart${i}`).src = likes.get(
      recomendedData[i].liked
    );
    document.getElementById(`img${i}`).src = recomendedData[i].picSrc;
    document.getElementById(`recomendedType${i}`).textContent =
      recomendedData[i].recomendedType;
    document.getElementById(`bord${i}`).style.paddingTop =
      recomendedData[i].paddingTop;
    document.getElementById(`recomendedName${i}`).textContent =
      recomendedData[i].recomendedName;
    document.getElementById(`recomendedPrice${i}`).textContent =
      recomendedData[i].recomendedPrice;
    document.getElementById(`action${i}`).textContent =
      recomendedData[i].oldPrice;

    recomendedData[i - 1].paddingTop = recomendedData[i].paddingTop;
    recomendedData[i - 1].liked = recomendedData[i].liked;
    recomendedData[i - 1].picSrc = recomendedData[i].picSrc;
    recomendedData[i - 1].recomendedType = recomendedData[i].recomendedType;
    recomendedData[i - 1].recomendedName = recomendedData[i].recomendedName;
    recomendedData[i - 1].recomendedPrice = recomendedData[i].recomendedPrice;
    recomendedData[i - 1].oldPrice = recomendedData[i].oldPrice;
  }
}

//function for moving slider right (images and all data)
function moveRight() {
  recomendedData[6].paddingTop = recomendedData[5].paddingTop;
  recomendedData[6].liked = recomendedData[5].liked;
  recomendedData[6].picSrc = document.getElementById("img6").src;
  recomendedData[6].recomendedType = document.getElementById(
    "recomendedType6"
  ).textContent;
  recomendedData[6].recomendedName = document.getElementById(
    "recomendedName6"
  ).textContent;
  recomendedData[6].recomendedPrice = document.getElementById(
    "recomendedPrice6"
  ).textContent;
  recomendedData[6].oldPrice = document.getElementById("action6").textContent;

  for (let i = 6; i > 1; i--) {
    document.getElementById(`bord${i}`).style.paddingTop =
      recomendedData[i - 2].paddingTop;
    document.getElementById(`heart${i}`).src = likes.get(
      recomendedData[i - 2].liked
    );
    document.getElementById(`img${i}`).src = recomendedData[i - 2].picSrc;
    document.getElementById(`recomendedType${i}`).textContent =
      recomendedData[i - 2].recomendedType;
    document.getElementById(`recomendedName${i}`).textContent =
      recomendedData[i - 2].recomendedName;
    document.getElementById(`recomendedPrice${i}`).textContent =
      recomendedData[i - 2].recomendedPrice;
    document.getElementById(`action${i}`).textContent =
      recomendedData[i - 2].oldPrice;

    recomendedData[i - 1].paddingTop = recomendedData[i - 2].paddingTop;
    recomendedData[i - 1].liked = recomendedData[i - 2].liked;
    recomendedData[i - 1].picSrc = recomendedData[i - 2].picSrc;
    recomendedData[i - 1].recomendedType = recomendedData[i - 2].recomendedType;
    recomendedData[i - 1].recomendedName = recomendedData[i - 2].recomendedName;
    recomendedData[i - 1].recomendedPrice =
      recomendedData[i - 2].recomendedPrice;
    recomendedData[i - 1].oldPrice = recomendedData[i - 2].oldPrice;

    console.log(i);
  }
  recomendedData[0].paddingTop = recomendedData[6].paddingTop;
  recomendedData[0].liked = recomendedData[6].liked;
  recomendedData[0].picSrc = recomendedData[6].picSrc;
  recomendedData[0].recomendedType = recomendedData[6].recomendedType;
  recomendedData[0].recomendedName = recomendedData[6].recomendedName;
  recomendedData[0].recomendedPrice = recomendedData[6].recomendedPrice;
  recomendedData[0].oldPrice = recomendedData[6].oldPrice;

  document.getElementById(`bord1`).style.paddingTop =
    recomendedData[0].paddingTop;
  document.getElementById(`heart1`).src = likes.get(recomendedData[0].liked);
  document.getElementById("img1").src = recomendedData[0].picSrc;
  document.getElementById("recomendedType1").textContent =
    recomendedData[0].recomendedType;
  document.getElementById("recomendedName1").textContent =
    recomendedData[0].recomendedName;
  document.getElementById("recomendedPrice1").textContent =
    recomendedData[0].recomendedPrice;
  document.getElementById("action1").textContent = recomendedData[0].oldPrice;
}

//executing functions (with mouse click)
chevronLeft.addEventListener("click", function () {
  moveLeft();
});
chevronRight.addEventListener("click", function () {
  moveRight();
});

//executing functions (with keypress)
body.addEventListener("keydown", function (e) {
  if (e.keyCode == "37") {
    moveLeft();
  }
});
body.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    moveRight();
  }
});
minus.addEventListener("click", function () {
  if (quantity.textContent > 0) {
    quantity.textContent--;
  }
});
plus.addEventListener("click", function () {
  quantity.textContent++;
});

addtobasket.addEventListener("click", function () {
  reject.style.visibility = "visible";
  confirm.style.visibility = "visible";
  message.style.visibility = "visible";
  document.querySelector(".hidden").style.visibility = "visible";
  message.textContent = `"${
    document.getElementById("productTitle").textContent
  }" - ${document.getElementById("price").textContent} - ${
    document.getElementById("quantity").textContent
  } komada`;
  sum.textContent = `Ukupna cijena: ${quantity.textContent * 65}kn`;
});

function cancelOrder() {
  document.querySelector(".hidden").style.visibility = "hidden";
  message.style.visibility = "hidden";
  reject.style.visibility = "hidden";
  confirm.style.visibility = "hidden";
  ok.style.visibility = "hidden";
}
body.addEventListener("keydown", function (e) {
  if (e.keyCode == "27") {
    cancelOrder();
  }
});

reject.addEventListener("click", function () {
  cancelOrder();
});

function orderingProduct() {
  message.style.visibility = "hidden";
  sum.textContent = "??? Proizvod je dodan u ko??aricu! ????????";
  document.getElementById("basketItemsNum").textContent =
    Number(quantity.textContent) +
    Number(document.getElementById("basketItemsNum").textContent);
  reject.style.visibility = "hidden";
  confirm.style.visibility = "hidden";
}
confirm.addEventListener("click", function () {
  orderingProduct();
  ok.style.visibility = "visible";
});
ok.addEventListener("click", function () {
  cancelOrder();
});
