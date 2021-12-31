import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"
import {Divider} from 'react-native-elements';
import {StyleSheet} from 'react-native';

/*
This component basically is the design layout 
for the skeleton loader where we use a React native content loader library.
*/

const Skeletonloader = (props) => (
    <>
  <ContentLoader 
    speed={0.7}
    width={800}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="15" /> 
    <Rect x="100" y="58" rx="3" ry="3" width="180" height="15" /> 
    <Rect x="100" y="88" rx="3" ry="3" width="260" height="12" />
    <Rect x="100" y="118" rx="10" ry="19" width="70" height="20" />
    <Rect x="10" y="30" rx="3" width="80" height="80" />

  </ContentLoader>

  <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>

  <ContentLoader 
    speed={0.7}
    width={800}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#E0E0E0"
    {...props}
  >
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="15" /> 
    <Rect x="100" y="58" rx="3" ry="3" width="180" height="15" /> 
    <Rect x="100" y="88" rx="3" ry="3" width="260" height="12" />
    <Rect x="100" y="118" rx="10" ry="19" width="70" height="20" />
    <Rect x="10" y="30" rx="3" width="80" height="80" />

  </ContentLoader>

  <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>

  <ContentLoader 
    speed={0.7}
    width={800}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#F3F3F3"
    foregroundColor="#E0E0E0"
    {...props}
  >
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="15" /> 
    <Rect x="100" y="58" rx="3" ry="3" width="180" height="15" /> 
    <Rect x="100" y="88" rx="3" ry="3" width="260" height="12" />
    <Rect x="100" y="118" rx="10" ry="19" width="70" height="20" />
    <Rect x="10" y="30" rx="3" width="80" height="80" />
    
  </ContentLoader>
  <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>
  </>
)
const styles=StyleSheet.create({
    dividerstyle:{
        marginLeft:13,
        marginRight:13,
    },
})

export default Skeletonloader;

