import { observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import { generate } from "shortid";
import "./App.css";
import NodeComponent from "./mobx/NodeComponent";
import { TreeNode } from "./mobx/TreeNode";

// We are adding root element into the application and it couldn't be removed
const nodes = observable([new TreeNode()]);

const App = observer(() => {
  return (
    <div>
      {nodes.map((node: TreeNode) => <NodeComponent currentNode={node} key={generate()} />)}
      <DevTools />
    </div>
  );
});

export default App;
