import styled from "@emotion/styled";

const AppGridContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 64px 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "sidebar header"
    "sidebar content";
    background-color: #f4f4f4;
`;

export default AppGridContainer;
