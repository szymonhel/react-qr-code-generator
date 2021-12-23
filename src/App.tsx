import React from 'react';
import './App.css';
import { SearchBar } from './componets/SearchBar';

const QRCode = require('qrcode.react');

type Props = {};
type State = {
  qrCodeValue: string;
};

export class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { qrCodeValue: '' };
  }

  render() {
    return (
      <>
        <div className={'w-[100vw] h-full flex  align-middle flex-col'}>
          <div>
            <h1 className="text-[3.23rem] font-medium text-center py-5">React QR Code</h1>
            <SearchBar
              generatedValue={this.state.qrCodeValue}
              onSubmit={(val) => this.setState({ qrCodeValue: val })}
            />
          </div>
          {this.state.qrCodeValue && (
            <div className="self-center">
              <QRCode size={256} value={this.state.qrCodeValue} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
