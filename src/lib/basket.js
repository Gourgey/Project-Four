import axios from 'axios';
import { authorizationHeader } from './auth';

export function createBasket() {
  localStorage.setItem('basket', '[]');
  return [];
}

export function getBasket() {
  return JSON.parse(localStorage.getItem('basket')) || createBasket();
}

export function writeBasket(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export function saveBasket(basket) {
  return localStorage.setItem('basket', JSON.stringify(basket));
}

export function getItem(basket, itemId) {
  return basket.find(item => item._id === itemId);
}

export function incrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  item.quantity =(item.quantity || 0) + Math.abs(quantity);
  saveBasket(basket);
}

export function decrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  if(item.quantity > 0)
    item.quantity = item.quantity - quantity;
  saveBasket(basket);
}

export function addItem(itemToAdd, quantity) {
  const basket = getBasket();
  itemToAdd.painting = itemToAdd._id; // Useful for the backend Purchase model
  if (!getItem(basket, itemToAdd._id))
    basket.push(itemToAdd);
  incrementQuantity(basket, itemToAdd._id, quantity);
  writeBasket(basket);
}


// export function setQuantity(itemId, newQuantity) {
//   const basket = getBasket();
//   getItem(basket, itemId).quantity = newQuantity;
//   saveBasket(basket);
// }

export function removeItem(itemToRemoveId) {
  const basket = getBasket();
  const item = getItem(basket, itemToRemoveId);
  basket.splice(basket.indexOf(item), 1);
  saveBasket(basket);
}

export function totalBasketPrice() {
  const basket = getBasket();
  const itemTotals = basket.map(item => item.price * item.quantity);
  return itemTotals.reduce((basketTotal, itemTotal) => basketTotal += itemTotal, 0);
}

export function getBasketCount(){
  return getBasket().length;
}


export function checkout() {
  axios.post('/api/checkout', getBasket(), authorizationHeader())
    .then(() => {
      createBasket();
      console.log('checking out!!');
      this.props.history.push('/');
    });
}


export default {
  createBasket, getBasket, saveBasket, getItem, addItem,
  incrementQuantity, decrementQuantity, removeItem, totalBasketPrice, getBasketCount,
  checkout
};
