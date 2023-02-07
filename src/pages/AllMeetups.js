import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-5cf36-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        updateMeetups(data);
      });
  }, []); // empty array so function will run only once

  function updateMeetups(data) {
    const meetups = [];

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };

      meetups.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetups);
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <div>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
