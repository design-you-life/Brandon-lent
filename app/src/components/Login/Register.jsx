import React from "react";
import styles from "styled-components";
import Logo from "../../styles/nav-logo.png";
import TextField from "@material-ui/core/TextField";

const Register = props => {
  console.log(props);
  return (
    <LoginPageStyles>
      <LoginMenuStyles
        autoComplete="false"
        onSubmit={e => props.registerUser(e)}
      >
        <LogoImage src={Logo} />
        <TextField
          fullWidth
          label="Full Name"
          placeholder="Full Name"
          onChange={props.handleChange}
          name="fullname"
          type="text"
          value={props.currentName}
          required
          minLength="2"
        />
        <TextField
          fullWidth
          label="Email"
          placeholder="Email"
          onChange={props.handleChange}
          name="email"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <TextField
          fullWidth
          label="Username"
          placeholder="Username"
          onChange={props.handleChange}
          name="username"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <TextField
          fullWidth
          label="Password"
          placeholder="Password"
          onChange={props.handleChange}
          name="password"
          value={props.currentPassword}
          required
          minLength="6"
          type="password"
        />
        <LoginButton>Create Account</LoginButton>
        <LoginPageText>
          By signing up, you agree to our Terms, Data Policy. We take your
          privacy seriously.
        </LoginPageText>
      </LoginMenuStyles>
      <SwitchMenuStyles>
        <GoBackContainer onClick={props.switchView}>
          <GobackIcon className="fas fa-arrow-left" />
          <CreateAccount>Go Back</CreateAccount>
        </GoBackContainer>
      </SwitchMenuStyles>
    </LoginPageStyles>
  );
};

export default Register;

const LoginPageStyles = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #FAFAFA;
 `;

const LoginMenuStyles = styles.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 10px 0;
  padding: 0 40px;
  
`;

// const LoginInputStyles = styles.input`
//   border: 1px solid #EFEFEF;
//   border-radius: 3px;
//   margin-bottom: 7px;
//   padding: 10px 0 10px 7px;
//   width: 270px;
//   background: #FAFAFA;

//   &:focus {
//     outline: none;
//   }
// `;

const LoginButton = styles.button`
  width: 272px;
  border: 1px solid #4e6d79;
  border-radius: 4px;
  padding: 10px;
  margin-top: 30px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background: #4F86EC;

  &:hover {
    cursor: pointer;
  }
`;

const LoginPageText = styles.h2`
  font-size: 12px;
  font-weight: 700;
  color: #9A9A9A;
  margin: 15px 0;
  padding: 0 30px;
  text-align: center;
  line-height: 1.5;
`;

const SwitchMenuStyles = styles.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 20px 0;
  margin-top: 15px;
`;
const SignUpText = styles.h2`
  font-size: 28px;
  margin-top: 25px;
`;

const LogoImage = styles.img`
  width: 200px;
`;

const GoBackContainer = styles.div`
  cursor: pointer;
  width: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const CreateAccount = styles.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  margin-left: 5px;
`;
const GobackIcon = styles.i`
  font-size: 24px
`;