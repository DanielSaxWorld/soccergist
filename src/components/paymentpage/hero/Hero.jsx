import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const GlobalStayle = createGlobalStyle`

`;
  const sharedstyles = css``;

  const StyledFormWrapper = styled.form``;

  const StyledForm = styled.form``;
  const StyledInput = styled.input``;

  const StyledTextArea = styled.textarea``;

  const StyledButton = styled.button``;

  const StyledFieldset = styled.fieldset``;

  const StyledError = styled.div``;
  return (
    <div>
      <div className="payment-white-board">
        <div className="top-txt">
          <h2>Select Payment Method</h2>
        </div>
        <div className="middle-txt">
          <p className="first-txt">Credit card</p>
          <p className="second-txt">Online wallet</p>
          <p className="third-txt">Others</p>
        </div>
        <div className="text-with-logo">
          <p className="pay-with-card">Pay Using Credit Card</p>
          <div className="card-logo">
            <img src="./master.svg" alt="" />
            <img src="Visa.svg" alt="" />
            <img src="verve.svg" alt="" />
          </div>
        </div>
      </div>

      <img className="pay-line" src="./payline.svg" />
      <h2 className="deliv">Delivery Info</h2>

      <>
        <GlobalStayle />
        <StyledFormWrapper>
          <StyledForm>
            <label className="label-text-1" htmlFor="Credit Card no">
              Credit Card no
            </label>
            <StyledInput
              className="credit-input-1"
              type="text"
              name="Credit Card no"
            />
            <label className="label-text-2" htmlFor="Name">
              Name
            </label>
            <StyledInput className="credit-input-2" type="text" name="Name" />
            <label className="label-text-3" htmlFor="Your Delivery Location">
              Your Delivery Location
            </label>
            <StyledInput
              className="credit-input-3"
              type="text"
              name="Your Delivery Location"
            />
            <label className="label-text-4" htmlFor="Your Phone Number">
              Your Phone Number
            </label>
            <StyledInput
              className="credit-input-4"
              type="text"
              name="Your Phone Number"
            />
            <div>
              <StyledButton
                onClick={() => setIsVisible(!isVisible)}
                className="pay-btn"
                type="submit"
              >
                Make Payment
              </StyledButton>{" "}
              {isVisible && (
                <div className="popup-container">
                  <div className="popup-content-pay">
                    <div className="otp-house">
                      <h2 className="otp-house-text">Enter Your Otp</h2>
                    </div>
                    <div className="otp-text-house">
                      <p className="otp-txt">
                        An OTP has been sent to your phone The code expires in 1
                        minute.
                      </p>
                    </div>
                    <div className="resend-text-house">
                      <p className="resend-txt-1">Resend via sms</p>
                      <p className="resend-txt-2">Resend via call</p>
                    </div>
                    <StyledInput
                      className="otp-input"
                      type="text"
                      name="otp space box"
                    />
                    <Link to="/thankyou">
                      <button className="otp-btn">Verify</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </StyledForm>
        </StyledFormWrapper>
      </>
    </div>
  );
};

export default Hero;
