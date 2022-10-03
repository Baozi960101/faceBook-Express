import styled from "styled-components";


const Box = styled.div`
  padding-top:10px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  width:680px;
  height:1900px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  scrollbar-color: blue orange;
  margin:0 20px;
`;

export default function HomePages() {
  return (
    <>
        <Box>HomePages</Box>
    
      
    </>
  );
}
