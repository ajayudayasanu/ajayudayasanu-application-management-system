import { NavLink, useNavigate } from "react-router-dom"
import { Card, Icon, Grid } from 'semantic-ui-react'


export const Home = () => {
    const navigate = useNavigate()

    const navigateToPage = (location: string) => {
        navigate(`/${location}`)
    }
    return (
        <div className="homeCards">
           <div> <h1 className="heading">Select a category to view the details</h1>
           </div>
           <div className="main-cards">
            <Card onClick={() => navigateToPage('application')} className="cards-main">
              
                <Card.Content>
                <Icon name="chart line" size="massive"/>
                    <Card.Header>Applications</Card.Header>
                    <Card.Description>Go to Applications</Card.Description>
                </Card.Content>
            </Card>'
            '
            <Card onClick={() => navigateToPage('resource')}>
           
                <Card.Content>
                <Icon name="industry" size="massive"/>
                    <Card.Header>Resources</Card.Header>
                    <Card.Description>Go to Resources</Card.Description>
                </Card.Content>
            </Card>
            </div>

        </div>
    )
}