// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
import {createStore} from 'vuex';
import axios from 'axios';
import {ref} from 'vue';
// import * as orders from 'autoprefixer';
// import axios from 'axios';

export const store = createStore({
    // Свойство state: {} содержит два массива: products и StoreCart.
    // Массив продуктов содержит сведения о каждом продукте.
    // Массив cart пуст, потому что именно здесь будет храниться
    // каждый товар, который пользователь добавляет в корзину.
    state: {
        products: [],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        user: JSON.parse(localStorage.getItem("cart")) || [],
        users: JSON.parse(localStorage.getItem("users")) || [],
        orders: JSON.parse(localStorage.getItem("orders")) || [],
    },
    // Мутации - синхронны
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        CREATE_ORDER: (state,orders) => {
            state.orders = orders;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        SET_ORDERS_TO_STATE: (state, orders) => {
            state.orders = orders;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },

        SET_CART: (state, product) => {
            state.cart.push(product);
            product.quantity = 1;
            product.isAdded = true;
            console.log(state.cart);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        CLEAR_CART: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CLEAR_ALL_ORDERS: (state) => {
            state.orders = [];
            localStorage.setItem('orders', JSON.stringify(state.orders));
            state.users = [];
            localStorage.setItem('users', JSON.stringify(state.users));
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        REMOVE_ORDER: (state, index) => {
            state.orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        /*DELETE_ORDER: (state, index) => {
            state.orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },*/

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++;
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
        },
        SET_USER: (state, user) => {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.push(user);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        REMOVE_USER: (state, index) => {
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(state.users));
            /*state.orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(state.orders));*/
        }
    },
    // Акшены - асинхронны
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://1102df40d9a2f61e.mokky.dev/products', {
                method: "GET"
            })
                .then((products) => {
                    // Добавляем количество товаров в объект
                    products.data.map((item) => {
                        item.quantity = 1;
                        item.isAdded = false;
                    });
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },

        async CREATE_ORDER({state, commit}, cartTotalCost, orderDone) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

                const {data} = await axios.post(`https://1102df40d9a2f61e.mokky.dev/orders`, {
                        orderItems: state.cart,
                        user: state.user,
                        descriptionOrder: date,
                        totalPrice: `Общая стоимость заказа  ${cartTotalCost} рублей`,
                    },
                );
                commit('CREATE_ORDER', {data});
// Очищает Корзину после оформления заказа
                commit('CLEAR_CART');

// Получаем номер выполненного заказа в виде id
                orderDone.value = data.id;
                console.log(orderDone.value);
            } catch (err) {
                console.log(err);
            }
        },

        async GET_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://1102df40d9a2f61e.mokky.dev/orders');

                commit('SET_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        // Пока что разбираюсь????
        /*async DELETE_ORDER({commit, state}, {index}) {
            try {
                const response = await axios.delete('https://1102df40d9a2f61e.mokky.dev/orders' + index)
                    .then(response => {
                        this.result.splice(index, 1);
                        console.log(this.result);
                    });

                commit('REMOVE_ORDER', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },*/

        /*async GET_PRODUCTS_FROM_API({commit}) {
            try {
                await axios.get('https://9b25d366b1aceedb.mokky.dev/products')
                    .then((products) => {
                        // Добавляем количество товаров в объект
                        products.data.map((item) => {
                            item.quantity = 1;
                            item.isAdded = false;
                        });
                        commit('SET_PRODUCTS_TO_STATE', products.data);
                        return products;
                    })
            } catch(error) {
                        console.log(error);
                        return error;
                    }
         },*/

        ADD_TO_CART({state, commit}, product) {
            commit('SET_CART', product);
        },
        CLEAR_CART({commit}, cart) {
            commit('CLEAR_CART', cart);
        },

        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index);
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        },
        ADD_USER({commit}, user) {
            commit('SET_USER', user);
        },
        REMOVE_FROM_USER({commit}, index) {
            commit('REMOVE_USER', index);
        },
        REMOVE_ORDER({commit}, index) {
            commit('REMOVE_ORDER', index);
        },
        CLEAR_ALL_ORDERS({commit}) {
            commit('CLEAR_ALL_ORDERS');
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        USER(state) {
            return state.user;
        },
        USERS(state) {
            return state.users;
        },
        ORDERS(state) {
            return state.orders;
        }
    }
});

export default store;

