
function ProfilePicture(params) {
    const imgUrl = "./src/assets/japan-2014619_640.jpg";

    const handleClick = (e) => {
        e.target.style.display = "none"
    };
    return (
        <img src={imgUrl} onClick={(e) => handleClick(e)}></img>
    );
}

export default ProfilePicture