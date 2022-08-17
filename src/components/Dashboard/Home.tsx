import { FlatButton, InverseBtn, TextArea } from '../../GlobalStyles'
import { ProjectForm } from './Dashboard.elements'
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { useState } from 'react';
import ImageUploader from '../../utils/ImageUploader/ImageUploader';
import Input from '../../utils/Input/Input';
import * as api from '../../api';

const initialState = {
  name: "",
  url: "",
  description: "",
  picture: ""
}

const Home = () => {

  const [formData, setFormData] = useState(initialState);
  const [error,] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitProject = async (e: any) => {
    e.preventDefault();
    try {
      await api.sendProject(formData)
      .then(
        () => {
          setFormData({
            name: "",
            url: "",
            description: "",
            picture: ""
          });
          alert('Article posté!')
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  const passData = ( data: any ) => {
    setFormData({
      ...formData,
      picture: data
    })
  }

  const logout = () => {
    localStorage.clear();
    return window.location.href="/";
  }

  return (
    <ProjectForm>
        <form>
          <h1>
            Upload un nouveau projet
          </h1>

          <Input 
            type="text" 
            placeholder='Nom' 
            idField='name'
            name='name'
            icon={<BsFileEarmarkTextFill/>}
            value={formData.name}
            handleChange={handleChange}
            error={error}
          />

          <TextArea 
            placeholder='Description'
            name='description'
            id='description'
            onChange={handleChange}
            value={formData.description}
          />
        
          <Input
            type="text" 
            placeholder='URL'
            idField='url'
            name='url'
            icon={<BiLink/>}
            value={formData.url}
            handleChange={handleChange} 
            error={error}
          />

          <ImageUploader passData={passData} />
        
          <div className="container-btn">
            <FlatButton type="submit" value="Envoyer" className='btn' onClick={submitProject} />
            <InverseBtn className='logout' onClick={logout}>Déconnexion</InverseBtn>
          </div>

        </form>
        
    </ProjectForm>
  )
}

export default Home