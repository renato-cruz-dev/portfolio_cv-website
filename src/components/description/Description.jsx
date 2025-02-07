import PropTypes from "prop-types";

import "./Description.css";
import photo from "../../assets/me-myself-and-i.png";

const Description = ({ filter, getOrder }) => {
  const calculateAge = () => {
    const birthDate = new Date("1996-04-14");
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth) {
      age--;
    } else if (currentMonth === birthMonth) {
      const currentDay = currentDate.getDate();
      const birthDay = birthDate.getDate();
      if (currentDay < birthDay) {
        age--;
      }
    }

    return age;
  };

  return (
    <div
      id="description"
      className={`card text-card ${getOrder("about")} ${
        filter !== "about" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <img src={photo} alt="photo of Renato" />
      <h5 className="text__regular">
        Hello, world! I{"'"}m <span className="text__bold">Renato Cruz</span>, I
        {"'"}m{" "}
        <span className="text__bold">{`${calculateAge()}`} years old</span>, and
        I{"'"}m a <span className="text__bold">really junior developer</span>{" "}
        waiting for an opportunity to grow and learn as a developer.
      </h5>
    </div>
  );
};

export default Description;

Description.propTypes = {
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
};
