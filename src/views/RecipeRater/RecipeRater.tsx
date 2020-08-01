import React, { useEffect, useState, Fragment } from "react"
import { View, Button } from "react-native"
import { Link } from "react-router-dom"
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBody, CardImg } from "reactstrap"
import _ from 'lodash'

const RecipeRater: React.FC = (props) => { 

  return (
    <Fragment>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {props}
      </View>
    </Fragment>
  )
  
}

export default RecipeRater