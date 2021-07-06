function MeetupItems(props){
    return <div >
        <div>
        <h1 dangerouslySetInnerHTML={{ __html:props.title.rendered }}/>
       <p dangerouslySetInnerHTML={{ __html:props.excerpt.rendered }}/>
       <img src={props.fimg_url } alt={props.title.rendered} />

      
            </div>
            </div>
}
export default MeetupItems;