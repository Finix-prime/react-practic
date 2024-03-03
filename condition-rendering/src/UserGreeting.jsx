import proptypes from "prop-types";
function UserGreeting(props) {

    const welcomeMsg = < h2 className="welcome-message"> Wellcome {props.userName}</h2 >
    const loginPropmt = <h2 className="login-message">Please log in to continue</h2>

    return (props.isLoggedIn ? welcomeMsg : loginPropmt);
}

UserGreeting.prototype = {
    isLoggedIn: proptypes.bool,
    userName: proptypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "guest"
}
export default UserGreeting