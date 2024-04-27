import { useState, useEffect } from 'react';
import '../componentsStyle/dowloadData.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Ошибка получения данных');
      }

      const data = await response.json();
      setUsers(data);
      setIsLoading(false); 

    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error.message); 
      setIsLoading(false); 
    }
  };
  
  useEffect(() => {
    fetchUsers(); 
  }, []); 

  if (isLoading) {
    return <p className="loading-message">Загрузка данных...</p>; 
  }

  return (
    <div className="user-list-container">
    <p className='title'>Список пользователей</p>
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list-item">
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default UserList;