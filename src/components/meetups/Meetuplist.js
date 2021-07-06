import MeetupItems from "./MeetupItems";

function MeetupList(props) {
  return (
    <div>
      {props.meetups.map((meetup) => (
        <MeetupItems
        key={meetup.id}
        title={meetup.title}
        excerpt={meetup.excerpt}
        fimg_url={meetup.fimg_url}
        />
      
      ))}
    </div>
  );
}
export default MeetupList;
