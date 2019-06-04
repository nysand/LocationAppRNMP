import { ADD_PLACE, SET_PLACES } from './actionTypes';
//Add new location to the Firebase DB
export const addPlace = (placeName, location) => {
    return dispatch => {
        const placeData = {
            name: placeName,
            location: location
        };
        //connecting to the DB
        fetch("https://reactnativeapp-6802e.firebaseio.com/places.json", {
            method: "POST",
            body: JSON.stringify(placeData)
        })
        //err handling
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
    };
};
//retrieve places from firebase DB
export const getPlaces = () => {
    //dispatch used because of async code
    return dispatch => {
        //fetch api is originally a get request unless the method is stated
        fetch("https://reactnativeapp-6802e.firebaseio.com/places.json")
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            const places = [];
            for (let key in parsedRes) {
                places.push({
                    ...parsedRes[key],
                    id: key
                });
            }
            //dispatching the places object
            dispatch(setPlaces(places));
        });
    };
};

export const setPlaces = places => {
    return {
        type: SET_PLACES,
        //places property of the set_places action
        places: places
    };
};
