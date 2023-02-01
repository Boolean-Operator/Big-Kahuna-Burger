import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const FIREBASE_DOMAIN = process.env.REACT_APP_API_URL;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${FIREBASE_DOMAIN}/meals.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('There was a problem loading the data, Michael.');
      }

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
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <h4 className={classes.mealsLoading}>... Loading</h4>;
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <h4>{httpError}</h4>
      </section>
    );
  }

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
