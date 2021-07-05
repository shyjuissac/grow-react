function MeetupItems(props){
    return <div >
        <div>
       <p dangerouslySetInnerHTML={{ __html:props.content.rendered }}/>
            </div>
            </div>
}
export default MeetupItems;