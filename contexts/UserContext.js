import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Skylar');
  const [address, setAddress] = useState('Thomas More');
  const [profilePic, setProfilePic] = useState('https://ui-avatars.com/api/?name=User&background=a496e5&color=fff');

  return (
    <UserContext.Provider value={{ username, setUsername, address, setAddress, profilePic, setProfilePic }}>
      {children}
    </UserContext.Provider>
  );
};