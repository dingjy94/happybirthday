import React, {Component} from 'react';

import Image from '../components/image';
import HappyBirthday from '../components/happybirthday';
import Loading from '../components/loading';
import Introduction from '../components/introduction';
import MailBoard from '../components/mailboard';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      letterShow: false
    }
    this.loaded = this.loaded.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
  }

  componentWillMount() {
    const cur = this;
    setTimeout(function() {
      cur.loaded();
    }, 3000);
  }

  loaded() {
    this.setState({loading: false});
  }

  HandleClick(e) {
    e.preventDefault();
    this.setState({letterShow: true});
  }

  render() {
    if (!this.state.loading) {
      return (
        <div style={{ height: '100%', width: '100%', backgroundColor: '#fbd2db'}}>
          <Introduction />
          <Image />
          <HappyBirthday onClick={this.HandleClick}/>
          {this.state.letterShow && <MailBoard />}
        </div>
      );
    } else {
      return (
        <div style={{ height: '100%', width: '100%', backgroundColor: '#fbd2db'}}>
          <Loading />
        </div>
      );
    }
  }
}

export default IndexPage;
