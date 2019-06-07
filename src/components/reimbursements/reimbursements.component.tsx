import React from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { NavLogOutComponent } from '../navlogout/navlogout.component';
import { Link } from 'react-router-dom'


interface IReimbursementsState {
    reimbursements: Reimbursement[]
}


export class ReimbursementsComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            reimbursements: []
        }
    }
   

    getAllReimbursements = async () => {

        console.log('trying to get all reimbursements')
        console.log(this.props) 
        // let match = matchPath(this.props.history.location.pathname, {
        //     path: '/path/:param',
        //     exact: true,
        //     strict: false
        //   })
        try {
            
            const response = await fetch('http://localhost:3000/reimbursements/status', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })

            console.log(response);

            // if(response.status === 401){
            //     this.setState({
            //         errorMessage:'Invalid Credentials'
            //     })
            // } else 
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)

                this.setState({
                    reimbursements : resBody
                })
                // this.props.history.push('/users')

                // } else {
                //     document.getElementById('error-message').innerText = 'You Can\'t login right now'
            } else if (response.status === 401) {
                alert('Unauthorized, please login first!')
            }




        } catch (err) {
            console.log(err);
        }
    }


    //call the function getAllUsers() after first time render the page, this is the second time render the getAllUsers()
    componentDidMount() {
        this.getAllReimbursements()
    }
   

   

    render() {
        const { reimbursements } = this.state
        return (
            
            <div className="getAllReimbursements">
                <NavLogOutComponent />
                <h1>Get all reimbursements</h1><br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Reimbursement ID</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Resolver</th>
                            <th>Status</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reimbursements.map((reimbursement) => {
                            return (
                                <tr key={reimbursement.reimbursementId}>
                                    <td>{reimbursement.reimbursementId}</td>
                                    <td>{reimbursement.author}</td>
                                    <td>{reimbursement.amount}</td>
                                    <td>{reimbursement.dateSubmitted}</td>
                                    <td>{reimbursement.dateResolved}</td>
                                    <td>{reimbursement.description}</td>
                                    <td>{reimbursement.resolver}</td>
                                    <td><Link to={'/reimbursements/status/' + reimbursement.status}>{reimbursement.status}</Link></td>
                                    <td>{reimbursement.type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
 
                    
                
            </div>
                
            )
    }
}

