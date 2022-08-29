import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Single Kahuna',
    description:
      'One third pound burger with mustard, ketchup, pickles, mayonaise, lettuce, tomato and onion on your choice of a Brioche roll or Chabatta bread. Served with huge helping of fries and your choice of beverage.',
    price: 11.5,
  },
  {
    id: 'm2',
    name: 'Single Kahuna with Cheese',
    description:
      'One third pound burger with cheese with mustard, ketchup, pickles, mayonaise, lettuce, tomato and onion on your choice of a Brioche roll or Chabatta bread.Served with huge helping of fries and your choice of beverage.',
    price: 12,
  },
  {
    id: 'm3',
    name: 'Barbecue Kahuna',
    description:
      'One third pound burger with bacon and barbeque sauce on your choice of a Brioche roll or Chabatta bread. Served with huge helping of fries and your choice of beverage.',
    price: 12.5,
  },
  {
    id: 'm4',
    name: 'Big Kahuna',
    description:
      'Two third pound patties with double cheese with mustard, ketchup, pickles, mayonaise, lettuce, tomato and onion on your choice of a Brioche roll or Chabatta bread. Served with huge helping of fries and your choice of beverage.',
    price: 14,
  },
  {
    id: 'm5',
    name: 'Chicken Kahuna',
    description:
      'Third pound chicken breast with bacon, lettuce, tomato, mayo, pickles and mustard on a delicious Brioche roll. Served with huge helping of fries and your choice of beverage.',
    price: 14,
  },
];

const AvailableMeals = () => {
  const menuList = DUMMY_MEALS.map((meal) => (
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
