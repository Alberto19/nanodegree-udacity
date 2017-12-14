const ADD_RECIPE = 'ADD_RECIPE';
const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

const addRecipe = ({ day, recipe, meal }) => ({ type: ADD_RECIPE, recipe, day, meal })
const removeFromCalenda = ({ day, meal }) => ({ type: REMOVE_FROM_CALENDAR, day, meal })

export {
    ADD_RECIPE,
    addRecipe,
    REMOVE_FROM_CALENDAR,
    removeFromCalenda
}