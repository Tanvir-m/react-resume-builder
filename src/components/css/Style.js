import styled from 'styled-components';

export const Out = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid orangered;
  border-radius: 25px;
`;

export const ProgBar = styled.div`
  width: ${(props) => props.per}%;
  height: 20px;
  background-color: orangered;
  border-radius: 25px;
`;

export const Button = styled.button`
  width: ${(props) => (props.sub ? '250px' : '150px')};
  height: ${(props) => (props.sub ? '50px' : '40px')};
  background-color: ${(props) => (props.sub ? 'orangered' : 'transparent')};
  color: ${(props) => (props.sub ? 'white' : 'orangered')};
  border: ${(props) => (props.sub ? 'none' : '1px solid orangered')};
  margin-left: ${(props) => (props.sub ? '5%' : '15%')};
  font-size: ${(props) => (props.sub ? '25px' : '17px')};

  &:hover {
    background-color: ${(props) => (props.sub ? 'transparent' : 'orangered')};
    color: ${(props) => (props.sub ? 'orangered' : 'white')};
    border: ${(props) => (props.sub ? '1px solid orangered' : 'none')};
  }
`;
