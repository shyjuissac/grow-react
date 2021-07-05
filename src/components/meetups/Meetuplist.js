import MeetupItems from './MeetupItems';

function MeetupList(props){
    return(<div>
        {props.meetups.map((meetup) =>(
    <MeetupItems key={meetup.id} content={meetup.content} />
    ) )}
</div>
    );
    }
export default MeetupList;