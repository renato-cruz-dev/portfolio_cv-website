import PropTypes from "prop-types";

import "./Story.css";

const Story = ({ filter, getOrder }) => {
  return (
    <div
      id="story"
      className={`card text-card ${getOrder("about")} ${
        filter !== "about" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <div id="story-info">
        <h1 className="title__bold">From Kitchens to Code</h1>
        <div id="story-text">
          <p className="text__regular">
            As children, we{"'"}re often asked, “What do you want to be when you
            grow up?” The truth is, when the time came for me to choose a path,
            I wanted to be many things—an architect, a chef, and more.
          </p>
          <p className="text__regular">
            I chose the culinary world. I studied and worked in the industry,
            allowing me to explore different types of gastronomy. I can
            confidently say that I love cooking, but I eventually realized it
            wasn{"'"}t the path to long-term stability.
          </p>
          <p className="text__regular">
            During the pandemic, I developed a curiosity for programming. I
            started researching and studying, considering the possibility of
            making a career shift. That{"'"}s when I decided to dive into
            Full-Stack Development, marking the beginning of a new journey.
            Since then, it has been a continuous process of learning and growth,
            and I now find myself ready to take the first step in this new
            professional adventure.
          </p>
          <p className="text__regular">
            All these experiences led me to finally answer a question I had
            struggled with for years: “What is your passion?” I realized that my
            passion isn{"'"}t confined to a specific field—I am passionate about
            creating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;

Story.propTypes = {
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
};
