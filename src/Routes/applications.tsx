import { useState, useEffect } from 'react'
import { getAllApplications } from "../services/applicationServices"
import { NavLink } from 'react-router-dom'
import { Table,Segment,Loader,Dimmer } from 'semantic-ui-react'

export const Applications = () => {

    const [application, setApplication] = useState<string[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await getAllApplications();
            setApplication(data);
        }
        fetchData()
    }, [])
    return (
        
        <div>
            <h2> here is the complete list of applications. click on any application to view full details </h2>
         {application.length ===0 ? 
              <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            </Segment>: 
            <>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'>List of Applications</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {application.map((item, index) =>
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