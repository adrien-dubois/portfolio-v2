import { auth } from '../../firebase'
import { FlatButton, InverseBtn, TextArea } from '../../GlobalStyles'
import Input from '../../utils/Input'
import { ProjectForm } from './Dashboard.elements'
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { useState } from 'react';
import ImageUploader from '../../utils/ImageUploader/ImageUploader';

const initialState = {
  name: "",
  url: "",
  description: "",
  image: ""
}

const Home = () => {

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitProject = (e: any) => {
    e.preventDefault();
    console.log(formData)
  }

  const passData = ( data: any ) => {
    setFormData({
      ...formData,
      image: data
    })
  }

  return (
    <ProjectForm>
        <form>

          <Input 
            type="text" 
            placeholder='Nom' 
            idField='name'
            name='name'
            icon={<BsFileEarmarkTextFill/>}
            value={formData.name}
            handleChange={handleChange}
          />

          <TextArea 
            placeholder='Description'
            name='description'
            id='description'
            onChange={handleChange}
          />
        
          <Input 
            type="text" 
            placeholder='URL'
            idField='url'
            name='url'
            icon={<BiLink/>}
            value={formData.url}
            handleChange={handleChange} 
          />

          <ImageUploader passData={passData} />
        
          <div className="container-btn">
            <FlatButton type="submit" value="Envoyer" className='btn' onClick={submitProject} />
            <InverseBtn className='logout' onClick={() => auth.signOut()}>Déconnexion</InverseBtn>
          </div>

        </form>
    </ProjectForm>
  )
}

export default Home