import {
	PER_CONTINENT_REQUEST,
	PER_CONTINENT_SUCCESS,
	PER_CONTINENT_FAIL,
    COUNTRIES_FAIL,
    COUNTRIES_SUCCESS,
    COUNTRIES_REQUEST
} from "../constances/dataContance";
import axios from "axios";

export const allContinents = () => async (dispatch) => {
	try {
		dispatch({
			type: PER_CONTINENT_REQUEST,
		});
	
		const { data } = await axios.get(
			"https://corona.lmao.ninja/v2/continents?yesterday&sort"
		);
      
		dispatch({
			type: PER_CONTINENT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PER_CONTINENT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};


export const allCountries = () => async (dispatch) => {
	try {
		dispatch({
			type: COUNTRIES_REQUEST,
		});

		const { result } = await axios.get("https://api.printful.com/countries");
          if (result) {
              console.log("WOOOOOWWWOO");
					}
		dispatch({
			type: COUNTRIES_SUCCESS,
			payload: result,
		});
	} catch (error) {
		dispatch({
			type: COUNTRIES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
