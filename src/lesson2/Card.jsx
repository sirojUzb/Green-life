const Card = (props) => {
  return (
    <div className="flower_card">
      <div className="flower_wrapper">
        <img className="flower_image" src={props.img} alt="Flower name" />
      </div>
      <div className="detail_wrapper">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
