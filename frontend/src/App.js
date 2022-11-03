import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Schedules from "./components/schedules";
import NotFound from "./components/notFound";
//import Notices from "./components/notices";
import Notices from "./components/ListNotice";
import classReport from "./components/classReport";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import Enroll from "./components/enroll";
import homePage from "./components/homePage";
import myCourses from "./components/myCourses";
import Promotion from "./components/promotion";
import Achini from "./components/achinitest";
import AddNotice from "./components/AddNotice";
import ListNotice from "./components/ListNotice";
import staffProfile from "./components/StaffProfile";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

//pasindu
import AddStudent from "./components/addStudent";
import StudentLogin from "./components/studentLogin";
import TeacherLogin from "./components/teacherLogin";
import StaffLogin from "./components/staffLogin";
import AdminLogin from "./components/adminLogin";
import UpdateStudntPassword from "./components/updateStudentPassword";
import AdminDashbord from "./components/adminDashboard";
import PaymentGatway from "./components/paymentGateway";
import LoginSelection from "./components/loginSelection";
import FeebackForm from "./components/feedbackForm";
import AdminProfile from "./components/adminProfile";
import UpdateAdminProfile from "./components/updateAdminProfile";
import DeleteStudent from "./components/deleteStudent";
import Calander from "./components/calender";
import AllFeedback from "./components/feedbacksAll";
import AllStudents from "./components/allStudents";
//pasindu

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute
              path="/movies/:id"
              component={MovieForm}
              // render={(props) => {
              //   if (!user) return <Redirect to="/login" />;
              //   return <MovieForm {...props} />;
              // }}
            />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            ></Route>
            <Route path="/notices" component={Notices}></Route>
            <Route path="/schedules" component={Schedules}></Route>
            <Route path="/enroll/:id" component={Enroll}></Route>
            <Route path="/myCourses/:id" component={myCourses}></Route>
            <Route path="/classReport" component={classReport}></Route>
            <Route path="/homePage" component={homePage}></Route>
            <Route path="/promotion" component={Promotion}></Route>
            <Route path="/AddNotice" component={AddNotice}></Route>
            <Route path="/achinitest" component={staffProfile}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            //pasindu
            <Route path="/loginselect" component={LoginSelection} />
            <Route path="/logout" component={homePage} />
            <Route path="/studentLogin" component={StudentLogin} />
            <Route path="/teacherLogin" component={TeacherLogin} />
            <Route path="/staffLogin" component={StaffLogin} />
            <Route path="/adminLogin" component={AdminLogin} />
            <Route path="/adminDashboard" component={AdminDashbord} />
            <Route path="/adminProfile" component={AdminProfile} />
            <Route path="/updateAdmin" component={UpdateAdminProfile} />
            <Route path="/addFeedback" component={FeebackForm} />
            <Route path="/allFeedbacks" component={AllFeedback} />
            <Route path="/paymentGateway" component={PaymentGatway} />
            <Route path="/allStudents" component={AllStudents} />
            //pasindu
            <Redirect from="/" exact to="/homePage" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
