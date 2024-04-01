export const setData = (data) => {
    console.log('This is from Action',data)
    return{
        type: "SET_DATA",
        payload: data,
    };
};