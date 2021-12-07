import dayjs from "dayjs";
import styled from "styled-components";

const HeaderTag = styled.h4`
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	letter-spacing: 0.01em;
	text-transform: capitalize;
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

const ParentDiv = styled.div`
	background: #ffffff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
	border-radius: 4px;
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
	padding: 15px;
	
`;
const FirstDiv = styled.div`
	width: 70%;
`;

const SecondDiv = styled.div`
	margin-right: 10px;
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

const FoodIntake = ({ events }) => {
	return (
		<>
			{events?.data?.map((event) => {
				if (
					event.event_type === "food_intake_observation" &&
					event.meal !== ""
				) {
					return (
						<div key={event.id}>
							<ParentDiv>
								<FirstDiv>
									<HeaderTag>{event.meal}</HeaderTag>
									<SpanTag>Note</SpanTag>: <Span2Tag>{event.note}</Span2Tag>
								</FirstDiv>
								<SecondDiv>
									<DateTime>
										{dayjs(event.timestamp).format("MMM D, YYYY")}
									</DateTime>
									<DateTime>{dayjs(event.timestamp).format("h:mm A")}</DateTime>
								</SecondDiv>
							</ParentDiv>
						</div>
					);
				}
				return null;
			})}
		</>
	);
};

export default FoodIntake;
