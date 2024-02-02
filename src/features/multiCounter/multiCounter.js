import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { multiIncrement, multiDecrement, multiAdd } from "./multiCounterSlice";

export function MultiCounter() {
  const counters = useSelector((state) => state.multiCounter);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <button aria-label="Add value" onClick={() => dispatch(multiAdd())}>
            Add Counter
          </button>
          {counters.map((counter, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <button
                onClick={() => {
                  dispatch(multiIncrement(index));
                }}
              >
                +
              </button>
              <span>{counter.count}</span>
              <button
                onClick={() => {
                  dispatch(multiDecrement(index));
                }}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
