import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppTheme } from './theme';
import TableTasks from './TableTasks';

function UserTasks() {
    const[usr, setUsr] = useState({Id:'',Name:''});
    useLayoutEffect(() => {
        let UsrIdEl = document.getElementById('user_id').value;
        let UsrNameEl = document.getElementById('user_name').value;
        setUsr({Id:UsrIdEl, Name:UsrNameEl});
    }, []);

    return (
        <AppTheme>
        <div className="container mt-1">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card text-center">
                        <div className="card-header"><h3>React-Laravel TODO List </h3></div>
                        <TableTasks currentUser={usr}/>
                    </div>
                </div>
            </div>
        </div>
        </AppTheme>
    );

}

export default UserTasks;

if (document.getElementById('usertasks')) {
    ReactDOM.render(<UserTasks />, document.getElementById('usertasks'));
}