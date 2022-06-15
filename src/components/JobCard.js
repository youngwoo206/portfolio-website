const JobCard = (props) => {
  return (
    <div
      className="jobCard"
      style={{ display: "flex", flex: 1, flexDirection: "column" }}
    >
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 jobCardLogo">
          <img src={props.pic} />
        </div>
        <div class="col-12 col-md-8 jobCardName" id={props.id}>
          <h2>{props.name}</h2>
          <p className="position">{props.position}</p>
          <p className="date">{props.date}</p>
          <p className="description">{props.description1}</p>
          <p className="description">{props.description2}</p>
          <p className="description">{props.description3}</p>
          <p className="description">{props.description4}</p>
          <p className="description">{props.description5}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
