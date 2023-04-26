import { useState, useEffect } from 'react'
import { getResources } from "../services/resourceServices"
import { NavLink } from 'react-router-dom'
import { Table,Segment,Loader,Dimmer } from 'semantic-ui-react'

export const Resources = () => {

    const [resorces, setResources] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getResources();
            setResources(data);
        }
        fetchData()
    }, [])
    return (
        <div>
             <h2> here is the complete list of Resources. click on any application to view full details </h2>
             {resorces.length ===0 ? 
              <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            </Segment>:
<>
    <Table celled striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='2'>List of Resource</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {resorces.map((item, index) =>
                <Table.Row>
                    <Table.Cell collapsing>{index + 1}</Table.Cell>
                    <Table.Cell collapsing>
                        <NavLink to={item}>
                            {item}
                        </NavLink>
                    </Table.Cell>
                </Table.Row>)}
        </Table.Body>
    </Table>
</>}

        </div>
    )
}