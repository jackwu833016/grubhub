import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SearchField from './SearchField';
import IngredientField from './components/IngredientField';
import RecipeCard from './components/RecipeCard';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ingredientList: ['Apple', 'Banada', 'Beef Jerky', 'Coffee', 'Lemon'],
      recipes: [
        {
          username: 'S',
          name: "Recipes A",
          description: "This impressive paella is a perfect party dish and a fun meal to cook together with you guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          imgPath: "./images/recipeA.jpg",
          instruction: "Cook This, then that. Then Done!!"
        },
        {
          username: 'B',
          name: "Recipes B",
          description: "This impressive paella is a perfect 1 cup of frozen peas along with the mussels, if you like.",
          imgPath: "./images/recipeA.jpg",
          instruction: "Cook This, then that. Then Done!!"
        },
        {
          username: 'E',
          name: "Recipes C",
          description: "This impressive paella is a perfect party dish and a fun meal to cook together with you guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          imgPath: "./images/recipeA.jpg",
          instruction: "Cook This, then that. Then Done!!"
        },
        {
          username: 'E',
          name: "Recipes D",
          description: "This a fun meal to cook together with you guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          imgPath: "./images/recipeA.jpg",
          instruction: "Cook This, then that. Then Done!!"
        }
      ]
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
    const { ingredientList, recipes } = this.state;

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

    const RecipeCols = () => {
      const isOffsetDisplay = (index, odd) => (odd ? index % 2 === 0 : index % 2 != 0 );

      return(
        <Row className="recipeRow">
          <Col className="recipeCol">
          {
            recipes.map(
              (recipe, index) => ( isOffsetDisplay(index, true) && <RecipeCard key={recipe.name} { ...recipe } />)
            )
          }
          </Col>
          <Col className="recipeCol">
          {
            recipes.map(
              (recipe, index) => ( isOffsetDisplay(index, false) && <RecipeCard key={recipe.name} { ...recipe } />)
            )
          }
          </Col>
        </Row>
      );
    };
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
            <RecipeCols />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
