
import { VerticalTimeline } from 'react-vertical-timeline-component';
import styled from 'styled-components';
import { EventCard } from './EventCard'
import 'react-vertical-timeline-component/style.min.css';



const TimelineContainer = styled.div`
  height: 65%;
  width: 100%;
  position: relative;
  Background: #f5f5f5;
`;

export const EventsTimeline = ({ events }) => {
	return (
	  <TimelineContainer>
		{events.data && (
		  <VerticalTimeline layout="1-column">
			{events.data.map((event) => (
			  <EventCard key={event.id} event={event} />
			))}
		  </VerticalTimeline>
		)}
	  </TimelineContainer>
	);
  };
  