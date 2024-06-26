import axios from 'axios';
import { JobApplicationResponse } from '../model/JobApplication'; // Adjust the path according to your project structure

export const getJobApplication = async (pageNo = 0, pageSize = 2, companyid?: number): Promise<JobApplicationResponse> => {
  const response = await axios.post<JobApplicationResponse>('http://localhost:8080/internbridge/manager/jobApplication?companyid='+companyid +'&pageNo=' + pageNo + '&pageSize=' + pageSize);
  return response.data;
};
