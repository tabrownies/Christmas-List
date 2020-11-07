function Item(name, cost, image, rank){
    this.name = name;
    this.cost = cost;
    this.image = image;
    this.rank = rank
}
let mock = new Array;
for(let i = 0; i < 100; ++i){
    mock.push(new Item(`Lego ${i+1}`,i+10, "https://www.lego.com/cdn/cs/set/assets/blt445eec351be85ac6/Lego-logo.jpg?format=jpg&quality=80&height=55&dpr=1", i+1));
}
export default {
    mock, 
    Item
};