import { createSelector } from "reselect";

const getMe = (state) => state.meStore;

export default {
    formatted: createSelector(
        getMe,
        (me) => `${me.pseudo} [${me.email}]`
    ),
};
