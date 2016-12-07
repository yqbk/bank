import React, { Component } from 'react'

import HostForm from './forms/HostForm'

import DetectedHosts from './scann/DetectedHosts';

import ProgressBar from './forms/progressBar'

class FirstTab extends Component {

    constructor () {
        super()

        this.addHostToTable = this.addHostToTable.bind(this)
        this.setScannAmount = this.setScannAmount.bind(this)

        this.state = {
            hostTable: [],
            scannAmount: 0
        }


    }

    addHostToTable (host) {
        // this.hostTable.push("llala")

        const tablica  = this.state.hostTable

        this.setState({
            hostTable: [...tablica, host]
        })

    }

    // todo zgodnie z konswencją?
    setScannAmount (amount) {

        this.setState({
            scannAmount: amount,
            hostTable: []
        })
    }


    render () {

        return (
            <div>
                <HostForm addHostToTable = {this.addHostToTable} setScannAmount = {this.setScannAmount}/>
                <ProgressBar scannAmount = {this.state.scannAmount} hostTableLenght = {this.state.hostTable.length}/>
                <hr/>
                <DetectedHosts hostTable = {this.state.hostTable} />
            </div>
        )
    }

}

export default FirstTab