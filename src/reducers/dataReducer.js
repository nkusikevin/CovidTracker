import {PER_CONTINENT_REQUEST,PER_CONTINENT_SUCCESS,PER_CONTINENT_FAIL, COUNTRIES_REQUEST, COUNTRIES_SUCCESS, COUNTRIES_FAIL} from "../constances/dataContance"


export const allContinentsReducer = (state = { allContinent: [] }, action) => {
	switch (action.type) {
		case PER_CONTINENT_REQUEST:
			return { loading: true, allContinent: [] };
		case PER_CONTINENT_SUCCESS:
			return { loading: false, allContinent: action.payload };
		case PER_CONTINENT_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const allCountriesReducer = (state = { allCountry: [] }, action) => {
	switch (action.type) {
		case COUNTRIES_REQUEST:
			return { loading: true, allCountry: [] };
		case COUNTRIES_SUCCESS:
			return { loading: false, allCountry: action.payload };
		case COUNTRIES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
