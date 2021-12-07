import dayjs from "dayjs";
import styled from "styled-components";

const ParentDiv = styled.div`
	background: #ffffff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
	border-radius: 4px;
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
`;

const HeaderTag = styled.h4`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	letter-spacing: 0.01em;

	color: #4f4f4f;
`;

const SpanTag = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	letter-spacing: 0.01em;
	color: #4f4f4f;
	opacity: 0.5;
	margin-left: 0px;
`;

const Span2Tag = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;

	letter-spacing: 0.01em;
	margin-left: 0px;
	color: #4f4f4f;
`;

const CareGiverID = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	/* identical to box height */

	letter-spacing: 0.01em;

	color: #707683;
`;

const DateTime = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	text-align: right;
	letter-spacing: 0.01em;

	/* Gray 4 */

	color: #bdbdbd;
`;

const Label = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 13px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 0.02em;

	/* Green 1 */

	color: ${({ color = "" }) => color};
	background: ${({ background = "" }) => background};
	border-radius: 4px;
	padding: 5px;
`;

const FirstDiv = styled.div`
	width: 70%;
`;

const SecondDiv = styled.div`
	margin-right: 10px;
`;

const TaskCard = ({ event }) => {
	const { event_type } = event;
	return (
		<ParentDiv>
			<FirstDiv>
				<HeaderTag>{event.task_definition_description}</HeaderTag>
				<SpanTag>Note</SpanTag>: <Span2Tag>{event.task_schedule_note}</Span2Tag>
				<CareGiverID>Care Giver Id: {event.caregiver_id}</CareGiverID>
			</FirstDiv>
			<SecondDiv>
				<DateTime>{dayjs(event.timestamp).format("MMM D, YYYY")}</DateTime>
				<DateTime>{dayjs(event.timestamp).format("h:mm A")}</DateTime>
				<Label
					color={
						event_type === "task_completed"
							? " #219653"
							: "task_completion_reverted"
							? "#808080"
							: "task_schedule_created"
							? "#0000FF"
							: ""
					}
					background={
						event_type === "task_completed"
							? " rgba(33, 150, 83, 0.2)"
							: "task_completion_reverted"
							? "rgba(236, 236, 236, 1)"
							: "task_schedule_created"
							? "rgba(228, 241, 254, 1)"
							: ""
					}
				>
					{event_type === "task_completed"
						? "Completed"
						: "task_completion_reverted"
						? "Reverted"
						: "task_schedule_created"
						? "Created"
						: ""}
				</Label>
			</SecondDiv>
		</ParentDiv>
	);
};

export default TaskCard;
