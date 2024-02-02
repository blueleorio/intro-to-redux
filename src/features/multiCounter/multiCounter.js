import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { multiIncrement, multiDecrement, multiAdd } from "./multiCounterSlice";
import { Counter } from "../counter/Counter";

export function MultiCounter() {
    const count = useSelector((state) => state.multiCounter.value);
    const dispatch = useDispatch();
    return ();
}