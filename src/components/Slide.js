import React from "react";
import ItemsCarousel from "react-items-carousel";
import "../App.css";
import axios from "axios";

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: [],
		};
	}
	componentDidMount = () => {
		axios
			.get("https://corona.lmao.ninja/v2/continents?yesterday&sort")
			.then((response) => {
				this.setState({ Data: response.data });
				// console.log("ok:", this.state.Data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	componentWillMount() {
		this.setState({
			children: [],
			activeItemIndex: 0,
		});

		// setTimeout(() => {
		// 	this.setState({
		// 		children: this.createChildren(20),
		// 	});
		// }, 100);
	}

	

	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

	render() {
		const { activeItemIndex} = this.state;
	
		return (
			<ItemsCarousel
				// Placeholder configurations
				enablePlaceholder
				numberOfPlaceholderItems={5}
				minimumPlaceholderTime={1000}
				style={{ height: "280px !important" }}
				// Carousel configurations
				numberOfCards={3}
				gutter={20}
				showSlither={true}
				firstAndLastGutter={true}
				freeScrolling={true}
				// Active item configurations
				requestToChangeActive={this.changeActiveItem}
				activeItemIndex={activeItemIndex}
				activePosition={"center"}
				chevronWidth={24}
				rightChevron={"->"}
				leftChevron={"<-"}
				outsideChevron={false}>
				{this.state.Data.map((card) => (
					<div key={1} className='card'>
						<div className='left'>
							<h1 className='card_title'>{card.continent}</h1>
							<p className='cardNum'>{card.todayCases}</p>
							<p className='decs'>New cases</p>
							<p className='allcases'>All cases {card.cases}</p>
						</div>
						<div className='right'>
							<div className='deaths'>
								<p className='newDeath'>{card.todayDeaths}</p>
								<p className='cardT'>New Death</p>
								<p className='cardTNumber'>Total Deaths {card.deaths}</p>
							</div>
							<hr />
							<div className='recovered'>
								<p className='newrecovered'>{card.todayRecovered}</p>
								<p className='cardT'>Newly Recovered</p>
								<p className='cardTNumber'>Total Recovered {card.recovered}</p>
							</div>
							<hr />
							<div className='recovered'>
								<p className='newrecovered'>619</p>
								<p className='cardT'>New Vaccined</p>
								<p className='cardTNumber'>Total Vaccined 4,634</p>
							</div>
						</div>
					</div>
				))}
			</ItemsCarousel>
		);
	}
}
