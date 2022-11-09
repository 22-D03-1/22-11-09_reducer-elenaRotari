import "./Reciep.scss";
import { ACTION } from "../reducer";
export default function Reciep({ dispach, state }) {
  const handleClick = (e, index, i) => {
    dispach({
      type: ACTION.TOGGLE_STEP,
      payload: { reciepId: index, stepId: i },
    });
  };
  return (
    <>
      {state.map((el, index) => {
        return (
          <div key={el.id} className="myreciep">
            <h1 className="nameReciep">{el.name}</h1>
            <img src={el.picture} />
            <ul className="steps">
              {el.steps.map((step, i) => {
                return (
                  <li key={i} onClick={(e) => handleClick(e, index, i)}>
                    <h2>Step {i + 1}</h2>
                    <p
                      className={el.stepDone?.includes(i) ? "done" : "notDone"}
                    >
                      {step}
                    </p>
                  </li>
                );
              })}
            </ul>
            <button
              className="resetButton"
              onClick={() => dispach({ type: ACTION.RESTART })}
            >
              Reset
            </button>
          </div>
        );
      })}
    </>
  );
}
