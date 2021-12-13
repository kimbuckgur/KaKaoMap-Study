import styled from "styled-components";

export const displayFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const MapBoxPage = styled.div`
  width: 100%;
  height: 100vh;
`;

export const mapBox = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const SearchBar = styled.input`
  z-index: 2;
  position: relative;
  width: 480px;
  height: 45px;
  border-radius: 100px;
  border: none;
  outline: none;
  padding-left: 20px;
  margin-top: 30px;
  background-color: white;
  box-shadow: 0px 4.5px 9px rgba(0, 0, 0, 0.15);
`;

export const AddressButton = styled.button`
  cursor: pointer;

  font-size:14px;
  font-weight:bold;
  color: darkblue;

  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100px;
  height: 45px;
  margin-left: 20px;
  background-color: white;
  border: darkblue solid 2px;
  border-radius: 100px;
  
  transition:all 1s;

  &:hover{
    background-color: darkblue;
    color:white;
    border:none;
  }
`;
