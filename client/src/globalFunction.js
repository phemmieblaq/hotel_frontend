export const checkStaffEmail = (email) => {
    let emailArr = email?.split("");
    let index = emailArr?.indexOf("@");
    let check = email?.slice(index + 1, index + 11)?.toLowerCase();
    let staff = check === "crownhotel" ? true : false;
    return staff;
  };

     

 export const handleLogout = (navigate) => {
    // clear localstorage
    localStorage.clear();

    //navigate
    navigate("/signin");
  };

  export const formatDate = (inputDate, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'UTC', // Ensure the date is interpreted in UTC
    };
  
    const mergedOptions = { ...defaultOptions, ...options };
    const date = new Date(inputDate);
  
    return date.toLocaleString('en-US', mergedOptions);
  };
  
  // Example usage:
  // const inputDate = "2023-12-06T00:00:00.000Z";
  // const formattedDate = formatDate(inputDate);
  
  // console.log(formattedDate);
  
  
  