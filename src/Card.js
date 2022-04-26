const Cards = (props) => {
    return (
        <div className="card">
            <div className="left-card">
                <h3>{props.time}</h3>
                <img src={props.image} alt="" />
            </div>
            <div className="right-card">
                <h2>{props.title}</h2>
                <h4>{props.type}</h4>
                <h3>{props.duration}</h3>
                {props.direct ? (
                    <span className="test">• Direct</span>
                ) : (
                    <span></span>
                )}
                {props.isUnseen ? (
                    <span className="test">• Inédit</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
};

export default Cards;
