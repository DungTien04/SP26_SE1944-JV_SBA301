import React from "react";
class CourseListPage extends React.Component {
    constructor(props){
       super(props);
        // [3, 6,7,8]
       this.state = {
        courses: [
            {courseId: "C01", title: "Java SE", studentNumber: 0, price: 100},
            {courseId: "C02", title: "SQL", studentNumber: 1, price: 100},
            {courseId: "C03", title: "Learn Korean", studentNumber: 0, price: 100},
            {courseId: "C04", title: "Python", studentNumber: 0, price: 100},
            {courseId: "C05", title: "Gen AI", studentNumber: 0, price: 100},
        ],
       }
    }

    componentDidMount(){
        console.log("Component Did Mount!");
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        const items = this.state.courses.map((course)=> {
            const enrolledCourse = prevState.courses.find((c)=> (course.courseId===c.courseId &&course.studentNumber!==c.studentNumber));

            return enrolledCourse;
        });

        console.log(items);
    }

    enroll = (id)=> {

        console.log("Enrollment!" + id);
        const newListCourse = this.state.courses.map((c)=>{
            if(c.courseId !== id) return c;
            
            //console.log(c);

            return {...c, studentNumber: c.studentNumber + 1};
        });

        console.log(newListCourse);
        this.setState({courses: newListCourse})
    }

    render(){
        return(
            <div style={{margin: "10px 0 0 20px"}}>
            <h3>Course List</h3>
            <hr />
            {this.state.courses.map((c, index)=>(
                <div style={{display:"flex", marginBottom: "30px"}} key={index}>
                    <h3>{c.title}</h3>
                    Price: <p>{c.price}</p>
                    Student Number: <p>{c.studentNumber}</p>
                    <button style={{height:"60px", width: "150px", borderRadius: "5px"}}
                    onClick={()=>{this.enroll(c.courseId)}}
                    >Enrollment</button>
                </div>

            ))}

            </div>
        )
    }
}

export default CourseListPage;