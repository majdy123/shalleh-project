import React, { Component } from 'react'
import Header from '../header/Header'
import View_footer from './view_footer'
import Card_body_view from '../card-body-table/Card-body';
import './view.css'


export default class View extends Component {
  render() {
    return (
        <>
        <Header  />
        {/* View Body */}
        <Card_body_view />
        {/* View Body */}
        <View_footer/>
        </>
    )
  }
}
