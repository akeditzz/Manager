import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, StyleSheet, View } from 'react-native'
import { Spinner } from './common'
import { employeesFetch } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch()
    }

    renderItem(employees) {
        return <ListItem employees={employees} />
    }

    render() {
        return <View>
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(employees) => employees.uid}
            />
        </View>
    }
}

const mapsStateToProps = state => {
    const employees = _.map(state.employeeList, (val, uid) => {
        return { ...val, uid }
    })

    return { employees }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#000',
        fontSize: 16,
        paddingLeft: 8,
        color: '#000'
    }
})

export default connect(mapsStateToProps, { employeesFetch })(EmployeeList)