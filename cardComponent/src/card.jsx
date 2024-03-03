import profilePic from "./assets/japan-2014619_640.jpg";

function Card() {
    return (
        <div className="card">
            {/* <img alt="profile" src="https://cdn.pixabay.com/photo/2016/11/18/12/14/owl-1834152_1280.jpg" width={150} height={150}></img> */}
            <img className="card-image" alt="profile" src={profilePic}></img>
            <h2 className="card-title">prin</h2>
            <p className="card-text">learning react</p>
        </div>
    );
}

export default Card