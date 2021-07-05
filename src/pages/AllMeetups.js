import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/Meetuplist';

function AllMeetupPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [LoadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(()=> {
        fetch('https://api.goodhopeopportunities.com/wp-json/wp/v2/posts')
        .then(
            Response => {
               return Response.json();
            }).then(data =>{
                setIsLoading(false);
                setLoadedMeetups(data);
                console.log(data)
    
            });

    }, [])
    
        if(isLoading){
            return <section><p>Loading...</p></section>
        }
    return (
    
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={LoadedMeetups} />
    </section>);

}
export default AllMeetupPage;