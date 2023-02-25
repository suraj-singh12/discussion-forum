export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  
  export const formatName = (user) => {
    return `${user.first_name} ${user.last_name}`;
  };
  
  export const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substr(0, maxLength - 3) + '...';
  };
  