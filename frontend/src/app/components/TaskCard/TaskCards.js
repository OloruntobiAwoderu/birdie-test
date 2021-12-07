import TaskCard from "./TaskCard";

const TaskCards = ({ events }) => {
	console.log(events)
	return (
		<div>
			{events?.data?.map((event) => {
				if (
					event.event_type === "task_completed" ||
					event.event_type === "task_completion_reverted" ||
					event.event_type === "task_schedule_created"
				) {
					return <TaskCard key={event.id} event={event} />;
				}
				return null;
			})}
		</div>
	);
};

export default TaskCards;
