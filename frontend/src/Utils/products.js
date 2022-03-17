export const compose =
  (state, ...functions) =>
  (data) =>
    functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);

export const sortedPrice = (state, data) => {
  if (state.sort_price === "high-low") {
    return data.sort((a, b) => b.price - a.price);
  } else if (state.sort_price === "low-high") {
    return data.sort((a, b) => a.price - b.price);
  } else if (state.sort_price === "normal") {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.sort_price === "price-below-500") {
    return data.filter((product) => product.price < 500);
  } else if (state.sort_price === "price-between-500-999") {
    return data.filter(
      (product) => product.price >= 500 && product.price <= 999
    );
  } else if (state.sort_price === "price-between-1000-4999") {
    return data.filter(
      (product) => product.price >= 1000 && product.price <= 4999
    );
  } else if (state.sort_price === "price-5000-plus") {
    return data.filter((product) => product.price > 5000);
  }
  return data.sort((a, b) => a.title.localeCompare(b.title));
};
