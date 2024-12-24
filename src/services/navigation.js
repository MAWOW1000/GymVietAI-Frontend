// navigation.js
let navigator = null;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (to) => {
    if (navigator) {
        navigator(to);
    }
};
