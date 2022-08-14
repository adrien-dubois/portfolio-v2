import { auth } from '../../firebase'
import { FlatButton, TextArea } from '../../GlobalStyles'
import Input from '../../utils/Input'
import { ProjectForm } from './Dashboard.elements'
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { IoIosImages } from 'react-icons/io';
import { BiLink } from 'react-icons/bi';
import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>("");

  return (
    <ProjectForm>
        <form>

          
          <Input 
            type="text" 
            placeholder='Nom' 
            idField='name'
            name='name'
            icon={<BsFileEarmarkTextFill/>}
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
        

        
          <TextArea 
            placeholder='Description'
            name='decription'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        
          <Input 
            type="text" 
            placeholder='URL'
            idField='url'
            name='url'
            icon={<BiLink/>}
            value={url}
            handleChange={(e) => setUrl(e.target.value)} 
          />

          <Input 
            type="file" 
            placeholder='image' 
            idField='image'
            name='image'
            icon={<IoIosImages/>}
            value={image}
            handleChange={(e) => setImage(e.target.value)}
          />
        
          <div className="container-btn">
            <FlatButton type="submit" value="Envoyer" className='btn' />
            <button className='logout' onClick={() => auth.signOut()}>Déconnexion</button>
          </div>

        </form>
    </ProjectForm>
  )
}

export default Home