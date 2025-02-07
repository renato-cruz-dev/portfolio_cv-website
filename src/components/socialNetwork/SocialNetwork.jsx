import PropTypes from "prop-types";

import "./SocialNetwork.css";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";

const SocialNetwork = ({ filter, getOrder, link }) => {
  return (
    <div
      id={link.code}
      className={`card social-card ${getOrder("about")} ${
        filter !== "about" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <a
        className="social-icon"
        href={link.link}
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={arrowUpRight}
          alt={`arrow that links user to ${link.network} account"`}
        />
        <p className="text__regular">visit {link.network}</p>
      </a>
    </div>
  );
};

export default SocialNetwork;

SocialNetwork.propTypes = {
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
};
