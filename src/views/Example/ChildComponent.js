import React from 'react';
// import ReactDOM from 'react-dom/client';

import './Demo.scss'

class ChildComponent extends React.Component {

    // re-render
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete', job)
        this.props.deleteAJob(job)
    }


    render() {
        console.log('>>> check props:', this.props);

        let { arrJobs } = this.props; // cú pháp ngắn
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional', check)


        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id} >
                                            {item.title} - {item.salary}
                                            <> </><span onClick={() => this.handleOnclickDelete(item)}>
                                                x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props; // cú pháp ngắn

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary > 500) {
//                             return (
//                                 <div key={item.id} >
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }

//             </div>
//         </>
//     )
// }
export default ChildComponent;