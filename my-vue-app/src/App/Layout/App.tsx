import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../Features/activities/Dashboard/ActivityDashboard';
function App()
{
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data)
            })
    }, [])

    return (
        <Fragment>
          <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard activities={activities} />
          </Container>

      </Fragment>
  )
}

export default App
