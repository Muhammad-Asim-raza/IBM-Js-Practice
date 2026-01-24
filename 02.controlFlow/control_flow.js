let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);
let roll= "Employee";
let access;
if(roll=== "Employee"){
    access="Have an access to Dietary Services";
}
else if(roll==="Enrolled Member"){
    access="Have access to Dietary Services and one-on-one interaction with a dietician.";
}else if(roll==="Subscriber"){
    access=" Have partial access to facilitate Dietary Services only.";
}
else if(roll==="Non-Subscriber"){
    access="need to enroll or at least subscribe first to avail this facility.";
}else{
    access="Not defined";
}
console.log("Access: ", access);