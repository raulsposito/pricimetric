import './App.css';
import PieChartDemo from './components/PieChartDemo'
import Card from './components/Card'
import Footer from './components/Footer'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin-bottom: 3rem;
  padding: 2em;
  border-radius: 15px;
  background: white;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 25vw; */
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: '#003E49', 'margin-bottom': '6rem'}}>Pricing Maturity Chart</h1>
        <Wrapper>
          <PieChartDemo />
          <Row>
            <Column>
              <Card percentage="23" time="2 years or more" color="#2791A2" />
              <Card percentage="23" time="1 year" color="#003E49" />
              <Card percentage="35" time="120 days" color="#F9AA82" />
            </Column>
            <Column>
              <Card percentage="17" time="60 days" color="#E57C00" />
              <Card percentage="2" time="30 days" color="#CD5A21" />
            </Column>
          </Row>
        </Wrapper>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
