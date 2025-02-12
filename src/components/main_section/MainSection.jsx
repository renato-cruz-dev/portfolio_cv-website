import PropTypes from "prop-types";
import "./MainSection.css";

import Description from "../description/Description";
import CookInfo from "../cook/CookInfo";
import DevInfo from "../dev/info/DevInfo";
import DevSkills from "../dev/skills/DevSkills";
import Story from "../story/Story";
import Project from "../project/Project";
import SocialNetwork from "../socialNetwork/SocialNetwork";

const MainSection = ({ filter, data }) => {
  const getOrder = (category) => {
    if (filter === category) return "order-1";
    if (filter === "all") return "order-2";
    return "order-3";
  };

  return (
    <section id="main">
      <Description filter={filter} getOrder={getOrder} />
      <Story filter={filter} getOrder={getOrder} />
      <CookInfo data={data.cook} filter={filter} getOrder={getOrder} />
      <DevInfo data={data.dev} filter={filter} getOrder={getOrder} />
      <DevSkills data={data.dev} filter={filter} getOrder={getOrder} />
      {data.dev.portfolio.map((project, index) => {
        return (
          <Project
            key={index}
            filter={filter}
            getOrder={getOrder}
            project={project}
            index={index}
          />
        );
      })}
      {data.socialLinks.map((link, index) => {
        return (
          <SocialNetwork
            key={index}
            filter={filter}
            getOrder={getOrder}
            link={link}
          />
        );
      })}
    </section>
  );
};

MainSection.propTypes = {
  filter: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default MainSection;
