import data from "./reciep.json";
export const INITIAL = data;

export const ACTION = {
  TOGGLE_STEP: "stepDone",
  RESTART: "restart",
};
export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ACTION.TOGGLE_STEP:
      return state.map((el) => {
        console.log(el);
        if (el.id - 1 === action.payload.reciepId) {
          console.log(el.id);
          return {
            ...el,
            stepDone: el.stepDone
              ? [...el.stepDone, action.payload.stepId]
              : [action.payload.stepId],
          };
        }
      });
    case ACTION.RESTART:
      console.log(state);
      return state.map((el) => {
        console.log(el);
        return {
          ...el,
          stepDone: [],
        };
      });
  }
  return state;
}
