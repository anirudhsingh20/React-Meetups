import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const addressInputRef = useRef();

    function submitHandler( event ) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
            address: enteredAddress,
        }
        // console.log(meetup);
        props.onAddMeetup(meetup);
    }

    return (
        <Card>
            <form className={ classes.form } onSubmit={ submitHandler }>
                <div className={ classes.control }>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={ titleInputRef } />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="title">Meetup Image</label>
                    <input type="text" required id="title" ref={ imageInputRef } />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="description">Meetup Description</label>
                    <input type="text" required id="description" ref={ descriptionInputRef } />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="address">Meetup Address</label>
                    <textarea id="address" required rows="5" ref={ addressInputRef }></textarea>
                </div>
                <div className={ classes.actions }>
                    <button className={ classes.btn }>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;