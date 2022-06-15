const Certs = (props) => {
  return (
    <div className="certCard">
      <div className="certImg">
        <img src={props.thumb} alt='this is a pic' />
      </div>
      <div className="certInfo">
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Certs;
