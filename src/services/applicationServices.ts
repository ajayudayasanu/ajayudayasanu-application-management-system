

import axios from 'axios';
import {ApplicationResponse} from '../interfaces/applicationData'

export async function getAllApplications(): Promise<any> {
  const response = await axios.get<any>('https://engineering-task.elancoapps.com/api/applications');
  return response.data;
}

export async function getApplicationDetails(applicationName:string): Promise<ApplicationResponse[]> {
    const response = await axios.get<any>(`https://engineering-task.elancoapps.com/api/applications/${applicationName}`);
    return response.data;
  }