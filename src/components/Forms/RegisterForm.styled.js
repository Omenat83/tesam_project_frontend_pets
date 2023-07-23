import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  border-radius: 20px;
  background-color: #ffffff;

  box-shadow: 3px 8px 14px 0px var(--small-shadow);

  padding: 40px 12px;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 80px;
    padding: 60px 75px;
    border-radius: 40px;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const FormHeader = styled.h2`
  font-family: Manrope, sans-serif;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  line-height: normal;
  font-style: normal;

  color: var(--main-accent-text-clr);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const FormInput = styled(Field)`
  /* display: flex; */
  padding: 12px 16px;
  width: 256px;
  font-size: 16px;
  align-items: center;
  border: 1px solid var(--main-clr-blue);
  border-radius: 40px;
  line-height: 1.4;
  font-style: normal;
  @media screen and (min-width: 768px) {
    width: 458px;
  }
  &::placeholder {
    font-family: Manrope, sans-serif;
    font-weight: 400;
    letter-spacing: 0.64px;
    color: #888888;
  }
`;

export const FormButton = styled.button`
  font-family: Manrope, sans-serif;
  width: 100%;
  font-weight: 600;
  line-height: normal;
  font-style: normal;
  letter-spacing: 0.8px;
  font-size: 20px;
  color: #ffffff;
  background-color: var(--main-clr-blue);
  border: transparent;
  margin-top: 40px;
  margin-bottom: 8px;
  padding: 10px 28px;
  border-radius: 40px;

  :hover,
  :focus {
    background: var(--main-clr-gr_blue);
  }

  @media screen and (min-width: 768px) {
    margin-top: 52px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
  }
`;
export const FormText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.48px;
  color: #888888;
`;

export const FormLink = styled(Link)`
  display: inline-block;
  margin-left: 2px;

  color: var(--main-clr-blue);
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 16px;
  top: 50px;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: var(--form-error-red);
`;