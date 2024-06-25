/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { act } from 'react';
import { Activity } from '../../../App/Models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' content='view' color='blue' />
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}