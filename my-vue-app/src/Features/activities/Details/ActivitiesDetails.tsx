import React, { act } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../App/Models/activity';

interface Props {
    activity: Activity;
}
export default function ActivityDetails({ activity }: Props) {
    return (
        <Card>
            <Image src={`/Assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    );
}