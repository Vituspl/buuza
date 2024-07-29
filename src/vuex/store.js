import {createStore} from 'vuex';
import axios from 'axios';

export const store = createStore({
    state: {
        products: JSON.parse(localStorage.getItem("products")) || [],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        user: JSON.parse(localStorage.getItem("cart")) || [],
        users: JSON.parse(localStorage.getItem("users")) || [],
        order: JSON.parse(localStorage.getItem("order")) || [],
        orders: JSON.parse(localStorage.getItem("orders")) || [],
        sentOrder: JSON.parse(localStorage.getItem("sentOrder")) || [],
        sentOrders: JSON.parse(localStorage.getItem("sentOrders")) || [],
        finishOrder: JSON.parse(localStorage.getItem("finishOrder")) || [],
        finishOrders: JSON.parse(localStorage.getItem("finishOrders")) || [],
    },

    // Мутации - синхронны
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        CREATE_ORDER: (state, order) => {
            state.order = [order];
            // console.log(state.order);
            localStorage.setItem('order', JSON.stringify(state.order));
            state.orders.push(order);
            // console.log(state.orders);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        SET_ORDERS_TO_STATE: (state, orders) => {
            state.orders = orders;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        SET_SENT_ORDERS_TO_STATE: (state, sentOrders) => {
            state.sentOrders = sentOrders;
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        SET_FINISH_ORDERS_TO_STATE: (state, finishOrders) => {
            state.finishOrders = finishOrders;
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },
        SET_CART: (state, product) => {
            state.cart.push(product);
            product.quantity = 1;
            product.isAdded = true;
            // console.log(state.cart);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_USER: (state, user) => {
            state.user = [user];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.push(user);
            localStorage.setItem('users', JSON.stringify(state.users));
        },

        CLEAR_CART: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CLEAR_ALL_ORDERS: (state) => {
            state.order = [];
            localStorage.setItem('order', JSON.stringify(state.order));
            state.orders = [];
            localStorage.setItem('orders', JSON.stringify(state.orders));
            state.sentOrder = [];
            localStorage.setItem('sentOrder', JSON.stringify(state.sentOrder));
            state.sentOrders = [];
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
            state.finishOrder = [];
            localStorage.setItem('finishOrder', JSON.stringify(state.finishOrder));
            state.finishOrders = [];
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users = [];
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        CHANGE_IS_ADDED: (state, product) => {
            // console.log(product);
            product.isAdded = false;
            localStorage.setItem('products', JSON.stringify(state.products));
        },

        SENT_ORDER: (state, order) => {
            // console.log(order);
            // console.log(state.orders);
            state.sentOrder = order;
            // console.log(state.sentOrder);
            localStorage.setItem('sentOrder', JSON.stringify(state.sentOrder));
            state.sentOrders.push(order);
            // console.log(state.sentOrders);
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        FINISH_ORDER: (state, order) => {
            // console.log(order);
            // console.log(state.orders);
            state.finishOrder = order;
            // console.log(state.finishOrder);
            localStorage.setItem('finishOrder', JSON.stringify(state.finishOrder));
            state.finishOrders.push(order);
            // console.log(state.finishOrders);
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },

        REMOVE_ORDER: (state, order, index) => {
            // console.log(index);
            // product.isAdded = false;
            // localStorage.setItem('products', JSON.stringify(state.products));
            state.orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        REMOVE_SENT_ORDER: (state, order, index) => {
            // console.log(index);
            // product.isAdded = false;
            // localStorage.setItem('products', JSON.stringify(state.products));
            state.sentOrders.splice(index, 1);
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        REMOVE_FINISH_ORDER: (state, order, index) => {
            state.finishOrders.splice(index, 1);
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },
        REMOVE_USER: (state, index) => {
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
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
    },
    // Акшены - асинхронны
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://f7df247f0c76b835.mokky.dev/products', {
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

        async CREATE_ORDER({state, commit}, {cartTotalCost, pickupTotalCost, delivery, payment}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');
                let orderId = Date.now().toString().slice(-4);

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/orders', {
                        orderItems: state.cart,
                        userItems: state.user,
                        id: Number(orderId),
                        dateOrder: date,
                        timeOrder: time,
                        totalPrice: cartTotalCost.value,
                        pickupPrice: pickupTotalCost.value,
                        delivery: delivery.value,
                        payment: payment.value,
                    },
                );
                commit('CREATE_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
// Очищает Корзину после оформления заказа
            commit('CLEAR_CART');
        },

        async GET_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/orders');

                commit('SET_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async GET_SENT_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/sentOrders');

                commit('SET_SENT_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async GET_FINISH_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/finishOrders');

                commit('SET_FINISH_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async DELETE_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/orders/${order.id}`);
                commit('REMOVE_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async DELETE_SENT_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/sentOrders/${order.id}`);
                commit('REMOVE_SENT_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async DELETE_FINISH_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/finishOrders/${order.id}`);
                commit('REMOVE_FINISH_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async SENT_ORDER({commit}, {order}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/sentOrders', {
                        order,
                        dateSentOrder: date,
                        timeSentOrder: time
                    }
                );

                commit('SENT_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
        },

        async FINISH_ORDER({commit}, {order}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/finishOrders', {
                        order,
                        dateFinishOrder: date,
                        timeFinishOrder: time
                    }
                );
                commit('FINISH_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
        },

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
        DELETE_FROM_CART({commit}, product, index) {
            commit('REMOVE_FROM_CART', product, index);
        },
        CHANGE_IS_ADDED({state, commit}, product) {
            commit('CHANGE_IS_ADDED', product);
        },


        ADD_USER({state, commit}, user) {
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
        },
        ORDER(state) {
            return state.order;
        },
        sentOrder(state) {
            return state.sentOrder;
        },
        sentOrders(state) {
            return state.sentOrders;
        },
        finishOrder(state) {
            return state.finishOrder;
        },
        finishOrders(state) {
            return state.finishOrders;
        },
    }
});

export default store;


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

/*
ADD_USER({state, commit}, user) {
    commit('SET_USER', user);
    try {
        await axios.post(`https://1102df40d9a2f61e.mokky.dev/users`, {
                user: user,
            },
        );
    } catch (err) {
        console.log(err);
    }
},*/
