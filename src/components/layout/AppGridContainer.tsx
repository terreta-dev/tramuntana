import styled from "@emotion/styled";

const AppGridContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    background-color: ${(props) => props.theme.color.primaryBackground};
    color: ${(props) => props.theme.color.primaryText};
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 64px 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "sidebar header"
    "sidebar content";
`;

export default AppGridContainer;
