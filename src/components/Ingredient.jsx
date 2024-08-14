const Ingredient = ({ ingredient, action, actionType }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => action(actionType === 'add' ? ingredient : undefined)}>
        {actionType === 'add' ? '+' : 'X'}
      </button>
    </li>
  );
};

export default Ingredient;