import React from "react";

const TaskProps5 = () => {
  return (
    <>
      <StarRating maxStars={5} chosenStar={3} />
    </>
  );
};

const StarRating = ({ maxStars, chosenStar }) => {
  let stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i + 1 > chosenStar) {
        stars.push(<img src="https://img.icons8.com/ios/452/pixel-star.png" alt="" />);
    }
    else {
        stars.push(<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Silver_star.png" />);
    }
  }

  return (
    <div className="stars">
      {stars}
    </div>
  );
};

export default TaskProps5;
