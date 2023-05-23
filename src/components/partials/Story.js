function Story(props) {
    return (
        <div className="text-center me-3">
            <img
                src={props.image}
                alt={props.name} className="rounded-circle  border border-danger border-3 story"/>
            <br/><span>{props.name}</span>
        </div>
    );
}
export default Story;