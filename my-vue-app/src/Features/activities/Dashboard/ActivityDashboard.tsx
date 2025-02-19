import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Activity } from '../../../App/Models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../Details/ActivitiesDetails';
import ActivityForm from '../Form/ActivityForm';
interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} />
            </Grid.Column>
            <GridColumn width='6'>
                {activities[0] &&
                    <ActivityDetails activity={activities[0]}></ActivityDetails>}
                <ActivityForm></ActivityForm>
            </GridColumn>
        </Grid>
    )
}