import React from 'react';
import styled from 'styled-components';

// Our single Styled Component definition
const AppContainer = styled.div`
  #midsection {
    margin: 40px 0;
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #overview-wrapper {
    margin: 0 40px 0 0;
  }
`;

const App = (props) => 
<AppContainer>
  <div>
    {/* {props.components.gallery} */}
    <div id="midsection">
      {/* {props.components.overview} */}
      {props.components.sidebar}
    </div>
    {/* {props.components.nearby} */}
  </div>
</AppContainer>;

export default App;