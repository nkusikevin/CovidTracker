import "./App.css";
import React, { useState, useEffect } from "react";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import axios from "axios"
import { allCountries } from "./actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import Bio from "./components/Bio";

function App() {
	const dispatch = useDispatch();
	const fetchData = () => {
		var config = {
			method: "GET",
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin":"",
				"Content-Type": "application/json",
			},
		};
		return axios
			.get("https://api.printful.com/countries",config)
			.then((response) => console.log(response.data));
	};
	useEffect(() => {
	
		//  dispatch(allCountries);
 fetchData();
	}, []);
	return (
		<>
			<section className='hero'>
				<div className='back'>
					<nav>
						<div className='logo'>COVICALC</div>
						<div className='btn'>CONTACT</div>
					</nav>
					<div className='title'>
						<h1>UPDATES</h1>
						<p>search a country</p>
					</div>
					<form action='' className='form_container'>
						<select name='cars' id='cars'>
							<option value='volvo'>Rwanda</option>
							<option value='saab'>Usa</option>
							<option value='mercedes'>Uganda</option>
							<option value='audi'>Kenya</option>
						</select>
						<input type='date' name='' id='' />
						<button type='submit' className='btn py'>
							SUBMIT
						</button>
					</form>
					<div className='info-box'>
						<div className='totalNumbers'>
							<h1 className='Tnumbers'>2,188,845</h1>
							<p>cumulatively</p>
						</div>
						<div className='ditsNum'>
							<div className='test'>
								<h1 className='totalNum'>11,270</h1>
								<p className='ditsTitle'>Test</p>
								<p className='tnum'>2,188,845</p>
							</div>
							<div className='test'>
								<h1 className='totalNum'>619</h1>
								<p className='ditsTitle'>Positive Cases</p>
								<p className='tnum'>4,845</p>
							</div>
							<div className='test'>
								<h1 className='totalNum'>20</h1>
								<p className='ditsTitle'>Hospitalized</p>
								<p className='tnum'>18,845</p>
							</div>
							<div className='test'>
								<h1 className='totalNum'>70</h1>
								<p className='ditsTitle'>Recovered</p>
								<p className='tnum'>88,845</p>
							</div>
							<div className='test'>
								<h1 className='totalNum'>9</h1>
								<p className='ditsTitle'>Deaths</p>
								<p className='tnum'>90</p>
							</div>
							<div className='test'>
								<h1 className='totalNum'>48,660</h1>
								<p className='ditsTitle'>Vaccinated</p>
								<p className='tnum'>729,130</p>
							</div>
						</div>
					</div>
					<div className='Per_continents'>
						<h1 className='title_Per_continents'>PER CONTINENTS</h1>
						<Slide />
					</div>
					<Bio />
					<Contact />
					<Footer />
				</div>
			</section>
		</>
	);
}

export default App;
