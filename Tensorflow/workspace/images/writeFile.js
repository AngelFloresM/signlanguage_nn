const { writeFile, rm } = require("fs/promises");
const path = require('path')
const os = require('os')

const fileContent = (letter, numFile) => {
  return `<annotation>
    <folder>${letter}</folder>
    <filename>${letter}${numFile}.jpg</filename>
    <path>C:\\Users\\angel\\OneDrive\\Documentos\\CUCEI\\SSPAI2\\Proyecto\\RealTimeObjectDetection\\Tensorflow\\images\\collectedimages\\asl_alphabet_train\\asl_alphabet_train\\${letter}\\${letter}${numFile}.jpg</path>
    <source>
      <database>Unknown</database>
    </source>
    <size>
      <width>200</width>
      <height>200</height>
      <depth>3</depth>
    </size>
    <segmented>0</segmented>
    <object>
      <name>${letter}</name>
      <pose>Unspecified</pose>
      <truncated>1</truncated>
      <difficult>0</difficult>
      <bndbox>
        <xmin>1</xmin>
        <ymin>1</ymin>
        <xmax>198</xmax>
        <ymax>198</ymax>
      </bndbox>
    </object>
  </annotation>`;
};

// const path =
//   "C:\\Users\\angel\\OneDrive\\Documentos\\CUCEI\\SSPAI2\\Proyecto\\RealTimeObjectDetection\\Tensorflow\\images\\collectedimages\\asl_alphabet_train\\asl_alphabet_train\\";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(fileContent(4))

async function createFile() {
  // for (const letter of letters) {
  //   // console.log(letter)
  //   for (let i = 1; i <= 1000; i++) {
  //     try {
  const promise = rm('./Tensorflow/workspace/images/test/.gitkeep');
  await promise;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // }
}

// createFile().then(() => console.log("Ready"));
console.log(__dirname)
