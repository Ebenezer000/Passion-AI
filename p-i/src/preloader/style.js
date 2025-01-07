import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background:#000;
`
export const ZoomTransition = styled.div`
  display: inline-block;
  animation: ${zoomIn} 1s ease-in-out forwards;
`;
const zoomIn = styled.keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;