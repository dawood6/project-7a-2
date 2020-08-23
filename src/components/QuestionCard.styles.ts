import styled from 'styled-components';

export const Wrapper = styled.div`
:hover {
  transform: scale(1.2)
}
  width: 500px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: transform .5s ease;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.1)
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    color: red;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
    correct
      // correct answer
      ? 'rgb(141,236,101)'
      : !correct && userClicked
        // wrong answer
        ? 'rgb(251,88,175) '
        // options color 
        : 'rgb(2,242,255)'};
    color: white;
    border: none;
    border-radius: 6px;
  }
`;