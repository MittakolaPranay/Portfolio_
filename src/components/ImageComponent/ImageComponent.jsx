import AboutImage from "../../assets/AboutImage.png"
import "./ImageComponent.css"
function ImageComponent() {
    return <div className="section__padding app__bg">
        <div className="image">
            <img src={AboutImage} alt="" />
        </div>
    </div>
}

export default ImageComponent;