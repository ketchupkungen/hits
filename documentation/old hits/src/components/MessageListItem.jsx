import React, {Component} from 'react';
import { Media } from 'reactstrap';

// Properties of messages sent. Ex From, date, textinput
class MessageListItem extends Component {
  render() {

    return (
      <div>
      <li>
        <Media style={{maxWidth: '400px'}}>
          <Media left>
            {/*Temporary img*/}
            <img width={64} height={64} src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
          </Media>
          <Media body>
            <Media heading>
              <b className="dashName">
                Erik Olsson
              </b>
              <i className="dashTime">
                2018-02-20
              </i>

            </Media>
            <p className='dashMess'>
              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta biltong pork belly burgdoggen hamburger drumstick beef ribs. Strip steak beef salami jerky shankle hamburger. Chicken strip steak spare ribs tenderloin, leberkas frankfurter tongue alcatra ground round chuck porchetta buffalo landjaeger jerky. Pork loin ham hock t-bone, hamburger chuck filet mignon alcatra sausage ribeye. Leberkas kevin kielbasa ham chicken tongue jerky pig tail t-bone. Shankle pork belly corned beef shank beef filet mignon.

              Tail bresaola chuck tri-tip turducken. Andouille biltong kevin ham hock jowl capicola porchetta bresaola. Buffalo ham tongue ground round ball tip meatloaf beef fatback ham hock cow tail. Meatball tongue turkey prosciutto hamburger, short ribs jerky shoulder drumstick ground round tail cupim ball tip ribeye cow. Buffalo ground round ham salami doner rump short loin andouille kielbasa swine leberkas cow picanha tri-tip. Kevin tenderloin short loin, landjaeger burgdoggen shoulder shankle ham hock pork chop meatloaf.
            </p>
          </Media>
        </Media>
        <hr/>
      </li>
      <li>
        <Media style={{maxWidth: '400px'}}>
          <Media left>
            {/*Temporary img*/}
            <img width={64} height={64} src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
          </Media>
          <Media body>
            <Media heading>
              <b className="dashName">
                Erik Olsson
              </b>
              <i className="dashTime">
                2018-02-20
              </i>

            </Media>
            <p className='dashMess'>
              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta
            </p>
          </Media>
        </Media>
        <hr/>
      </li>
      <li>
        <Media style={{maxWidth: '400px'}}>
          <Media left>
            {/*Temporary img*/}
            <img width={64} height={64} src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
          </Media>
          <Media body>
            <Media heading>
              <b className="dashName">
                Erik Olsson
              </b>
              <i className="dashTime">
                2018-02-20
              </i>

            </Media>
            <p className='dashMess'>
              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta biltong pork belly burgdoggen hamburger drumstick beef ribs. Strip steak beef salami jerky shankle hamburger. Chicken strip steak spare ribs tenderloin, leberkas frankfurter tongue alcatra ground round chuck porchetta buffalo landjaeger jerky. Pork loin ham hock t-bone, hamburger chuck filet mignon alcatra sausage ribeye. Leberkas kevin kielbasa ham chicken tongue jerky pig tail t-bone. Shankle pork belly corned beef shank beef filet mignon.
            </p>
          </Media>
        </Media>
        <hr/>
      </li>
      </div>

    );
  }
}

export default MessageListItem;
