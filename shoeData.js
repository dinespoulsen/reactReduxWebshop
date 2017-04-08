import {fromJS} from "immutable";

const shoes = [
  {id: 1, name: "shoeName", price: 10, imgSrc: "./shoe.png"},
  {id: 2, name: "secondShoe", price: 20, imgSrc: "./shoe.png"}
]

export const shoeList = fromJS(shoes);
