import { FunctionComponent, useEffect, useState } from "react";
import { ImUpload } from 'react-icons/im';
import IsEmpty from "../IsEmpty";
import { Uploader } from "./ImageUploader.elements";

interface InputProps {
    passData: (data: any) => void
}

const initialState = {
    base64: "",
    name: "",
    size: "",
    file: ""
}

const ImageUploader: FunctionComponent<InputProps> = ({ passData }) => {

    /*----- PREPARE UPLOAD -----*/

    const [picData, setPicData] = useState<any>(initialState);
    const [base6, setBase6] = useState<string>("");

    const onChange = (e: any) => {
        let file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
            if(reader !== undefined && file !== undefined) {
                reader.onloadend = () => {
                    setPicData({
                        ...picData,
                        file: file,
                        size: file.size,
                        name: file.name,
                        base64: base6
                    })
                }
            }
        }
    }

    const _handleReaderLoaded= (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        const base = btoa(binaryString);
        setBase6("data:image/png;base64," + base);
    }

    useEffect(() => {
        if(!IsEmpty(picData) && !IsEmpty(base6)){
            passData(picData)
        }
    }, [base6])

  return (
    <Uploader>
        <ImUpload/>
        <input 
            type="file" 
            name='avatar' 
            id='file'
            accept='image/png,
                    image/jpg,
                    image/jpeg'
            onChange={(e) => onChange(e)}
        /> 
    </Uploader>
  )
}

export default ImageUploader