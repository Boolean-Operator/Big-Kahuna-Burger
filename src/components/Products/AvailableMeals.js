import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const FIREBASE_DOMAIN = process.env.REACT_APP_API_URL;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${FIREBASE_DOMAIN}/meals.json`);
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        const mealObj = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };
        loadedMeals.push(mealObj);
      }

      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const menuList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <h1>Big Kahuna Meals</h1>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
