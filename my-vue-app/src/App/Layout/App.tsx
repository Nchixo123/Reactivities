import { useEffect, useState } from 'react'
import axios from 'axios';
import { List } from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './NavBar';
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
      <div>
          <NavBar />

          <List>
              {activities.map((activity: Activity) => (
                  <List.Item key={activity.id}>
                      {activity.title}
                  </List.Item>)
              )}
          </List>
      </div>
  )
}

export default App
