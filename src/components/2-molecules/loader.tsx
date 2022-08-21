import styled from 'styled-components';

const LoaderStyled = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  padding: 80px 0 40px 0;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #46555e;
    border-color: #46555e transparent #46555e transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => <LoaderStyled />;

export default Loader;
