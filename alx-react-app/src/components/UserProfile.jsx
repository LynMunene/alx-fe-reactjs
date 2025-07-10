function UserProfile ({ name, age, bio }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{bio}</p>
        </div>
    );
}

export default UserProfile;
