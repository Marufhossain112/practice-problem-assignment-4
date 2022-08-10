let bookPrice = [344, 12, 112, 349, 31, 454, 299, 44];
for (let i = 0; i < bookPrice.length; i++) {
  let price = bookPrice[i];
  if (price > 200) {
    continue;
  }
  console.log(price);
}
