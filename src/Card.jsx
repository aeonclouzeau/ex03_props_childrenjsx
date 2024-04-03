import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children }) => {
	return (
		<div className="card">
			<div className="card-content">{children}</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.any,
};

export default Card;
