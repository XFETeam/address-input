import React, {Component} from 'react'
import styles from './style.scss'
import {CSSTransition} from 'react-transition-group'

export default class Poop extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {children, state, close} = this.props
    return (
      <div className={styles.root}>
        <CSSTransition
          in={state}
          timeout={300}
          classNames='up'
          unmountOnExit
        >
          <div className={styles.main}>
            <div className={styles.close} onClick={close} />
            {children}</div>
        </CSSTransition>
        <CSSTransition
          in={state}
          timeout={300}
          classNames='fade'
          unmountOnExit
        >
          <div className={styles.texture} onClick={close} />
        </CSSTransition>
      </div>
    )
  }
}
