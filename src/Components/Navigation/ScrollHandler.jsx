import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "smooth",
        top: element ? element.offsetTop : 0
      });
    }, 100);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler);