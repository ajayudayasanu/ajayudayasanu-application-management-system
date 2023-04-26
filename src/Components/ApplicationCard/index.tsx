import { useState, useEffect } from 'react'
import {ApplicationResponse} from '../../interfaces/applicationData'
import { Card, Icon } from 'semantic-ui-react'

interface Props {
    appData: ApplicationResponse;
  }
  

export const ApplicationCard = (props: Props) => {



    return (
        <Card.Group centered>
        <Card fluid >
        <Card.Content>
          <Card.Header>{props.appData.MeterCategory}</Card.Header>
          <Card.Meta><b>Resource group: </b>{props.appData.ResourceGroup}</Card.Meta>
          <Card.Description>
           <div><b>Cost:</b> {props.appData.Cost}</div>
           <div><b>Service Name:</b> {props.appData.ServiceName}</div>
           <div><b>Unit Of Measure:</b> {props.appData.UnitOfMeasure}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
      <Icon name='globe' />
      {props.appData.Location} 
      <span></span>
      <Icon name='calendar alternate' />
      {props.appData.Date}
    </Card.Content>
      </Card>
      </Card.Group>
    )
}