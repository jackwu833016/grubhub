import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SearchField from './SearchField';
import IngredientField from './components/IngredientField';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ingredientList: ['Apple', 'Banada', 'Beef Jerky', 'Coffee', 'Lemon']
    };
  }

  shouldComponentUpdate(){
    return true;
  }

  ingredientExist(searchTarget){
    const targetIndex = this.state.ingredientList.indexOf(searchTarget);    
    return targetIndex !== -1;
  }

  render() {
    const { ingredientList } = this.state;

    const searchOnEnter = (newIngredient) => {

      if(this.ingredientExist(newIngredient)) return;

      this.setState({
        ingredientList: [...this.state.ingredientList, newIngredient]
      });
    }

    const onDelete = (deleteingItem) => {
      this.setState(state => {
        const ingredientList = [...state.ingredientList];
        const ingredientToDelete = ingredientList.indexOf(deleteingItem);
        ingredientList.splice(ingredientToDelete, 1);
        return { ingredientList };
      });
    }

    return (
      <Container className="root-container">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <SearchField
              onEnter={searchOnEnter}
            />
            <IngredientField 
              chipContentArray={ingredientList}
              handleDelete={onDelete}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
