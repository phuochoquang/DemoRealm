import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Alert, Text, TextInput } from 'react-native';

import { queryAllBalance, insertNewBalance, updateBalance, deleteBalancex } from "../databases/allSchemas";
import realm from "../databases/allSchemas";

class BalanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.reloadData();
    }
    reloadData () {
        queryAllBalance().then((list) => {
            this.setState({ list })
        }).catch((error) => {
            this.setState({ list: [] })
        })
    }
    render() {
        console.log('demo', this.state);
        return (
            <Text>DEMO</Text>
        );
    }
}

export default BalanceComponent;