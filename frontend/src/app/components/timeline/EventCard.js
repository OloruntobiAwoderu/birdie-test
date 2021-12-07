import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FiAlertTriangle } from "react-icons/fi";
import {
	FaSyringe,
	FaSignInAlt,
	FaSignOutAlt,
	FaNotesMedical,
	FaToilet,
	FaPills,
	FaRegCalendarMinus,
} from "react-icons/fa";
import { GiDrinking, GiEating } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiMentalHealthFill } from "react-icons/ri";
import { BiBody, BiTask, BiHappy, BiSad, BiSmile } from "react-icons/bi";
import dayjs from "dayjs";


const colors = {
	red: "#ff0000",
	green: "#39D576",
	orange: "#ffa500",
	grey: "#a9a9a9",
	white: "#ffffff",
};

const eventAttributes = ({ event_type }) => {
	switch (event_type.toUpperCase()) {
		case "ALERT_QUALIFIED":
			return { color: colors.red, icon: FiAlertTriangle };
		case "ALERT_RAISED":
			return { color: colors.red, icon: FiAlertTriangle };
		case "CATHETER_OBSERVATION":
			return { color: colors.grey, icon: FaSyringe };
		case "CHECK_IN":
			return { color: colors.green, icon: FaSignInAlt };
		case "CHECK_OUT":
			return { color: colors.green, icon: FaSignOutAlt };
		case "CONCERN_RAISED":
			return { color: colors.red, icon: FiAlertTriangle };
		case "FLUID_INTAKE_OBSERVATION":
			return { color: colors.grey, icon: GiDrinking };
		case "FOOD_INTAKE_OBSERVATION":
			return { color: colors.grey, icon: GiEating };
		case "GENERAL_OBSERVATION":
			return { color: colors.grey, icon: FaNotesMedical };
		case "INCONTINENCE_PAD_OBSERVATION":
			return { color: colors.grey, icon: FaToilet };
		case "MEDICATION_SCHEDULE_CREATED":
			return { color: colors.green, icon: AiOutlineSchedule };
		case "MEDICATION_SCHEDULE_UPDATED":
			return { color: colors.green, icon: AiOutlineSchedule };
		case "MENTAL_HEALTH_OBSERVATION":
			return { color: colors.grey, icon: RiMentalHealthFill };
		case "NO_MEDICATION_OBSERVATION_RECEIVED":
			return { color: colors.red, icon: FaNotesMedical };
		case "PHYSICAL_HEALTH_OBSERVATION":
			return { color: colors.grey, icon: BiBody };
		case "REGULAR_MEDICATION_MAYBE_TAKEN":
			return { color: colors.orange, icon: FaPills };
		case "REGULAR_MEDICATION_NOT_TAKEN":
			return { color: colors.red, icon: FaPills };
		case "REGULAR_MEDICATION_PARTIALLY_TAKEN":
			return { color: colors.orange, icon: FaPills };
		case "REGULAR_MEDICATION_TAKEN":
			return { color: colors.green, icon: FaPills };
		case "TASK_COMPLETED":
			return { color: colors.green, icon: BiTask };
		case "TASK_COMPLETION_REVERTED":
			return { color: colors.red, icon: BiTask };
		case "TASK_SCHEDULE_CREATED":
			return { color: colors.green, icon: BiTask };
		case "TOILET_VISIT_RECORDED":
			return { color: colors.grey, icon: FaToilet };
		case "VISIT_CANCELLED":
			return { color: colors.red, icon: FaRegCalendarMinus };
		case "VISIT_COMPLETED":
			return { color: colors.green, icon: BiTask };
		case "MOOD_OBSERVATION":
			const moodIcon = (mood) => {
				switch (mood) {
					case "happy":
						return BiHappy;
					case "okay":
						return BiSmile;
					case "sad":
						return BiSad;
					default:
						return BiSmile;
				}
			};
			const moodColor = (mood) => {
				switch (mood) {
					case "happy":
						return colors.green;
					case "okay":
						return colors.orange;
					case "sad":
						return colors.red;
					default:
						return colors.grey;
				}
			};
			return {
				color: moodColor(event_type.mood),
				icon: moodIcon(event_type.mood),
			};
		default:
			return { color: colors.grey, icon: FaNotesMedical };
	}
};

export const EventCard = ({ event }) => {
	const { id, event_type, timestamp } = event;
	const eventTitle =
		event_type.charAt(0).toUpperCase() + event_type.slice(1).replace(/_/g, " ");
	const Icon = eventAttributes(event).icon;
	return (
		<VerticalTimelineElement
			date={dayjs(timestamp).format("dddd, MMMM D, h:mm A")}
			iconStyle={{
				color: colors.white,
				background: eventAttributes(event).color,
			}}
			icon={<Icon />}
			contentStyle={{
				padding: "0 16px",
				borderTop: `6px solid ${eventAttributes(event).color}`,
			}}
			key={id}
		>
			<div style={{ textAlign: "left" }}>
				<h3 style={{ marginBottom: 0 }}>{eventTitle}</h3>
				{event.note && <p>Note: {event.note}</p>}
				{event.mood && (
					<p style={{ textTransform: "capitalize" }}>Mood: {event.mood}</p>
				)}
				{event.task_schedule_note && <p>Note: {event.task_schedule_note}</p>}
				{event.task_definition_description && (
					<p>Description: {event.task_definition_description}</p>
				)}
				{event.volume_ml && <p>Volume: {event.volume_ml}mL</p>}
				{event.meal && <p>Meal: {event.meal}</p>}
				{event.fluid && <p>Type of fluid: {event.fluid}</p>}
				{event.observed && <p>Observed: {event.observed ? "yes" : "no"}</p>}
				{event.medication_failure_reason && (
					<p>Reason: {event.medication_failure_reason}</p>
				)}
				{event.severity && <p>Severity: {event.severity}</p>}
				{event.alert_severity && <p>Severity: {event.alert_severity}</p>}
				{event.consumed_volume_ml && (
					<p>Volume: {event.consumed_volume_ml}mL</p>
				)}
				{event.pad_condition && <p>Condition: {event.pad_condition}</p>}
			</div>
		</VerticalTimelineElement>
	);
};
