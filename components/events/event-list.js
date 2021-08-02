import EventItem from './event-item';

function EventList(props) {
	const { items } = props; //destructuring - anders moet er voor elk element items. gezet worden

	return (
		<ul>
			{items.map(event => (
				<EventItem
					key={event.id}
          id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
}
export default EventList;

// voor React moet er een key zijn met een unieke value!