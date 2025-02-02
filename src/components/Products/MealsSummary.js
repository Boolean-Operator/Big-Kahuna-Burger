import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Burgers, Made to Order, Delivered To You</h2>
      <p>
        Choose your favorite burgers and sandwiches from our broad selection and
        enjoy a delicious lunch or dinner at home or here with a beer and your
        friends.
      </p>
      <p>
        All our burgers are cooked to order with high-quality ingredients, just
        the way you like them by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
