let friends = ["Monir", "Faruk", "Rahim", "Shofiq","Tinu", "Anwarul", "Miraz"];
function bestFriend(friends) {
  bestFriend = friends[0];
  for (let i = 0; i < friends.length; i++) {
    element = friends[i];
    if (bestFriend.length < element.length) {
      bestFriend = element;
    }
  }
  return bestFriend;
}
let result = bestFriend(friends);
console.log(result);
