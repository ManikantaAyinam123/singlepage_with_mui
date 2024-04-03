export const setData = (data) => {
    console.log('This is from Action todo ',data)
    return{
        type: "SET_DATA",
        payload: data,
    };
};

