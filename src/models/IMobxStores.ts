export interface IMobxStore {
    time: string;
    checkable: string[];
    todos: string[];
    desc: string;
    addTodo(todo:string):void;
    deleteTodo(): void;
    resetTodo(): void;
    getNow(): void;
    getChecked(value: any[]): void;
}