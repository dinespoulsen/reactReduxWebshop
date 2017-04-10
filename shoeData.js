import {fromJS} from "immutable";

const shoes = [
  {id: 1, name: "Converse me up!", price: 10, imgSrc: "./shoe.png"},
  {id: 2, name: "Adidas", price: 20, imgSrc: "./shoe2.png"},
  {id: 3, name: "Greeny", price: 20, imgSrc: "./shoe3.png"},
  {id: 4, name: "Grays?", price: 20, imgSrc: "./shoe4.png"}
]

export const shoeList = fromJS(shoes);
