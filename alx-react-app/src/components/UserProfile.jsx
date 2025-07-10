const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.Name}</h2>
        <p>Age: {props.Age}</p>
        <p>Bio: {props.Bio}</p>
      </div>
    );
  };

  export default UserProfile