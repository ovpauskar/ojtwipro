import axios from 'axios';

export class getIssueList {

    getTotalIssueList() {
    const issuePromise = axios.get('https://my-json-server.typicode.com/kiranrkkulkarni/issuetrackerMock/issues/') 
                            .then(res => res.data);

    return issuePromise ;
  }

}