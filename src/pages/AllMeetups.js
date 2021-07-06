import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/Meetuplist';
import classes from './AllMeetups.module.css'

function AllMeetupPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [LoadedMeetups, setLoadedMeetups ] = useState([]);
    const [LoadedMeetupss, setLoadedMeetupss] = useState([]);
    const [LoadedMeetupsss, setLoadedMeetupsss] = useState([]);
    useEffect(()=> {




        




       const fetchUsers =  fetch('https://api.goodhopeopportunities.com/wp-json/wp/v2/posts?categories=2');
        const fetchUser2 = fetch('https://api.goodhopeopportunities.com/wp-json/wp/v2/posts?categories=4');
        const fetchUser3 = fetch('https://api.goodhopeopportunities.com/wp-json/wp/v2/posts?categories=1');

        Promise.all([fetchUsers, fetchUser2, fetchUser3]).then(values => {
            return Promise.all(values.map(r => r.json()));
        }).then(([users1 , users2, users3]) => {


        
                setIsLoading(false);
                setLoadedMeetups(users1);
                setLoadedMeetupss(users2);
                setLoadedMeetupsss(users3);
                console.log(users1)
    
            });

    }, [])
    
        if(isLoading){
            return <section><p>Loading...</p></section>
        }
    return (
    
    <section>
        <h1>All Meetups</h1>
        <div className={classes.allcat}>
        <div className={classes.world}>
        <h2>India</h2>
        <MeetupList meetups={LoadedMeetups} />
        </div>
        <div className={classes.delhi}>
            <h2>Delhi</h2>
        <MeetupList meetups={LoadedMeetupss} />
        </div>
        <div className={classes.india}>
        <h2>World</h2>
        <MeetupList meetups={LoadedMeetupsss} />
        </div>
        </div>
        
    </section>);

}
export default AllMeetupPage;