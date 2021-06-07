import test from "ava";
import pipe from "./index.js";

test("main", (t) => {
  const pipeline = pipe([(s) => s.substr(0, 5), (s) => s.split(""), (s) => s.reverse(), (s) => s.join("")]);
  t.notThrows(()=>pipeline("hello world"));
  t.throws(()=>pipeline());
  t.throws(()=>pipe([(s) => s.substr(0, 5),12])('hello world'));
  t.deepEqual(pipeline("hello world"), "olleh");
});
