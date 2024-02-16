import React from 'react';
import BodyContent from '../../Configurations/bodyContent/BodyContent';
import { useNavigate } from 'react-router-dom';
import { BoxContent,BoxContent2 } from '../../Components/AppSettingComponents/BoxContent';
import Box from '../../Components/AppSettingComponents/Box'

const CTCTemplateSetting = () => {
  const navigate = useNavigate()
  return (
    <div className='ml-36'>
      <Box Configs={BoxContent} />
      <Box Configs={BoxContent2} />
    </div>
  )
}

export default CTCTemplateSetting;





