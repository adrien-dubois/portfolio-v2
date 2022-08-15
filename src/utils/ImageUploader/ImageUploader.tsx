import { FunctionComponent, useEffect, useState } from "react";
import { ImUpload } from 'react-icons/im';
import IsEmpty from "../IsEmpty";
import { Uploader } from "./ImageUploader.elements";

interface InputProps {
    passData: (data: any) => void
}

const initialState = {
    value: "",
    name: "",
    size: "",
    file: ""
}

const ImageUploader: FunctionComponent<InputProps> = ({ passData }) => {

    /*----- PREPARE UPLOAD -----*/

    const [picData, setPicData] = useState<any>(initialState);
    const [base64, setBase64] = useState<string>();

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
                        name: file.name
                    })
                }
            }
        }
    }

    const _handleReaderLoaded= (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        const base = btoa(binaryString);
        setBase64("data:image/png;base64," + base);
    }

    useEffect(() => {

        if(!IsEmpty(base64)){
            setPicData({
                ...picData,
                value: base64
            })
        }

        if(!IsEmpty(picData.value)){
            passData(picData)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [base64, picData.value])

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
        <div className={ base64 ? "file-name" : "file-name hidden" }>
            <p><b>Nom : &nbsp;</b>{picData.name} </p>
        </div> 
        
    </Uploader>
  )
}

export default ImageUploader