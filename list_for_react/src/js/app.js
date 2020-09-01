import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './app.css';
import ListItem from "./ListItem.js"

const API_BASE_URL = 'https://z5xuipvtuk.execute-api.ap-northeast-1.amazonaws.com/Prod/getlist';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // test_id: ``
            list: []
        }
    }
    componentWillMount() {
        // コンポーネントがマウントされる前にデータを取得する
        this.getDataFromApi();
    }
    async getDataFromApi() {
        // APIをコール
        await axios.get(API_BASE_URL)
            .then((response) => {
                // log 
                console.log(JSON.parse(response.data.body.body).result);

                // APIから取得したデータをstateに保存
                this.setState({
                    list: JSON.parse(response.data.body.body).result
                });
                console.log(this.state.list);
            })
    }
    render() {
        return (
            <div className="App">
                {/* {this.state.test_id} */}
                {/* list 配列の要素数分 ListItem コンポーネントを展開 */}
                {this.state.list.map(list => (
                    <ListItem
                    test_id={list.test_id}
                    name={list.name}
                    />
                ))}
            </div>
        );
    }
}

// index.htmlの.containerに描画する
ReactDOM.render(<App />, document.querySelector('.container'));