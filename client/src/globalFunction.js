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

  