import { createSelector } from "reselect";

const getProducts = (state) => state.shop.products || [];
const getFilters = (state) => state.shop.filters || {};

const filterBySearch = (search) => (products) => {
    const regex = new RegExp(`.*${search}.*`, "i");
    return products.filter((product) => {
        regex.test(product.name);
    });
};

const filterByAvailability = (isAvailable) => (products) => {
    return products.filter((product) => !!product.isAvailable === isAvailable);
};

const filterByPrice = ({ min, max }) => (products) => {
    return products.filter((product) => (!min || product.price >= min) && (!max || product.price <= max));
};

const sortByPrice = (sortMode) => (products) => {
    if (sortMode === "ASC") {
        return products.sort((a, b) => a.price - b.price);
    } else if (sortMode === "DESC") {
        return products.sort((a, b) => b.price - a.price);
    }
    return products;
};

const combineFilters = (...filterFunctions) => (data) => {
    let newData = data;
    for (const filterFunction of filterFunctions) {
        if (filterFunction) {
            newData = filterFunction(newData);
        }
    }
    return newData;
};

let ProductsSelectors: any = {};

ProductsSelectors.applyFilters = createSelector(
    getProducts, 
    getFilters, 
    (products, filters) =>
        combineFilters(
            filterBySearch(filters.search),
            filterByAvailability(true),
            filterByPrice({ min: filters.price.min, max: filters.price.max }),
            sortByPrice(filters.price.sort)
        )(products)
);

export default ProductsSelectors;
