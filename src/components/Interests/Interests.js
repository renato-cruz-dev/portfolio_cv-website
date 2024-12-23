import React, {useState} from "react";
import "./Interests.css"

const Interests = (setActiveInfo) => {
    const [activeBtn, setActiveBtn] = useState("football");

    return (
        <div id="interests-item" className="about-grid-item">
            <p>interests</p>
            <span>[Click theme buttons to highlight specificity.]</span>
            <div id="interests-container">
                <div id="interests-btns">
                    <button className={activeBtn === "football" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("football")}>football</button>
                    <button className={activeBtn === "movies" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("movies")}>movies</button>
                    <button className={activeBtn === "series" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("series")}>series</button>
                    <button className={activeBtn === "dogs" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("dogs")}>dogs</button>
                    <button className={activeBtn === "art" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("art")}>art</button>
                    <button className={activeBtn === "places" ? "active-interests-btn" : ""} onClick={() => setActiveBtn("places")}>places</button>
                </div>
                <div id="interests-tags">
                    <div className={`art-interest ${activeBtn === "art" ? "active-interest-tag" : ""}`}>Vincent Van Gogh</div>
                    <div className={`football-interest ${activeBtn === "football" ? "active-interest-tag" : ""}`}>FC Porto</div>
                    <div className={`movies-interest ${activeBtn === "movies" ? "active-interest-tag" : ""}`}>Helena Bonham Carter</div>
                    <div className={`series-interest ${activeBtn === "series" ? "active-interest-tag" : ""}`}>Game of Thrones</div>
                    <div className={`places-interest ${activeBtn === "places" ? "active-interest-tag" : ""}`}>Rome</div>
                    <div className={`dogs-interest ${activeBtn === "dogs" ? "active-interest-tag" : ""}`}>My dog Dobby</div>
                    <div className={`series-interest ${activeBtn === "series" ? "active-interest-tag" : ""}`}>Breaking Bad</div>
                    <div className={`places-interest ${activeBtn === "places" ? "active-interest-tag" : ""}`}>Barcelona</div>                     
                    <div className={`art-interest ${activeBtn === "art" ? "active-interest-tag" : ""}`}>Leonardo Da Vinci</div>
                    <div className={`movies-interest ${activeBtn === "movies" ? "active-interest-tag" : ""}`}>Wes Anderson</div>
                    <div className={`places-interest ${activeBtn === "places" ? "active-interest-tag" : ""}`}>Valencia</div>
                    <div className={`series-interest ${activeBtn === "series" ? "active-interest-tag" : ""}`}>Stranger Things</div>
                    <div className={`dogs-interest ${activeBtn === "dogs" ? "active-interest-tag" : ""}`}>Great Danes</div>
                    <div className={`places-interest ${activeBtn === "places" ? "active-interest-tag" : ""}`}>Sevilla</div>
                    <div className={`movies-interest ${activeBtn === "movies" ? "active-interest-tag" : ""}`}>Eddie Redmayne</div>
                    <div className={`places-interest ${activeBtn === "places" ? "active-interest-tag" : ""}`}>Porto</div>
                    <div className={`art-interest ${activeBtn === "art" ? "active-interest-tag" : ""}`}>Renaissance</div>
                    <div className={`movies-interest ${activeBtn === "movies" ? "active-interest-tag" : ""}`}>Harry Potter</div>
                </div>
            </div>
        </div>
    )
}

export default Interests;