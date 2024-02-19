import  { useState } from 'react';
import Button from "../../components/Buttons/index.js";
import Alert from "../../components/Alert/index.js";
import Modal from "../../components/Modal/Modal.jsx";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup.jsx";

const HomePage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isShowModal, setIsShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState('description')


  const showAlertWithStyle = (style, message) => {
    setAlertStyle(style);
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleOpenModal = ()=>{
      setIsShowModal(true)
  }
  const handleCloseModal = ()=>{
    setIsShowModal( false)
  }
  const items = [
    {name: 'Description',value: 'description'},
    {name: 'Options',value: 'options'},
    {name: 'Reviews',value: 'reviews'},
  ]
  const items2 = [
    {name: 'Buy'},
    {name: 'Sell'},
    {name: 'Rent'}
  ]
  return (
    <div>
        <ButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} items={items}/>
      {activeTab === 'description' && <div>Описание</div>}
      {activeTab === 'options' && <div>Опции</div>}
      {activeTab === 'reviews' && <div>Отзывы</div>}


        <ButtonGroup items={items2}/>

      {isShowModal && (
        <Modal close={ handleCloseModal}>
          <h2>Lorem ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, tenetur!</p>
        </Modal>
      )}
      <Button onClick={handleOpenModal} text='Open Modal' />
      <Button variant='success' text='Войти' />
      <Button variant='danger' text='Войти' />
      <Button variant='warning' text='Регистрация' />
      <Button variant='info' text='Информация' />

      <Alert  variant='success' message='Войти' />
      <Alert  variant='warning ' message='Войти' />
      <Alert  variant='info' message='Войти' />
      <Alert  variant='danger' message='Войти' />


      {showAlert && (
        <Alert variant={alertStyle} message={alertMessage}  />
      )}
    </div>
  );
};

export default HomePage;