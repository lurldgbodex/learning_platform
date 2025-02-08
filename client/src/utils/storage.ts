// Save data to localStorage
export const saveToLocalStorage = (key: string, value: any) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  // Retrieve data from localStorage
  export const getFromLocalStorage = (key: string) => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return null;
    }
  };
  
  // Remove data from localStorage
  export const removeFromLocalStorage = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };
  
  // Save data to sessionStorage
  export const saveToSessionStorage = (key: string, value: any) => {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  };
  
  // Retrieve data from sessionStorage
  export const getFromSessionStorage = (key: string) => {
    try {
      const serializedValue = sessionStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error('Error retrieving from sessionStorage:', error);
      return null;
    }
  };
  
  // Remove data from sessionStorage
  export const removeFromSessionStorage = (key: string) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
    }
  };