import Head from "next/head";
import styled from "styled-components";

const Header = styled.h2`
  background: blue;
  text-align: center;
  width: 100%;
  color: white;
`;

export default function Home() {
  return (
    <Header>
      <h2>Hola mundo</h2>
    </Header>
  );
}
