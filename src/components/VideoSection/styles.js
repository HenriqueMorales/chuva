import styled from "styled-components";

const StyledVideoSection = styled.section`
  display: flex;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1120px) {
    flex-wrap: wrap;
  }
`;

export default StyledVideoSection;
