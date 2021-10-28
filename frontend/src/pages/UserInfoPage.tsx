import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserInfoPage = () => {
  const history = useHistory();

  const [favFood, setFavFood] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [bio, setBio] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (showSuccessMessage || showSuccessMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
        setShowSuccessMessage(false);
      }, 3000);
    }
  }, [showErrorMessage, showSuccessMessage]);

  const saveChanges = () => alert('Save functionalities');
  const resetValues = () => alert('reset Functionalities');
  const logOut = () => alert('Log out');

  return (
    <div className='content-container'>
      {showSuccessMessage && (
        <div className='message-success'>Success save data 👍🏻</div>
      )}

      {showErrorMessage && (
        <div className='message-error'>Ooops ! 💥 Somthing went wrong 😑</div>
      )}

      <label htmlFor='favfood'>Favorite Food 🍖 :</label>
      <input
        id='favfood'
        value={favFood}
        onChange={(e) => setFavFood(e.target.value)}
      />

      <label htmlFor='hairColor'>Hair Color 💇🏻‍♂️:</label>
      <input
        id='hairColor'
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />

      <label htmlFor='bio'>Bio 💬 :</label>
      <input id='bio' value={bio} onChange={(e) => setBio(e.target.value)} />

      <hr />

      <button onClick={saveChanges}>Save changes 👇</button>
      <button onClick={resetValues}>Reset Values 🗑</button>
      <button onClick={logOut}>Log Out 🚪</button>
    </div>
  );
};
