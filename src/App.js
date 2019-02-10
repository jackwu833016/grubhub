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
          username: 'B',
          name: "Roasted Brussels Sprouts",
          description: "Turn your failure cabbages into a rock star-esque dish",
          imgPath: "./images/recipeA.jpg", 
          instruction: "1)Preheat oven to 400 degrees F <br> 2)Cut off the brown ends of the Brussels sprouts and pull off any yellow outer leaves. Mix them in a bowl with the olive oil, salt and pepper. Pour them on a sheet pan and roast for 35 to 40 minutes, until crisp on the outside and tender on the inside. Shake the pan from time to time to brown the sprouts evenly. Sprinkle with more kosher salt ( I like these salty like French fries), and serve immediately. ",
          ingredientTags: ["Brussels Sprouts"],
          ingredientList: ["1 1/2 pounds Brussels sprouts", "3 tablespoons good olive oil", "3/4 teaspoon kosher salt", "1/2 teaspoon freshly ground black pepper"],
        },
        {
          username: 'Z',
          name: "Zucchini Parmesan Crisps",
          description: "Make alot out of a little, show off your skills by making something out of nothing",
          imgPath: "./images/recipeC.jpg",
          instruction: "1) Preheat the oven to 450 degrees F. Coat a baking sheet with cooking spray <br> 2) Slice the zucchini into 1/4-inch thick rounds. In a medium bowl, toss the zucchini with the oil. In a small bowl, combine the Parmesan, bread crumbs, salt, and a few turns of pepper. Dip each round into the Parmesan mixture, coating it evenly on both sides, pressing the coating on to stick, and place in a single layer on the prepared baking sheet. <br> 3) Bake the zucchini rounds until browned and crisp, 25 to 30 minutes. Remove with spatula. Serve immediately",
          ingredientTags: ["zucchini", "Parmesan cheese", "Bread Crumbs"],
          ingredientList: ["2 medium zucchini (about 1 pound total)", "1 tablespoon olive oil", " 1/4 cup freshly grated Parmesan (3/4-ounce)", "1/4 cup plain dry bread crumbs", "1/8 teaspoon salt", "Freshly ground black pepper"]
        },
        {
          username: 'B',
          name: "Recipes B",
          description: "This impressive paella is a perfect 1 cup of frozen peas along with the mussels, if you like.",
          imgPath: "./images/recipeC.png",
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
          username: 'P',
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
      const isOffsetDisplay = (index, odd) => (odd ? index % 2 === 0 : index % 2 !== 0 );

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
