import { Link, Outlet, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from '../Header.jsx';
import { fetchEvent } from '../../util/Http.js';

export default function EventDetails() {
  const params = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['event',params.id],
    queryFn: ({signal})=> fetchEvent({signal,id:params.id}),
  });


  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>EVENT TITLE</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src="http://localhost:3000" alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
          </div>
        </div>
      </article>
    </>
  );
}
