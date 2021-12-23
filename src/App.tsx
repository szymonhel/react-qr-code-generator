import React from 'react';
import './App.css';
import {SearchBar} from './componets/SearchBar';

var QRCode = require('qrcode.react');


type Props = {};
type State = {
    qrCodeValue: string;
};

export class App extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {qrCodeValue: ''};
    }

    render() {
        return (
            <>
                <SearchBar onSubmit={(val) => this.setState({qrCodeValue: val})}/>
                <QRCode value={this.state.qrCodeValue}/>
            </>
        );
    };
};

export default App;
