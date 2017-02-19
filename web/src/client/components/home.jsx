import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import ScrollIntoView from './../containers/scroll-into-view';
import SignModal from './auth/sign-modal';

class Home extends Component {
  componentDidMount() {
    // this.props.setPageName('');
  }

  render() {
    return (
      <div className="main-flex-container">
        <ScrollIntoView
          id=""
          alignToTop
          headerHeight={60}
        />
        <div className="main-sidebar" />
        <div className="main">
          <h1>Welcome</h1>
          <SignModal />
          <p>Justice is about harmony. Revenge is about you making yourself feel better.

  I seek the means to fight injustice. To turn fear against those who prey on the fearful.

  It's ends here.

  Never underestimate Gotham City. People get mugged coming home from work every day of the week. Sometimes things just go bad.

  That's a lovely lovely voice!

  Are you so desperate to fight criminals that you lock yourself in to take them on one at a time ?

  Ah yes! I was wondering what would weight first. Your spirit... or your body?

  Your Punishment Must Be More Severe.

  It was a dog. It was a big dog.

  Seven hundred twelve counts of extortion. Eight hundred and forty-nine counts of racketeering. Two hundred and forty-six counts of fraud. Eighty-seven counts of conspiracy murder.Five hundred and twenty-seven counts of obstruction of justice. How do the defendants plead?

  Every man who has lotted here over the centuries, has looked up to the light and imagined climbing to freedom. So easy, so simple! And like shipwrecked men turning to seawater foregoing uncontrollable thirst, many have died trying. And then here there can be no true despair without hope. So as I terrorize Gotham, I will feed its people hope to poison their souls. I will let them believe that they can survive so that you can watch them climbing over each other to stay in the sun. You can watch me torture an entire city. And then when you've truly understood the depth of your failure, we will fulfill Ra's Al Ghul's destiny. We will destroy Gotham. And then, when that is done, and Gotham is... ashes Then you have my permission to die.

  If you're good at something, never do it for free.

  I'm Batman

  You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. And we have no money for surgeries. She can't take it. I just wanna see her smile again. I just want her to know that I don't care about the scars. So, I do this to myself. And you know what? She can't stand the sight of me. She leaves. Now I see the funny side. Now I'm always smiling.</p>
  <p>Justice is about harmony. Revenge is about you making yourself feel better.

  I seek the means to fight injustice. To turn fear against those who prey on the fearful.

  It's ends here.

  Never underestimate Gotham City. People get mugged coming home from work every day of the week. Sometimes things just go bad.

  That's a lovely lovely voice!

  Are you so desperate to fight criminals that you lock yourself in to take them on one at a time ?

  Ah yes! I was wondering what would weight first. Your spirit... or your body?

  Your Punishment Must Be More Severe.

  It was a dog. It was a big dog.

  Seven hundred twelve counts of extortion. Eight hundred and forty-nine counts of racketeering. Two hundred and forty-six counts of fraud. Eighty-seven counts of conspiracy murder.Five hundred and twenty-seven counts of obstruction of justice. How do the defendants plead?

  Every man who has lotted here over the centuries, has looked up to the light and imagined climbing to freedom. So easy, so simple! And like shipwrecked men turning to seawater foregoing uncontrollable thirst, many have died trying. And then here there can be no true despair without hope. So as I terrorize Gotham, I will feed its people hope to poison their souls. I will let them believe that they can survive so that you can watch them climbing over each other to stay in the sun. You can watch me torture an entire city. And then when you've truly understood the depth of your failure, we will fulfill Ra's Al Ghul's destiny. We will destroy Gotham. And then, when that is done, and Gotham is... ashes Then you have my permission to die.

  If you're good at something, never do it for free.

  I'm Batman

  You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. And we have no money for surgeries. She can't take it. I just wanna see her smile again. I just want her to know that I don't care about the scars. So, I do this to myself. And you know what? She can't stand the sight of me. She leaves. Now I see the funny side. Now I'm always smiling.</p>
  <p>Justice is about harmony. Revenge is about you making yourself feel better.

  I seek the means to fight injustice. To turn fear against those who prey on the fearful.

  It's ends here.

  Never underestimate Gotham City. People get mugged coming home from work every day of the week. Sometimes things just go bad.

  That's a lovely lovely voice!

  Are you so desperate to fight criminals that you lock yourself in to take them on one at a time ?

  Ah yes! I was wondering what would weight first. Your spirit... or your body?

  Your Punishment Must Be More Severe.

  It was a dog. It was a big dog.

  Seven hundred twelve counts of extortion. Eight hundred and forty-nine counts of racketeering. Two hundred and forty-six counts of fraud. Eighty-seven counts of conspiracy murder.Five hundred and twenty-seven counts of obstruction of justice. How do the defendants plead?

  Every man who has lotted here over the centuries, has looked up to the light and imagined climbing to freedom. So easy, so simple! And like shipwrecked men turning to seawater foregoing uncontrollable thirst, many have died trying. And then here there can be no true despair without hope. So as I terrorize Gotham, I will feed its people hope to poison their souls. I will let them believe that they can survive so that you can watch them climbing over each other to stay in the sun. You can watch me torture an entire city. And then when you've truly understood the depth of your failure, we will fulfill Ra's Al Ghul's destiny. We will destroy Gotham. And then, when that is done, and Gotham is... ashes Then you have my permission to die.

  If you're good at something, never do it for free.

  I'm Batman

  You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. And we have no money for surgeries. She can't take it. I just wanna see her smile again. I just want her to know that I don't care about the scars. So, I do this to myself. And you know what? She can't stand the sight of me. She leaves. Now I see the funny side. Now I'm always smiling.</p>
        </div>
        <div className="main-sidebar" />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
