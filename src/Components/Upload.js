import React, { useEffect } from 'react'
import useDrivePicker from 'react-google-drive-picker'

const Upload = () => {
    const [openPicker,data,authResponse]= useDrivePicker()

    const handleOpenPicker=() => {
        openPicker({
            clientId:'930322351726-54ehnqnb29e4jt648l13q38akit61nf7.apps.googleusercontent.com',
            developerKey:'AIzaSyAHQ3deujf-JDRdi1xH773dQol_hRFnLAY',
            viewId:'DOCS',
            token:'ya29.a0AfB_byBflHD0PE52uPkuy-VNuNyf0-aQyZQbl1QX8uJNQJvJuRMGj4F9Wd9vZUuZxmyaFIc9z-mciNrzmImOmhYXRmd_qiJHs2LrlOSj3ORcPxDx8AP4ZOc8dPQawfPwEM6Ql1DsPRWIx5KSJlhvHS5Y2qgFwy77LMqFaCgYKAQoSARISFQGOcNnCvPbkCwNrEAea4aJbPFfSyw0171',
            showUploadFolders:true,
            showUploadView:true,
            supportDrives:true,
            multiselect:true,

        })
    }

    useEffect(() =>{
        if(data){
            data.docs.map((i) => console.log(i))
        }
    },[data])
  return (
    <div>
        <button onClick={() =>handleOpenPicker()}>Open Picker</button>
    </div>
  )
}

export default Upload