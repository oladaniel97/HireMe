import { View, Text, Modal } from 'react-native'
import React from 'react'

type ModalProps = {
    visible: boolean;
    onRequestClose: () => void;
  };

const TermsModal: React.FC<ModalProps> = ({ visible, onRequestClose })=> {
    
  return (
    <View>
      <Modal  animationType='slide' style={{width:200,height:200}}  >
            <Text>HIIIIII</Text>
      </Modal>
    </View>
  )
}

export default TermsModal