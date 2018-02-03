import Link from 'next/link';
import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super();
    this.handleClick = this.chatClose.bind(this);
    this.state = {
      chat: false
    };
  }

  componentWillMount() {

  }
 chatClose (){
   console.log("chat state change")
    if (this.state.chat == true) {
      this.setState({
        chat: false
      })

    }
    else {
      this.setState({
        chat: true
      })

    }

  }


  render() {
    let state=this.state.chat
    let frame
    if (state) {
      frame=<iframe className ="fixed-chat"src="https://tawk.to/chat/5a754fbf4b401e45400ca2e8/default/?$_tawk_popout=true"
        height={320} width={300} />
    }
    else{
      frame=null
    }

    return (
      <div >

        <style jsx global>{`
          .fixed-chat {
            position: fixed;
            right: 23px;
            bottom: 53px;
            padding-top: 15px;
            margin-bottom: 0;
            z-index: 997;
            backgrownd: fff;
          }
        `}</style>

        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {frame}
        <div class="fixed-action-btn horizontal" >
          
          <a class="btn-floating btn-large color-chat " onClick={this.handleClick}
          >

       
              
            <i class="material-icons icon-sms" >sms</i>
          </a>

        </div>

      </div>

    );
  }
}

export default Chat;


