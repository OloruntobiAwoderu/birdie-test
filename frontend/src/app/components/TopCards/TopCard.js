import TaskOverview from "../TaskCard/TaskOverview";
import styled from "styled-components";
import FoodIntake from "../Food Intake/FoodIntake";
import dayjs from "dayjs";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Fluid Intake Bar Chart",
		},
	},
};

const BackgroundColor = styled.div`
	background: #e5e5e5;
	display: flex;
	@media  (max-width: 768px) {
		flex-direction: column;
	}
`;

const ParentDiv = styled.div`
	padding-top: 20px;
	display: flex;
	@media  (max-width: 768px) {
		flex-direction: column;
	}
`;

const CardDiv = styled.div`
	display: flex;
	width: 47%;
	height: 136px;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
	margin-left: 20px;
	@media  (max-width: 768px) {
		width: 95%;
		margin-bottom:10px;
		margin-left:10px;
	}
`;

const CardComponent = styled.div`
	margin-top: 30px;
	margin-left: 25px;
`;

const ParagraphText = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 29px;
	color: #4f4f4f;
	padding-left: 20px;
`;

const HeaderTag = styled.h5`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	padding-left: 20px;
	color: #abaaaa;
`;

const FoodTag = styled.h2`
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.01em;
	padding-top: 20px;

	/* Gray 2 */

	color: #4f4f4f;
`;

const FoodIntakeDiv = styled.div`
	/* white */

	background: #ffffff;
	/* Drop 2 */

	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
	padding-left: 20px;
	padding-bottom: 70px;
	padding-right: 20px;
	height: 380px;
	overflow: scroll;
	
`;

const FoodIntakeAndBarDiv = styled.div`
	width: 55%;
	margin-right: 16px;
	margin-left: 10px;
	margin-top: 20px;
	@media  (max-width: 768px) {
		width: 95%;
		
		
	}
`;

const BarchartDiv = styled.div`
	background: #ffffff;
	/* Drop 2 */

	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
	padding-left: 20px;
	padding-bottom: 20px;
	padding-right: 20px;
	margin-top: 20px;
	height: 400px;
	
`;

const TopCard = ({ events }) => {
	let i = 0;
	let j = 0;
	let labels = [];
	let dataset = [];
	events?.data?.map((event) => {
		if (event.event_type === "visit_completed") {
			return i++;
		} else if (event.event_type === "alert_raised") {
			return j++;
		} else if (event.event_type === "fluid_intake_observation") {
			labels.push(dayjs(event.timestamp).format("h:mm A"));
			dataset.push(event.consumed_volume_ml);
			return null;
		}
		return null;
	});
	const data = {
		labels,
		options,
		datasets: [
			{
				label: "Fluid Volume consumed",
				data: dataset,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};
	return (
		<BackgroundColor>
			<div>
				<ParentDiv>
					<CardDiv>
						<CardComponent>
							<svg
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="30" cy="30" r="30" fill="#C4C4C4" />
							</svg>
						</CardComponent>
						<div>
							<HeaderTag>Visits Completed</HeaderTag>
							<ParagraphText>{i}</ParagraphText>
						</div>
					</CardDiv>
					<CardDiv>
						<CardComponent>
							<svg
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="30" cy="30" r="30" fill="#C4C4C4" />
							</svg>
						</CardComponent>
						<div>
							<HeaderTag>Alerts Raised</HeaderTag>
							<ParagraphText>{j}</ParagraphText>
						</div>
					</CardDiv>
				</ParentDiv>

				<TaskOverview events={events} />
			</div>
			<FoodIntakeAndBarDiv>
				<FoodIntakeDiv>
					<FoodTag>Food Intake</FoodTag>
					<FoodIntake events={events} />
				</FoodIntakeDiv>
				<BarchartDiv>
					<Bar options={options} data={data} />
				</BarchartDiv>
			</FoodIntakeAndBarDiv>
		</BackgroundColor>
	);
};

export default TopCard;
