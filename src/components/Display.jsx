import React from "react";
import Input from "./Input";
import Button from "./Button";

const Display = (props) => {
  let {
    state,
    setState,
    displayState,
    setDisplayState,
    pairState,
    setPairState,
  } = props;
  return (
    <>
      <div>
        <Input state={state} setState={setState} />
        <Button
          state={state}
          setDisplayState={setDisplayState}
          pairState={pairState}
          setPairState={setPairState}
        />
      </div>

      {displayState ? (
        <div>
          <p className="display">〜〜〜 Pairs 〜〜〜</p>
          <div className="each-pair">
            {pairState.map((elem, i) => {
              return <p key={i.toString()}>{elem}</p>;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Display;