import TaskCards from "./TaskCards";
import styled from "styled-components";

import dayjs from "dayjs";



const Progress = styled.div`
	width: 95%;
	height: 4px;
	position: relative;
`;
const ProgressMain = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(242, 153, 74, 0.2);
	border-radius: 20px;
	position: relative;
`;
const ProgressMainCounter = styled.div`
	width: ${({ percentage = 0 }) => percentage}%;
	height: 100%;
	position: absolute;
	background: #f2994a;
	border-radius: 20px;
`;
const HeaderTag = styled.h2`
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
const CompletedTasks = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 19px;
	/* identical to box height */

	letter-spacing: 0.01em;

	/* Gray 2 */

	color: #4f4f4f;
`;

const Timestamp = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	/* identical to box height */

	letter-spacing: 0.01em;

	color: #192a3e;
`;

const ParentDiv = styled.div`
	/* white */

	background: #ffffff;
	/* Drop 2 */

	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
	margin-left: 20px;
	padding-left: 20px;
	padding-bottom: 75px;
	padding-right: 20px;
	margin-right: 10px;
	@media  (max-width: 768px) {
		margin-left: 10px;
		
	}
`;

const TaskCardDiv = styled.div`
	height: 500px;
	overflow-x: scroll;
	
	
`;

const BackgroundDiv = styled.div`
	display: flex;
	margin-top: 20px;
`;

const TaskOverview = ({ events }) => {
	let tasks = 0;
	let completed = 0;
	events?.data?.map((event) => {
		if (
			event.event_type === "task_completion_reverted" ||
			event.event_type === "task_schedule_created"
		) {
			return tasks++;
		} else if (event.event_type === "task_completed") {
			return completed++;
		} 
		return null;
	});
	return (
		<BackgroundDiv>
			<ParentDiv>
				<HeaderTag>Tasks</HeaderTag>
				<CompletedTasks>
					{completed} completed out of {tasks + completed}
				</CompletedTasks>
				<Progress>
					<ProgressMain>
						<ProgressMainCounter
							percentage={(completed / (tasks + completed)) * 100}
						></ProgressMainCounter>
					</ProgressMain>
				</Progress>
				<Timestamp>
					{dayjs(events?.data[0].timestamp).format("dddd, MMMM D, YYYY")}
				</Timestamp>
				<hr />
				<TaskCardDiv>
					<TaskCards events={events} />
				</TaskCardDiv>
			</ParentDiv>
		</BackgroundDiv>
	);
};

export default TaskOverview;
