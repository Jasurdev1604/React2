import React, { Components } from "react";

class Index extends React.Component {
  render() {
    // const { title, status } = this.props;

    return (
      <React.StrictMode>
        {/* <h1> */}
        {/* Jasurbek {title} {status || "none"}
        </h1>
        <p>{this.props?.data?.name}</p> */}
        {/* <h2>{this.props.children}</h2> */}
        <h1>
          {this.props.data.id} - {this.props.data.name} - {this.props.data.age}
        </h1>
      </React.StrictMode>
    );
  }
}

// class Student extends React.Component {
//   render() {
//     return (
//       <React.StrictMode>
//         <h1>Student</h1>
//       </React.StrictMode>
//     );
//   }
// }

// export { Index };
export default Index;
