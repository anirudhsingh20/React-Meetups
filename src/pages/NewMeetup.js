import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../ui/Card";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    let navigate = useNavigate();

    function addNewMeetup( data ) {
        fetch(
            'https://react-5cf36-default-rtdb.asia-southeast1.firebasedatabase.app//meetups.json',
            {
                method: 'POST',
                body: JSON.stringify( data ),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            navigate('/');
            console.log( data );
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <div>
                <Card><NewMeetupForm onAddMeetup={ addNewMeetup } /></Card>

            </div>
        </section>
    )
}

export default NewMeetupPage;