import { action, IObservableArray, observable } from "mobx"

// Decided to use mobx, because we shouldn't think a lot about updates of components
export class TreeNode {
    // Pretty much primitive example of the tree node
    @observable public childNodes: IObservableArray<TreeNode> = observable([]);

    @observable public name = "";
    @observable public age = "";
    @observable public gender = "";

    @action public setName(name: string) {
        this.name = name;
    }

    @action public setAge(age: string) {
        this.age = age;
    }

    @action public setGender(gender: string) {
        this.gender = gender;
    }
}
