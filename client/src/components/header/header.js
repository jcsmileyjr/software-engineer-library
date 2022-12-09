import "./header.css";
import MobileTools from "../mobileTools/MobileTools";

const Header = () => {
    return(
        <section className="header--container">
            <div className="title--container">
                <p className="title__topLine--style">Software</p>
                <p className="title__middleLine--style">Engineer</p>
                <p className="title__bottomLine--style">Library</p>
            </div>
            <div className="showTools">
                <MobileTools />
            </div>
        </section>
    )
}

export default Header;