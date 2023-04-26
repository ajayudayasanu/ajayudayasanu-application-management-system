import { useState, useEffect } from "react";
import { getResourceDetails } from "../services/resourceServices";
import {ResourceResponse} from '../interfaces/resourceData'
import { ApplicationCard } from "../Components/ApplicationCard";
import { Grid,  } from 'semantic-ui-react'

export const Resource=()=>{
    const pathArray = window.location.pathname.split('/');
    const resourceName = pathArray[pathArray.length - 1];
    const [resourceData, setResourceData] =useState<ResourceResponse[] | []>([])
    useEffect(()=>{
        async function fetchData() {
            const data:ResourceResponse[] = await getResourceDetails(resourceName);
            setResourceData(data);
        }
        fetchData()
        console.log(resourceData)
    },[resourceName])

    return(
        <div>
        <Grid columns={3}>
          {resourceData.map((appData)=>(
           <ApplicationCard appData={appData}/>
          ))}
          </Grid>
        </div>
    )
}