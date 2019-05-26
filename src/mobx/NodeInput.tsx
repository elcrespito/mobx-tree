import { action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";
import { TreeNode } from "./TreeNode";

interface IProps {
    [x: string]: React.ReactNode;
    currentNode: TreeNode;
    onRemove?: (node: TreeNode) => void;
    className?: string;
}

// I like to use styled-components,
// pretty much you could see all the needed styles 
// in the single place
// At the same time it was helpfull for performance,
// because it's possible to use props there
 
const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainContainer = styled.div`
    border: solid 1px black;
    padding: 10px;
`;

export const NodeInput = observer((props: IProps) => {
    const onAdd = action(() => {
        props.currentNode.childNodes.push(
            new TreeNode(),
        );
    });

    const onRemove = action(() => {
        if (props.onRemove) {
            props.onRemove(props.currentNode);
        }
    });

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.currentNode.setName(event.target.value);
    };

    const onGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.currentNode.setGender(event.target.value);
    };

    const onAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.currentNode.setAge(event.target.value);
    };

    // We could devide it and changes would be even more specific
    return (
        <MainContainer>
            <div>
                Name
                <input value={props.currentNode.name} onChange={onNameChange} />
            </div>
            <div>
                Gender
                <input value={props.currentNode.gender} onChange={onGenderChange} />
            </div>
            <div>
                Age
                <input value={props.currentNode.age} onChange={onAgeChange} />
            </div>
            <div>
                <button onClick={onAdd}>Add</button>
                {props.onRemove &&
                    <button onClick={onRemove}>Remove</button>
                }
            </div>
            <DivContainer>
                {props.children}
            </DivContainer>
        </MainContainer>);
});