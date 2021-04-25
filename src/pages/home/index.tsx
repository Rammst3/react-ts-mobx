import * as React from 'react'
import {
    inject,
    observer
} from 'mobx-react'
import { Button , Checkbox} from 'antd'
import {IMobxStore} from '../../models/IMobxStores'
import 'antd/dist/antd.css'
import './style.css'

interface Props{
    store?: IMobxStore
}

interface State{

}

@inject ('store') @observer
// const Detail: React.FC<{}> = inject('detailStore')(observer((props: IProps) => (
export default class Home extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount() {
        console.log(this.props)
    }

    handleTodos(type:string) {
        let { store } = this.props
        switch (type) {
            case 'add':
                store?.addTodo('一条新任务')
                break;
            case 'delete':
                store?.deleteTodo()
                break;
            case 'reset':
                store?.resetTodo()
                break;
            default:
        }
    }

    getChecked(value: any[]) {
        let {store} = this.props
        store?.getChecked(value)
    }

    render() {
        let { store } = this.props

        const options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        
        return(
            <div className='home'>
                <h1>在React中使用mobx</h1>
                <div>{store?.desc}</div>
                <Button type='primary' onClick={this.handleTodos.bind(this,'add')}>添加一条任务</Button>
                <Button type='link' onClick={this.handleTodos.bind(this,'delete')}>删除一条任务</Button>
                <Button type='text' onClick={this.handleTodos.bind(this,'reset')}>任务重置</Button>
                <Checkbox.Group options={options} defaultValue={['']} onChange={e=>this.getChecked(e)} />
                {
                    store?.todos.map((ele:string,index:number,arr:any[]) => {
                        return(
                            <div key={index}>{ele}</div>
                        )
                    })
                }
            </div>
        )
    }
}
