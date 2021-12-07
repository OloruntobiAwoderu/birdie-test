import React, { useEffect, useState } from "react";
import { EventsTimeline } from "../src/app/components/timeline/eventTimeline";
import Sidebar from "./app/components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopCard from "./app/components/TopCards/TopCard";

const App = () => {
	const [events, setEvents] = useState([]);
	const [date, setDate] = useState("2019-04-27");
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const getEvents = async () => {
			const eventsFromServer = await fetchEvents();
			setEvents(eventsFromServer);
			setLoading(false);
		};
		getEvents();
	}, [date]);

	const fetchEvents = async () => {
		const res = await fetch(
			`/api/v1/events/date?date=${date}`
		);
		const data = await res.json();
		return data;
	};
	const dateChange = (e) => {
		setDate(e.target.value);
	};

	return (
		(
			<div>
				{isLoading ? (
					<div className="App">
						<h1>Loading.................</h1>
					</div>
				) : events.message === "Events for this date do not exist" ? (
					<div className="App">
						<div>
							<h2>There are no events for this date</h2>
						</div>
						<div className="App-body">
							<div className="App-body-content">
								<p>
									Please select another date to view the events for that date
								</p>
								<input type="date" onChange={dateChange} />
							</div>
						</div>
					</div>
				)  : (
					<Router>
						<Sidebar dateChange={dateChange} date={date} />
						<Routes>
							<Route path="/" element={<TopCard events={events} />} />
							<Route
								path="/timeline"
								element={<EventsTimeline events={events} />}
							/>
						</Routes>
					</Router>
				)}
			</div>
		)
	);
};

export default App;
