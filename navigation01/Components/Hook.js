/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button, FlatList} from 'react-native';

// 컴포넌트 구현에 클래스를 이용하기
// class NoHook extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'John doe',
//         }
//     }

//     changeName = () => {
//         this.setState({name: '홍길동'})
//     }

//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Text>Hello, Mr.{this.state.name}!</Text>
//                 <Button title='이름 변경' onPress={this.changeName}></Button>
//             </View>
//         );
//     }
// }

// 컴포넌트 구현에 훅을 이용하기
//const Hook: () => React$Node = () => {
const Hook = () => {
    const [name, setName] = useState('John Doe');
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            setUsers(users);
            setLoading(false);
        })
        // 정리가 필요하면 여기서 cleanup 함수를 리턴 ex)
        // return () => {
        //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        // };
    })
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hi, Mr.{name}!</Text>
            <Button title='이름 변경' onPress={() => setName('홍길동')}></Button>
            <FlatList
                data={users}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Hook;
