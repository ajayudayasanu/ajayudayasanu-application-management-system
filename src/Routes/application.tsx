import { useState, useEffect } from "react";
import { getApplicationDetails } from "../services/applicationServices";
import {ApplicationResponse} from '../interfaces/applicationData'
import { ApplicationCard } from "../Components/ApplicationCard";
import { Grid,Segment,Loader,Dimmer} from 'semantic-ui-react'

export const Application=()=>{
    const pathArray = window.location.pathname.split('/');
    const applicationName = pathArray[pathArray.length - 1];
    const [applicationData, setApplicationData] =useState<ApplicationResponse[] | []>([])
    useEffect(()=>{
        async function fetchData() {
            const data:ApplicationResponse[] = await getApplicationDetails(applicationName);
            setApplicationData(data);
        }
        fetchData()
        console.log(applicationData)
    },[applicationName])

    return(
        <>
        { applicationData.length ===0 ?
        <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Segment>:
        <div>
        <Grid columns={3}>
          {applicationData.map((appData)=>(
           <ApplicationCard appData={appData}/>
          ))}
          </Grid>
        </div>}
        </>
    )
}