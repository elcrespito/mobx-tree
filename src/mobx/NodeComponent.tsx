import { action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";
import { NodeInput } from "./NodeInput";
import { TreeNode } from "./TreeNode";

interface IProps {
  currentNode: TreeNode;
  parentNode?: TreeNode;
  className?: string;
}

const NodeComponent = observer((props: IProps) => {
  const items: JSX.Element[] = [];

  const handleRemove = action((node: TreeNode) => {
    if (props.parentNode) {
      props.parentNode.childNodes.remove(node);
    }
  });

  props.currentNode.childNodes.forEach((t: TreeNode) => {
    items.push(
      <NodeComponent
        parentNode={props.currentNode}
        currentNode={t}
      />);
  });

  return (
    <div className={props.className}>
        <NodeInput currentNode={props.currentNode} onRemove={props.parentNode ? handleRemove : undefined}>
          {items}
        </NodeInput>
    </div>
  );
});

export default styled(NodeComponent)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ul {
      list-style-type: none;
    }
`;