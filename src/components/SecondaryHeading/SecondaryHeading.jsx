import "./SecondaryHeading.css";

function SecondaryHeading({heading,para}) {
    return <div className="app__secation_heading">
    <h1 className="app__head">{heading}</h1>
    <p className="p__manrope" dangerouslySetInnerHTML={{ __html: para }}></p>
    </div>
}

export default SecondaryHeading;