
export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const setCars = (items) => ({
    type: 'SET_CARS',
    payload: items,
});

export const fetchCars = (sortBy) => (dispatch) => {
    console.log(sortBy);
    dispatch(setLoaded(false));
    fetch(`https://api.carmart.ru/cars/temp?${sortBy !== null ? `brand=${sortBy}` : ''}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(setCars(json.list));
      });
}

