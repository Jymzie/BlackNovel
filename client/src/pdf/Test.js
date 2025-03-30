import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  import { useContext } from 'react';
  import GlobalContext from '../GlobalContext';

 
  // Create styles
  const styles = StyleSheet.create({
   
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function BasicDocument() {
    const data = useContext(GlobalContext)
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>{data[0].title}</Text>
            </View>
            <View break style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;