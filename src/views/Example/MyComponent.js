import React from 'react';
// import ReactDOM from 'react-dom/client';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    /*
    JSX => return block
    fragment
     */
    //key:value
    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'DEV', salary: '600' },
            { id: 'abcJob3', title: 'Tester', salary: '300' },
            { id: 'abcJob4', title: 'DevOp', salary: '1000' }
        ]
    };

    addNewJob = (job) => {
        console.log('check jobfrom parent:', job);
        // let curentJobs = this.state.arrJobs;
        // curentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: curentJobs

        })

    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didUpdate', 'prevState', prevState, 'curentState', this.state)
    }
    componentDidMount() {
        console.log('>>> run componentDidMount');
    }


    render() {
        console.log('>>> call render:', this.state);

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    // name={this.state.firstName}
                    // age={'21'}
                    // address={'HaNoi'}
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;