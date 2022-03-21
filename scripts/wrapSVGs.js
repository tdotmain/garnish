const { readdirSync, writeFileSync } = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, "../src/icons");
const outputDir = path.join(__dirname, "../src/icons");

function writeFile(fileURL, content, encoding) {
  if (encoding === 'base64') content = Buffer.from(content, 'base64');
  writeFileSync(fileURL, content, {encoding: encoding});
}

const namedIconExport = (name) => `${name}Icon`;

const wrappedIconFile = (file) => {
  const name = file.replace(".svg", "")
  return `
import * as React from "react";
import classnames from "classnames";

import ${name} from "./${name}.svg";

export function ${namedIconExport(name)}({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <${name} className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ${namedIconExport(name)};
`;
}

const generateIndexFile = (files = {}) => {
  const filenames = Object.keys(files);
  if (filenames.length > 0) {
    console.log('Generating index.tsx file cleaner imports');
    console.time('Generation of index.tsx took');
    
    // Define our import & export statements
    const indexFileImportStatement = (from) => `import {${from}Icon} from './${from}'\n`;
    
    let content = "";
    filenames.map(file => content += indexFileImportStatement(file));
    content += "\nexport {\n";
    filenames.map(file => content += `  ${namedIconExport(file)}, \n`);
    content += "}";
    console.timeEnd('Generation of index.tsx took');
    
    return content;
  } else {
    return 
  }
}

async function run(sourceDir, outputDir) {
  // Start
  console.log('Generating SVGs as React.Components');
  console.time('Generation SVGs took');

  // Step 1, Read from SourceDir.
  let files = [];
  readdirSync(sourceDir).forEach(file => {
    if (file.indexOf(".svg") > -1)
    files = files.concat(file);
    // exports[file.replace(".svg", "")] = require(`${iconsDir}/${file}`);
  });
  
  // Step 2, Read sourceDir files & generate wrapped versions
  let generatedFiles = {};
  files.forEach(file => {
    const name = file.replace(".svg", "");
    generatedFiles[name] = wrappedIconFile(file);
  });

  // Step 3, Inject generated files + generated index.tsx into outputDir
  Object.keys(generatedFiles).forEach((key) => {
    const path = `${outputDir}/${key}.tsx`;
    writeFile(path, generatedFiles[key], 'utf-8');
  });
  writeFile(`${outputDir}/index.tsx`, generateIndexFile(generatedFiles), 'utf-8');

  // Done!
  console.timeEnd('Generation SVGs took');
}

run(sourceDir, outputDir);
