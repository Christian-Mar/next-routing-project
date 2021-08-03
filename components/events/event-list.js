import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
	const { items } = props; //destructuring - anders moet er voor elk element items. gezet worden

	return (
		<ul className={classes.list}>
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