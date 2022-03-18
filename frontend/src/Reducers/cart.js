import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../Constants/cart";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let productArr = state.cart;
      const item = productArr.find((item) => item._id === action.payload._id);
      if (!item) {
        productArr = [...productArr, { ...action.payload, quantity: 1 }];
      } else {
        productArr = productArr.map((product) => {
          if (action.payload._id === product._id) {
            product = {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }
      localStorage.setItem("cart", JSON.stringify(productArr));
      state.cart = productArr;
      return {
        ...state,
        cart: productArr,
        totalItems: state.totalItems + 1,
      };
    case REMOVE_FROM_CART:
      let productData = state.cart;
      productData = productData.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(productData));
      state.cart = productData;
      return {
        ...state,
        totalItems: state.totalItems - action.payload.quantity,
      };
    case INCREASE_QUANTITY:
      let productData1 = state.cart;
      productData1 = productData1.map((product) => {
        if (action.payload._id === product._id) {
          product = {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(productData1));
      state.cart = productData1;
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case DECREASE_QUANTITY:
      let productData2 = state.cart;
      productData2 = productData2.map((product) => {
        if (action.payload._id === product._id) {
          product = {
            ...product,
            quantity: product.quantity - 1 < 1 ? 1 : product.quantity - 1,
          };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(productData2));
      state.cart = productData2;
      return {
        ...state,
        totalItems: state.totalItems - 1 < 1 ? 1 : state.totalItems - 1,
      };

    case ADD_TO_WISHLIST:
      let wishlistArr = state.wishlist;
      const itemsInWishlist = wishlistArr.find(
        (item) => item._id === action.payload._id
      );
      if (!itemsInWishlist) {
        wishlistArr = [...wishlistArr, { ...action.payload, quantity: 1 }];
      } else {
        wishlistArr = wishlistArr.filter(
          (item) => item._id !== action.payload._id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
      state.wishlist = wishlistArr;
      return {
        ...state,
        wishlist: wishlistArr,
      };
    case REMOVE_FROM_WISHLIST:
      let productDatas = state.wishlist;
      productDatas = productDatas.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem("wishlist", JSON.stringify(productDatas));
      state.wishlist = productDatas;
      return {
        ...state,
      };
    default:
      return state;
  }
};
