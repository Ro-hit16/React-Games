
//Choice Component
import PropTypes from "prop-types";

const Choice = ({ id, imgSrc, handleClick }) => {
  return (
    <div className="choice" onClick={() => handleClick(id)}>
      <img src={imgSrc} alt={id} />
      <p>{id}</p>
    </div>
  );
};

Choice.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Choice;
