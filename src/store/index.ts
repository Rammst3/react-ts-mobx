import {
    observable,
    action,
    computed
} from 'mobx'
import moment from 'moment'
import { IMobxStore } from '../models/IMobxStores'

class AppStore implements IMobxStore {
    @observable time:string = ''
    @observable checkable:any[] = []
    @observable todos: string[] = []
    @computed get desc() {
        return `${this.time} 还有 ${this.todos.length} 条任务待完成`
    }
    @action addTodo(todo:string) {
        this.todos.push(todo)
        console.log(this.todos)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
    @action getChecked(value: any[]) {
        this.checkable = value
    }
}

const MobxStore = new AppStore()

setInterval(() => {
    MobxStore.getNow()
}, 1000)

export default MobxStore