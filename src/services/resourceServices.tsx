

import axios from 'axios';
import {ResourceResponse} from '../interfaces/resourceData'

export async function getResources(): Promise<any> {
  const response = await axios.get<any>('https://engineering-task.elancoapps.com/api/resources');
  return response.data;
}

export async function getResourceDetails(resourceName:string): Promise<ResourceResponse[]> {
    const response = await axios.get<any>(`https://engineering-task.elancoapps.com/api/resources/${resourceName}`);
    return response.data;
  }