import { useReducer } from "react";
const initialstate = 0;
const reduce = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const App = () => {
  const [state, dispach] = useReducer(reduce, initialstate);

  const Result = () => {
    if (state <= 1) {
      alert("lot of limitem ---");
    } else {
      const names = () => dispach({ type: "DECREMENT" });
      names();
    }
  };

  return (
    <>
      <div>
        <p>{state}</p>
        <div className="container">
          <button onClick={() => dispach({ type: "INCREMENT" })}>INC</button>
          <button onClick={Result}>DEC</button>
        </div>
      </div>
    </>
  );
};
export default App;

git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/syedtechnicl/reduce.git
git push -u origin main