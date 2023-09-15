//! 13-dars
// 	- state management?
// 	- prop drilling?
// 	- lifting state up?

//!state management => statelarni boshqarish
//!prop drilling => parentdan childga, childdan subChildga prop jonatish , proyektni sekinlashtirishi munkin
//!lifting state up => statelarni yuqoriga yani parent componentga kotarish

//!Context API
//create context
const StudentContext = createContext();

//put on store
const StudentsList = ({ children }) => {
  return <StudentContext.Provider>{children}</StudentContext.Provider>;
};
export default StudentsList;

//useContext
