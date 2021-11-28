import {
    CHANGE_ACTIVE_LINK,
    CHANGE_BACKGROUND,
} from "../actionTypes/ActionTypes";

export const changeActiveLink = (link) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_ACTIVE_LINK,
        payload: link,
    });

    console.log(getState().navbar);

    localStorage.setItem(
        "space-tourism-link",
        JSON.stringify(getState().navbar.activeLink)
    );
};

export const changeBg = (bg) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_BACKGROUND,
        payload: bg,
    });

    console.log(getState().bg);

    localStorage.setItem("space-tourism-bg", JSON.stringify(getState().bg.bg));
};
