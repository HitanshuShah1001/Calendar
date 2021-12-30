import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import {Divider} from 'react-native-elements';
import {StyleSheet} from 'react-native';

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
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="8" /> 
    <Rect x="100" y="48" rx="3" ry="3" width="180" height="6" /> 
    <Rect x="100" y="68" rx="3" ry="3" width="140" height="6" />
    <Rect x="100" y="88" rx="3" ry="3" width="70" height="20" />
    <Rect x="10" y="20" rx="3" width="80" height="80" />
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
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="8" /> 
    <Rect x="100" y="48" rx="3" ry="3" width="180" height="6" /> 
    <Rect x="100" y="68" rx="3" ry="3" width="140" height="6" />
    <Rect x="100" y="88" rx="3" ry="3" width="70" height="20" />
    <Rect x="10" y="20" rx="3" width="80" height="80" />
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
    <Rect x="100" y="28" rx="3" ry="3" width="250" height="8" /> 
    <Rect x="100" y="48" rx="3" ry="3" width="180" height="6" /> 
    <Rect x="100" y="68" rx="3" ry="3" width="140" height="6" />
    <Rect x="100" y="88" rx="3" ry="3" width="70" height="20" />
    <Rect x="10" y="20" rx="3" width="80" height="80" />
  </ContentLoader>
  <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>
  </>
)
const styles=StyleSheet.create({
    dividerstyle:{
        marginLeft:13,
        marginRight:13,
        marginTop:10
    },
})

export default Skeletonloader;

